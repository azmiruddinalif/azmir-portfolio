export default function ServiceCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Website Development */}
      <div className="group relative bg-white dark:bg-gray-900/40 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="relative z-10">
          <div className="w-14 h-14 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">💻</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white font-primary">
            Website Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            I design and develop high-performance, SEO-friendly websites that
            elevate brands. Using modern tools like Next.js and the MERN stack,
            I build sites that are fast, secure, and scalable for any business.
          </p>
        </div>
      </div>

      {/* App Development */}
      <div className="group relative bg-white dark:bg-gray-900/40 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="relative z-10">
          <div className="w-14 h-14 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">📱</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white font-primary">
            App Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            I create powerful, user-friendly mobile apps for iOS and Android.
            From MVPs to production-ready products, I focus on performance,
            reliability, and crafting seamless user experiences.
          </p>
        </div>
      </div>

      {/* Post-MVP Maintenance */}
      <div className="group relative bg-white dark:bg-gray-900/40 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="relative z-10">
          <div className="w-14 h-14 bg-green-500/10 dark:bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">🔧</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white font-primary">
            Post-MVP Maintenance
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            I help startups maintain and improve their MVPs after launch. From
            fixing bugs to optimizing performance and rolling out new features,
            I ensure your product keeps growing smoothly.
          </p>
        </div>
      </div>

      {/* Full-Stack Development */}
      <div className="group relative bg-white dark:bg-gray-900/40 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="relative z-10">
          <div className="w-14 h-14 bg-orange-500/10 dark:bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">🧩</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white font-primary">
            Full-Stack Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            I build complete, scalable web and mobile ecosystems using React,
            Node.js, and MongoDB. My focus is clean architecture, security, and
            high-performing digital products.
          </p>
        </div>
      </div>

      {/* Building Fast MVP */}
      <div className="group relative bg-white dark:bg-gray-900/40 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="relative z-10">
          <div className="w-14 h-14 bg-rose-500/10 dark:bg-rose-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white font-primary">
            Building Fast MVP
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            I help founders build, test, and launch MVPs quickly. My process
            focuses on validating your idea with real users, gathering insights,
            and scaling efficiently based on feedback.
          </p>
        </div>
      </div>

      {/* Free Consultation */}
      <div className="group relative bg-white dark:bg-gray-900/40 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>

        {/* FREE Badge */}
        <div className="absolute top-3 right-3 z-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-500 rounded-full blur opacity-60 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-primary-600 to-primary-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-md">
              FREE
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="w-14 h-14 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">💬</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white font-primary">
            Web & App Consultation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Need clarity before building? I offer free consultations to help you
            plan your web or mobile project. Get practical advice on design,
            tech stack, and launch strategy.
          </p>
        </div>
      </div>
    </div>
  );
}
