"use client";
import { getCalApi } from "@calcom/embed-react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const MeetingWithAzmir = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <section className="my-[10px] w-full flex justify-center items-center flex-col">
      <div className="flex flex-col items-center">
        <Player
          autoplay
          loop
          src="/lottie/Video.json"
          style={{ maxHeight: "500px", maxWidth: "500px" }}
        />
        <button
          data-cal-namespace="30min"
          data-cal-link="azmir-uddin-alif-nsakzj/30min"
          data-cal-config='{"layout":"month_view"}'
          className="text-white font-primary text-sm lg:text-base font-semibold py-3 mt-5 mb-3 bg-orange hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-100 px-8 rounded-md cursor-pointer"
        >
          Schedule a meeting
        </button>
      </div>
    </section>
  );
};

export default MeetingWithAzmir;
