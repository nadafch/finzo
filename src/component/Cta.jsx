import Button from "./Button";
import cta from "../assets/image/cta.svg";
import { motion } from "framer-motion";
import { fadeDown, fadeToLeft } from "../styles/Animation";

function Cta() {
  return (
    <div className="w-full max-w-screen-xl min-h-[580px] mx-auto p-8 md:p-24">
      <div className="mih-h-[460px] rounded-xl bg-weak-green bg-circularPattern3 bg-top bg-no-repeat grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 p-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-medium text-2xl md:text-4xl"
          >
            Join million people who already trust us
          </motion.div>
          <motion.p
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3 }}
            className="text-china-blue text-base md:text-lg font-light mt-4"
          >
            Easy and fast international business account that saves you money
            wherever you want to use it.
          </motion.p>
          <div className="flex flex-wrap gap-4 mt-10">
            <motion.div
              variants={fadeDown}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.5 }}
            >
              <Button size="huge">Open Account</Button>
            </motion.div>
            <motion.div
              variants={fadeDown}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.6 }}
            >
              <Button size="huge" type="outlined">
                Book a Demo
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeToLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.9 }}
          className="col-span-1 flex items-center"
        >
          <img src={cta} alt="cta_1" />
        </motion.div>
      </div>
    </div>
  );
}

export default Cta;
