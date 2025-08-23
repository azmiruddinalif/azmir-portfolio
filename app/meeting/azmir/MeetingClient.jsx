"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { BsCalendar3, BsClock, BsCheckCircle } from "react-icons/bs";

const MeetingClient = ({ params }) => {
  const [calLoaded, setCalLoaded] = useState(false);
  const meetingId = params?.id || "azmir";

  // Meeting configurations
  const meetingConfigs = {
    azmir: {
      name: "Azmir Uddin Alif",
      title: "MERN Stack & Full-Stack Developer",
      calLink: "azmir-uddin-alif-nsakzj/30min",
      namespace: "30min",
      duration: "30 minutes",
      description: "Get expert advice on your web/mobile app project",
    },
  };

  const config = meetingConfigs[meetingId] || meetingConfigs.azmir;

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: config.namespace });
        cal("ui", { 
          hideEventTypeDetails: false, 
          layout: "month_view",
          theme: "light"
        });
        setCalLoaded(true);
      } catch (error) {
        console.error("Failed to load calendar:", error);
      }
    })();
  }, [config.namespace]);

  return (
    <section className="min-h-screen py-20 w-full flex justify-center items-center flex-col mt-22">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold font-primary dark:text-white mb-4">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-primary max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project and explore how we can bring your ideas to life.
          </p>
        </div>

        {/* Developer Info Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-orange rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-2xl">
                {config.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h2 className="text-2xl font-bold font-primary dark:text-white mb-2">
              {config.name}
            </h2>
            <p className="text-orange font-primary font-semibold mb-4">
              {config.title}
            </p>
            <p className="text-gray-600 dark:text-gray-300 font-primary">
              {config.description}
            </p>
          </div>
          <div className="flex flex-col items-center my-12">
          <div className="space-y-4">
            <button
              data-cal-namespace={config.namespace}
              data-cal-link={config.calLink}
              data-cal-config='{"layout":"month_view"}'
              disabled={!calLoaded}
              className={`text-white font-primary text-sm lg:text-lg font-semibold py-4 px-12 bg-orange hover:bg-transparent border border-orange hover:text-orange transition-all ease-linear duration-200 rounded-lg cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 ${
                !calLoaded ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {calLoaded ? '📅 Schedule a Free Call' : 'Loading Calendar...'}
            </button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 font-primary">
              No commitment required • Completely free
            </p>
          </div>
        </div>
        </div>

        {/* Meeting Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <BsClock className="text-orange text-3xl mx-auto mb-4" />
            <h3 className="font-primary font-bold dark:text-white mb-2">{config.duration}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-primary">
              Free consultation call
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <BsCalendar3 className="text-orange text-3xl mx-auto mb-4" />
            <h3 className="font-primary font-bold dark:text-white mb-2">Flexible Scheduling</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-primary">
              Pick a time that works for you
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <BsCheckCircle className="text-orange text-3xl mx-auto mb-4" />
            <h3 className="font-primary font-bold dark:text-white mb-2">Expert Advice</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-primary">
              Get professional insights
            </p>
          </div>
        </div>
        {/* What to Expect Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold font-primary dark:text-white mb-6">
            What to Expect in Our Call
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="font-primary font-semibold dark:text-white mb-2">
                  Project Discussion
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-primary text-sm">
                  We'll discuss your project goals, requirements, and vision in detail.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="font-primary font-semibold dark:text-white mb-2">
                  Technical Consultation
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-primary text-sm">
                  Get expert advice on technology stack, architecture, and best practices.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h4 className="font-primary font-semibold dark:text-white mb-2">
                  Timeline & Budget
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-primary text-sm">
                  We'll outline realistic timelines and discuss project investment.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h4 className="font-primary font-semibold dark:text-white mb-2">
                  Next Steps
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-primary text-sm">
                  Clear action plan and next steps to move your project forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingClient;