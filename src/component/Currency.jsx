import Badge from "./Badge";
import Button from "./Button";
import Reveal from "./Reveal";
import { FiArrowUpRight } from "react-icons/fi";
import Currency1 from "../assets/image/Currency1.svg";
import Currency2 from "../assets/image/Currency2.svg";
import Currency3 from "../assets/image/Currency3.svg";
import { motion } from "framer-motion";
import { fadeDown, fadeToLeft, fadeToRight } from "../styles/Animation";

function Currency() {
  return (
    <div className="w-full max-w-screen-xl min-h-[660px] mx-auto my-24 md:my-0 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
      <div className="col-span-1 flex justify-center">
        <motion.div
          variants={fadeToRight}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5 }}
          className="w-full max-w-[473px] min-h-[440px] rounded-3xl bg-weak-green bg-circularPattern4 bg-no-repeat bg-left-bottom  relative flex items-center shadow-lg"
        >
          <img src={Currency1} className="absolute top-0 md:right-0" />
          <img src={Currency2} className="absolute md:-left-24" />
          <img src={Currency3} className="absolute -bottom-4 md:-right-20" />
        </motion.div>
      </div>
      <div className="col-span-1 ml-14 md:ml-0 mt-10 md:mt-0">
        <motion.div
          variants={fadeToLeft}
          initial="hidden"
          whileInView="visible"
        >
          <Badge label="CURRENCY" />
        </motion.div>
        <Reveal reverse>
          <div className="w-3/4 mt-4 text-3xl lg:text-5xl font-medium">
            Hold and send money in 190+ currencies
          </div>
        </Reveal>
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5 }}
          className="w-2/3 mt-4 text-china-blue"
        >
          Create an account for your chosen currency in seconds. Get great
          prices with limit and stop orders
        </motion.div>
        <div className="mt-8">
          <Button size="huge" rightIcon={<FiArrowUpRight size={20} />}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Currency;
