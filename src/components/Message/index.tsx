import { Image } from "@tarojs/components";
import { MsgType } from "src/pages/index/hooks/useIndex";
import "./index.scss";
import user from "../../images/user.svg";
import robot from "../../images/robot.svg";

export default function MineMessage({ record }: { record: MsgType }) {
    return (
      <view className="box-msg" id={record.key}>
        <view className="msg-mine">{record.value}</view>
        <view className="tip-mine"></view>
        <Image className="img-mine" src={user} />
      </view>
    );
}

export function RobotMessage({ record }: { record: MsgType }) {
  return (
    <view className="box-other" id={record.key}>
      <Image className="img-other" src={robot} />
      <view className="tip-other"></view>
      <view className="msg-other">{record.value}</view>
    </view>
  );
}


