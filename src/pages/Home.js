import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="flex justify-around items-center">
        <motion.div
          className="rounded-full h-60 w-60 bg-slate-600"
          animate={{
            scale: [0, 0.3, 0.9, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["50%", "0", "25%", "50%"],
            x: [-100, -350, -150],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 1],
            repeatDelay: 1,
          }}
        ></motion.div>

        <motion.div
          animate={{
            x: [-50, 200, -50],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 1],
            delay: 2,
          }}
        >
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-3xl font-bold">Hi, .</h1>
            <p className="font-semibold text-2xl">Deve</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
