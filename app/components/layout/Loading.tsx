import { useLottie, useLottieInteractivity } from "lottie-react";
import HomeAnimation from "@/app/assets/lottie/loading.json";

export default function Loading() {
  const style = {
    height: 300,
  };
  const options = {
    animationData: HomeAnimation,
  };
  const lottieObj = useLottie(options, style);
  lottieObj.setSpeed(5);
  const Lottie = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [],
  });
  return (
    <div className="fixed z-50 grid place-items-center h-screen w-full bg-light dark:bg-primary top-0 left-0 right-0 bottom-0">
      {Lottie}
    </div>
  );
}
