"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    // Load Tally embed script
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    const v = function () {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };
    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (d.querySelector('script[src="' + w + '"]') == null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 py-24 px-4 sm:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-block rounded-full bg-white/20 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20"
          >
            PROOF OF CONCEPT
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            NYC Universal Childcare
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mb-8 text-xl font-medium text-white/95 sm:text-2xl"
          >
            Under the Zohran Mamdani Administration
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90"
          >
            Join us in building a future where every family in New York City has access to quality, affordable childcare.
          </motion.p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Benefits of Universal Childcare
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A comprehensive program designed to support families and strengthen our communities
            </p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: "👶",
                title: "Accessible to All",
                description: "Every family, regardless of income or background, will have access to quality childcare services.",
                gradientClass: "from-blue-500 to-blue-400",
              },
              {
                icon: "💰",
                title: "Affordable Care",
                description: "Reduce the financial burden on families, making childcare accessible without breaking the bank.",
                gradientClass: "from-amber-500 to-amber-400",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Support for Working Families",
                description: "Enable parents to pursue careers and education while ensuring their children receive excellent care.",
                gradientClass: "from-emerald-500 to-emerald-400",
              },
              {
                icon: "🎓",
                title: "Early Education",
                description: "Provide children with a strong foundation for learning and development from an early age.",
                gradientClass: "from-blue-500 to-blue-400",
              },
              {
                icon: "🏙️",
                title: "Stronger Communities",
                description: "Build stronger neighborhoods by supporting families and creating jobs in the childcare sector.",
                gradientClass: "from-amber-500 to-amber-400",
              },
              {
                icon: "⚖️",
                title: "Economic Equity",
                description: "Level the playing field by ensuring all children have access to the same quality early childhood experiences.",
                gradientClass: "from-emerald-500 to-emerald-400",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:ring-blue-200"
              >
                <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${benefit.gradientClass} transition-all duration-300 group-hover:w-full`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sign-Up Form Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Sign Up Today
            </h2>
            <p className="text-lg text-gray-600">
              Help us understand your needs and shape the future of childcare in NYC.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200"
          >
            <iframe
              data-tally-src="https://tally.so/embed/XxJq1Y?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="282"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Universal Childcare"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Rollout Information Section */}
      <section className="py-24 px-4 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Coming Soon
            </h2>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8 text-lg text-gray-700"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xl font-semibold text-blue-600"
            >
              Universal childcare will be rolled out soon across New York City.
            </motion.p>
            <motion.p variants={fadeInUp} className="leading-relaxed">
              The Zohran Mamdani Administration is committed to making universal childcare a reality for all New Yorkers.
              This program represents a transformative step toward supporting families and building a more equitable city.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 ring-1 ring-blue-100"
            >
              <p className="text-blue-900">
                <strong className="font-bold">Your participation matters.</strong> Every sign-up, every voice, and every piece of feedback helps
                the administration move forward in the right direction. Together, we can build a childcare system that works
                for everyone.
              </p>
            </motion.div>
            <motion.p variants={fadeInUp} className="leading-relaxed">
              By signing up today, you're not just registering interest—you're helping to shape the policies, priorities,
              and implementation of a program that will benefit generations of New York families.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm text-gray-600">
            <span className="font-semibold">Proof of Concept:</span> This application is a demonstration of the NYC Universal
            Childcare signup process.
          </p>
          <p className="text-sm text-gray-600">
            Built by <span className="font-semibold text-blue-600">abdulrabbani</span> •{" "}
            <a
              href="mailto:ar@abdulrabbani.com"
              className="font-medium text-amber-600 transition-colors hover:text-amber-700 hover:underline"
            >
              ar@abdulrabbani.com
            </a>
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
