import Button from "./Button";
import OpenAi from "../assets/image/OpenAI.svg";
import Ramp from "../assets/image/Ramp.svg";
import Raycast from "../assets/image/Raycast.svg";
import homepageImage from "../assets/image/homepageImage.svg";
import Badge from "./Badge";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { fadeDown, fadeToLeft, fadeToRight } from "../styles/Animation";

function Hero() {
  return (
    <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 mb-10 md:mb-20">
      <div className="col-span-1 flex flex-col justify-center ml-10 md:ml-14 md:mt-0 order-2">
        <motion.div
          variants={fadeToRight}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5 }}
        >
          <Badge label="MODERN BANK" />
        </motion.div>
        <Reveal>
          <div className="mt-3 font-bold text-4xl md:text-6xl">
            {`We're building the future banking just for you`}
          </div>
        </Reveal>
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-2xl md:text-xl text-china-blue"
        >
          Easy and fast international business account that saves you money
          wherever you want to use it.
        </motion.div>
        <div className="flex items-center gap-3 mt-10">
          <motion.div
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button size="huge">Get Started Now</Button>
          </motion.div>
          <motion.div
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button
              size="huge"
              type="outlined"
              rightIcon={<FiArrowUpRight size={20} />}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
        <div className="mt-14">
          <motion.div
            variants={fadeToRight}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm md:text-base text-papilio">
              TRUSTED BY COMPANY ACROSS THE WORLD
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-4 mt-6 md:mt-10">
            <motion.div
              variants={fadeDown}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <img src={OpenAi} alt="company" />
            </motion.div>
            <motion.div
              variants={fadeDown}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <img src={Raycast} alt="company" />
            </motion.div>
            <motion.div
              variants={fadeDown}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <img src={Ramp} alt="company" />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        variants={fadeToLeft}
        initial="hidden"
        whileInView="visible"
        className="col-span-1 flex justify-center items-center mt-10 lg:mt-20 order-1 md:order-2 mr-10 xl:mr-0"
      >
        <img src={homepageImage} alt="homepage_image" />
      </motion.div>
    </div>
  );
}

export default Hero;
