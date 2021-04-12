import { Image, View } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro, { useReady } from "@tarojs/taro";
import happy from "../../images/happy-1.svg";
import sad from "../../images/sad-1.svg";
import "./index.scss";

export default function Happy({
  show,
  setShow,
  happyness,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  happyness: boolean;
}) {
  const [animation, setAnimation] = useState({
    isShow: true,
    animationData: {},
  });

  const [index, setIndex] = useState(-1);

  const animations = Taro.createAnimation({});

  const showTips = () => {
    animations.width("80vw").height("80vw").opacity(1).step({
      duration: 2000,
      timingFunction: "ease",
    });

    animations.width(0).height(0).opacity(0).step({
      duration: 300,
      timingFunction: "ease-in",
    });

    setAnimation({ isShow: true, animationData: animations.export() });

    setTimeout(() => {
      setIndex(-1);
      setShow(false);
    }, 2300);
  };

  useEffect(() => {
    if (show) {
      setIndex(1);
      showTips();
    }
  }, [show]);

  return (
    <View className="main">
      <View
        animation={animation.animationData}
        style={{ zIndex: index }}
        className="happy-box"
      >
        <Image src={happyness ? happy : sad} className="happy" />
      </View>
    </View>
  );
}
