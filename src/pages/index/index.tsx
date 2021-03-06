import { View, ScrollView, Input, Button } from "@tarojs/components";
import "./index.scss";
import useIndex, { MsgType } from "./hooks/useIndex";
import Message, { RobotMessage } from "../../components/Message";
import Happy from "../../components/ScaleImge";

export default function Index() {
  const {
    value,
    handleChange,
    recordList,
    handleSend,
    scrollIndex,
    keyHeight,
    handleKeyHeihgt,
    handleKeyHeihgtInit,
    backgroundImg,
    show,
    setShow,
    happyness,
  } = useIndex();

  return (
    <View className="box" style={{ backgroundImage: `url(${backgroundImg})` }}>

      <Happy happyness={happyness} setShow={setShow} show={show} />

      <ScrollView
        className="scorll-view"
        scrollY
        scrollIntoView={scrollIndex}
        style={{
          height: `calc(92% - ${keyHeight}px)`,
        }}
      >
        {recordList.map((item: MsgType, index: number) => {
          if (item.type) {
            if (item.type === "mine")
              return <Message record={item} key={`mine${index}`} />;
            else return <RobotMessage record={item} key={`robot${index}`} />;
          }
          return;
        })}
      </ScrollView>
      <View className="send">
        <Input
          adjustPosition={false}
          confirmHold
          className="msg-box"
          name="input"
          value={value}
          onInput={handleChange}
          onFocus={handleKeyHeihgt}
          onBlur={handleKeyHeihgtInit}
        />
        <Button
          style={
            !value
              ? { border: "none" }
              : { background: "DeepSkyBlue", border: "none" }
          }
          className="btn-send"
          onClick={handleSend}
          type="default"
          disabled={!value}
        >
          发送
        </Button>
      </View>
    </View>
  );
}
