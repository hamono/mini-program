import { useCallback, useEffect, useState } from "react";
import happy from "../../../images/happy.svg";
import sad from "../../../images/sad.svg";
import Taro from "@tarojs/taro";
import img0 from "../../../images/0-4.jpg";
import img1 from "../../../images/4-8.jpg";
import img2 from "../../../images/8-12.jpg";
import img3 from "../../../images/12-16.jpg";
import img4 from "../../../images/16-20.jpg";
import img5 from "../../../images/20-24.jpg";

import img6 from "../../../images/16.jpg";

export interface MsgType {
  value: string;
  type: string;
  key: string;
}

export default function useIndex() {
  const [value, setValue] = useState("");
  const [recordList, setRecordList] = useState([
    { value: "你好", type: "mine" },
    { value: "Hello, I am YuJing, nice to meet you!", type: "robot" },
  ]);
  const [scrollIndex, setScrollIndex] = useState("");
  const [keyHeight, setKeyHeight] = useState(0);
  const [backgroundImg, setBackgroundImg] = useState();

  // animation
  const [floatAnimationPath, setFloatAnimationPath] = useState("");
  const [show,setShow]=useState(false)
  const [happyness,setHappyness]=useState(true)

  const handleChange = useCallback((e) => {
    setValue(e.detail.value);
  }, []);

  const handleSend = async () => {
    if (value) {
      const record: MsgType = {
        value: value,
        type: "mine",
        key: `mine${recordList.length}`,
      };
      setRecordList([...recordList, record]);
      setScrollIndex(record.key);
      setValue("");

      await getRecord(record);
      setShow(true)
    }

    handleBackgrondImg();

    // setFloatAnimationPath(happy);
    // setFloatAnimationPath(sad);
  };

  const getRecord = async (prerecord: MsgType) => {
    const data = await Taro.request({
      url: "http://127.0.0.1:8000/upload/bot",
      method: "POST",
      data: {
        msg: value,
      },
    });

    const record: MsgType = {
      value: data.data.msg,
      type: "robot",
      key: `robot${recordList.length}`,
    };

    if(data.data?.emotion==="POSITIVE"){
      setHappyness(true)
    }else{
      setHappyness(false)
    }

    setScrollIndex(record.key);
    setRecordList([...recordList, prerecord, record]);
  };

  const handleKeyHeihgt = (e) => {
    setKeyHeight(e.detail.height);
  };

  const handleKeyHeihgtInit = () => {
    setKeyHeight(0);
  };

  const handleBackgrondImg = () => {
    const time = new Date().getHours();

    if (time >= 0 && time < 4) {
      setBackgroundImg(img0);
    } else if (time >= 4 && time < 8) {
      setBackgroundImg(img1);
    } else if (time >= 8 && time < 12) {
      setBackgroundImg(img2);
    } else if (time >= 12 && time < 16) {
      setBackgroundImg(img3);
    } else if (time >= 16 && time < 20) {
      setBackgroundImg(img4);
    } else if (time >= 20 && time < 24) {
      setBackgroundImg(img5);
    }
  };

  useEffect(() => {
    handleBackgrondImg();
  }, []);

  return {
    value,
    recordList,
    scrollIndex,
    show,
    happyness,
    handleChange,
    handleSend,
    setShow,
    keyHeight,
    handleKeyHeihgt,
    handleKeyHeihgtInit,
    backgroundImg,
    floatAnimationPath,
    setFloatAnimationPath,
  };
}
