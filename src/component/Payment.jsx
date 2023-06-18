import Badge from "./Badge";
import Button from "./Button";
import Reveal from "./Reveal";
import { FiArrowUpRight } from "react-icons/fi";
import Payment1 from "../assets/image/Payment1.svg";
import Payment2 from "../assets/image/Payment2.svg";
import { motion } from "framer-motion";
import { fadeDown, fadeToLeft, fadeToRight } from "../styles/Animation";

function Payment() {
  return (
    <div className="w-full max-w-screen-xl min-h-[660px] mx-auto my-24 md:my-0 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div className="col-span-1 ml-10 md:ml-20 mt-10 md:mt-0">
        <motion.div
          variants={fadeToRight}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5 }}
        >
          <Badge label="PAYMENT" />
        </motion.div>
        <Reveal>
          <div className="w-3/4 min-h-28 mt-4 text-3xl lg:text-5xl font-medium">
            Sending money, easy by the default
          </div>
        </Reveal>
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          className="w-2/3 mt-4 text-china-blue"
        >
          Moving money should never take more than a few taps. Transfers are
          always free between friends.
        </motion.div>
        <div className="mt-8">
          <Button size="huge" rightIcon={<FiArrowUpRight size={20} />}>
            Learn More
          </Button>
        </div>
      </div>
      <motion.div
        variants={fadeToLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.5 }}
        className="col-span-1 flex justify-center mt-10 md:mt-0 "
      >
        <div className="w-full max-w-[473px] h-[440px] bg-gulf-harbour-500 bg-circularPattern5 bg-no-repeat bg-right-bottom rounded-3xl relative">
          <div className="absolute md:-left-32">
            <img src={Payment2} />
          </div>
          <div className="absolute -bottom-4 right-1">
            <img src={Payment1} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Payment;
