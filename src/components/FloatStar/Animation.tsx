import FloatStar from ".";

export default function Animation({
  floatAnimationPath,
  setFloatAnimationPath,
}: {
  floatAnimationPath: string;
  setFloatAnimationPath: any;
}) {

  return (
    <>
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={4000*Math.random()+3000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={4000*Math.random()+3000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={4000*Math.random()+5000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={4000*Math.random()+3000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={4000*Math.random()+3000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={2000*Math.random()+4000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={2000*Math.random()+5000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={2000*Math.random()+4000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={2000*Math.random()+4000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={2000*Math.random()+4000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={2000*Math.random()+4000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={4000*Math.random()+3000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={4000*Math.random()+3000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={2000*Math.random()+5000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={2000*Math.random()+4000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={2000*Math.random()+4000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={4000*Math.random()+3000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={4000*Math.random()+3000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={2000*Math.random()+5000} />
      <FloatStar setImgPath={setFloatAnimationPath} imgPath={floatAnimationPath} speed={2000*Math.random()+4000} />
    </>
  );
}
