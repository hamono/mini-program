import { Image, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import "./index.scss";

export default function FloatStar({
  imgPath,
  setImgPath,
  speed
}: {
  imgPath: string;
  setImgPath: any;
  speed:number
}) {
  const INIT_X = 300 * Math.random();
  const OFFSET_X = (Math.random() > 0.5 ? 100 : -100) * Math.random();
  const INIT_Y=50 * Math.random();

  const [animation, setAnimation] = useState({
    isShow: true,
    animationData: {},
  });

  const animations = Taro.createAnimation({
    duration: speed,
    timingFunction: "linear",
  });

  const showTips = () => {
    animations.translateY("calc(200vh )");
    animations.translateX(OFFSET_X).step({
      duration: speed,
      timingFunction: "linear",
    });

    animations.translateY(-50).step({
      duration: 0,
      timingFunction: "linear",
    });

    setAnimation({ isShow: true, animationData: animations.export() });

     setTimeout(() => {
      setAnimation({ isShow: false, animationData: {} });
      setImgPath("");
    }, speed);
  };

  useEffect(() => {
    if (imgPath) {
      showTips();
    }
  }, [imgPath]);

  return (
    <View
      style={{ right: `${INIT_X}px`,top:`${INIT_Y}px` }}
      animation={animation.animationData}
      className="star"
    >
      <Image src={imgPath} className="star" />
    </View>
  );
}
