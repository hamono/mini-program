import { Image, View } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro, { useReady } from "@tarojs/taro";
import happy from "../../images/happy.svg";
import "./index.scss";

export default function Happy() {
  const [animation, setAnimation] = useState({
    isShow: true,
    animationData: {},
  });

  const [index,setIndex]=useState(1);

  const animations = Taro.createAnimation({
    duration: 2000,
  });

  const showTips = () => {

    animations.scale(10)

    animations.opacity(1).step({
      duration: 1000,
      timingFunction: "ease",
    });

    
    setAnimation({ isShow: true, animationData: animations.export() });

    setTimeout(()=>{
      setIndex(-2);
    },1200)
  };

  useReady(()=>{
    showTips();
  })

  return (
    <View animation={animation.animationData} style={{zIndex:index}} className="happy-box">
      <Image src={happy} className="happy" />
    </View>
  );
}
