import { useState } from "react";
import Accordion from "./Accordion";
import Reveal from "./Reveal";
import Badge from "./Badge";
import Button from "./Button";
import { BsCheckLg } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeDown } from "../styles/Animation";

function Pricing() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="w-full max-w-screen-xl mx-auto p-10 flex flex-col justify-center items-center">
      <div className="max-w-lg flex flex-col justify-center items-center text-center">
        <Badge label="PRICING" />
        <Reveal>
          <div className="w-full h-20 flex font-semibold text-4xl md:text-5xl mt-4">
            Plans for every budget
          </div>
        </Reveal>
        <p className="text-china-blue text-lg mt-3">
          {`Whether you're a small business, or a large corporation, we have a plan that's right for you.`}
        </p>
      </div>
      <div className="w-full mt-16 lg:flex gap-8">
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.9 }}
          className="w-full lg:w-2/5 rounded-3xl p-5 md:p-10 shadow-lg text-gulf-harbour-500 border-b-8 border-frosty-dawn mb-10 lg:mb-0"
        >
          <div className="text-2xl">Personal</div>
          <p className="text-china-blue mt-3">
            Built-in budgeting and get more from your money with our Standard
            account.
          </p>
          <div className="text-3xl text-gulf-harbour-500 font-semibold mt-8">
            $0<span className="text-lg text-papilio"> /month</span>
          </div>
          <div className="mt-8">
            <Button className="max-w-full" size="huge">
              Try for Free
            </Button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 1 }}
          className="w-full lg:w-3/5 rounded-3xl p-5 md:p-10 shadow-lg bg-gulf-harbour-500 text-white grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="col-span-1 lg:border-r-2 border-r-white/30 pr-8">
            <div className="text-2xl">Bussiness</div>
            <p className="mt-3 font-light">
              Give your everyday finances a boost. Get more out of your money
              for less.
            </p>
            <div className="text-3xl font-semibold mt-8">
              $29<span className="text-lg"> /month</span>
            </div>
            <div className="mt-6">
              <Button className="max-w-full" size="huge" type="outlined">
                Try for Free
              </Button>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-4 justify-center pl-5">
            <div className="font-light">FEATURES</div>
            <div className="flex items-center gap-3 font-light">
              <BsCheckLg size={20} /> No payments back-office needed
            </div>
            <div className="flex items-center gap-3 font-light">
              <BsCheckLg size={20} /> Faster implementation and global roll-out
            </div>
            <div className="flex items-center gap-3 font-light">
              <BsCheckLg size={20} /> 48 hour support response time
            </div>
            <div className="flex items-center gap-3 font-light">
              <BsCheckLg size={20} /> Always benefit from the best rates and
              features
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-28 text-4xl">FAQ</div>
      <div className="w-full flex flex-col items-center justify-center gap-8 mt-10">
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
        >
          <Accordion
            title="What is Finzo?"
            index={1}
            activeIndex={activeIndex}
            onClick={() => setActiveIndex(1)}
          >
            Finzo is payment institution that helps millions of people and
            businesses manage their money across the world. Finzo helps you get
            more from your money.
          </Accordion>
        </motion.div>
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
        >
          <Accordion
            title="How do I send money to a bank account?"
            index={2}
            activeIndex={activeIndex}
            onClick={() => setActiveIndex(2)}
          ></Accordion>
        </motion.div>
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5 }}
        >
          <Accordion
            title="How do I verify my identity?"
            index={3}
            activeIndex={activeIndex}
            onClick={() => setActiveIndex(3)}
          ></Accordion>
        </motion.div>
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.6 }}
        >
          <Accordion
            title="What happens when I go over the block limit on my Free plan?"
            index={4}
            activeIndex={activeIndex}
            onClick={() => setActiveIndex(4)}
          >
            You can still read your existing content as usual, but you won’t be
            able to add new content. However, you can delete existing blocks to
            free up space.
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}

export default Pricing;
