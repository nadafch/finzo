import Button from "./Button";
import Reveal from "./Reveal";
import playIcon from "../assets/image/play-circle.svg";
import lock from "../assets/image/lock-01.svg";
import passcode from "../assets/image/passcode-lock.svg";
import user from "../assets/image/user-circle.svg";
import bank from "../assets/image/bank.svg";
import { motion } from "framer-motion";
import { fadeDown } from "../styles/Animation";

function Value() {
  const shake = {
    initial: { rotate: 0 },
    hover: {
      rotate: [-15, 0, 15],
      transition: { duration: 0.1, delay: 0.3, repeatType: "loop" },
    },
  };
  return (
    <div className="w-full max-w-screen-xl min-h-[752px] p-0 md:p-14 mx-auto flex items-center">
      <div className="w-full bg-dr-white min-h-[632px] rounded-xl bg-circularPattern2 bg-cover bg-no-repeat mx-auto px-5 md:px-24 lg:flex gap-5 items-center">
        <div className="w-full lg:w-2/5 p-10">
          <Reveal>
            <div className="text-[38px] md:text-5xl font-semibold">
              We are a strategic choice
            </div>
          </Reveal>
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            className="mt-4 text-china-blue font-light"
          >
            We’re on a mission to bring transparency to finance and show you
            upfront.
          </motion.div>
          <div className="mt-16 md:mt-28">
            <Button size="huge">
              <img src={playIcon} className="mr-2" />
              Watch Video Guide
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-3/5 p-3 md:p-10 grid grid-cols-2 gap-8">
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.8 }}
            className="col-span-1"
          >
            <div className="w-fit rounded-full p-3 bg-weak-green cursor-pointer hover:scale-110 transition-all">
              <motion.div variants={shake} initial="initial" whileHover="hover">
                <img src={lock} />
              </motion.div>
            </div>
            <div className="text-xl md:text-2xl font-medium mt-6">
              Security Teams
            </div>
            <div className="text-china-blue font-light text-lg md:text-xl mt-3">
              Security teams work to keep your money safe
            </div>
          </motion.div>
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.9 }}
            className="col-span-1"
          >
            <div className="w-fit rounded-full p-3 bg-weak-green hover:scale-110 transition-all">
              <img src={passcode} />
            </div>
            <div className="text-xl md:text-2xl font-medium mt-6">
              Authentication
            </div>
            <div className="text-china-blue font-light text-lg md:text-xl mt-3">
              We use top uthentication to protect your account
            </div>
          </motion.div>
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 1 }}
            className="col-span-1"
          >
            <div className="w-fit rounded-full p-3 bg-weak-green hover:scale-110 transition-all">
              <img src={bank} />
            </div>
            <div className="text-xl md:text-2xl font-medium mt-6">
              Safety Funds
            </div>
            <div className="text-china-blue font-light text-lg md:text-xl mt-3">
              Hold money with established financial institutions
            </div>
          </motion.div>
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 1.1 }}
            className="col-span-1"
          >
            <div className="w-fit rounded-full p-3 bg-weak-green hover:scale-110 transition-all">
              <img src={user} />
            </div>
            <div className="text-xl md:text-2xl font-medium mt-6">
              Account Place
            </div>
            <div className="text-china-blue font-light text-lg md:text-xl mt-3">
              Place all your account, all in one place
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Value;
