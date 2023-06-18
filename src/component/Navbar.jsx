import Logo from "../assets/image/Logo.svg";
import UK from "../assets/image/uk.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Button from "../component/Button";
import { motion } from "framer-motion";
import { fadeDown, fadeToLeft } from "../styles/Animation";

function Navbar() {
  return (
    <>
      <div className="w-full sticky top-0 z-30 border-b-2 bg-white">
        <div className="max-w-screen-xl grid grid-cols-6 md:grid-cols-12 py-6 mx-auto px-5 lg:px-16">
          <div className="col-span-4 md:col-span-2 flex items-center">
            <img src={Logo} alt="Logo Image" />
            <div className="flex md:hidden items-center ml-4">
              <BsThreeDots size={18} />
            </div>
          </div>
          <div className="hidden md:flex items-center col-start-4 lg:col-start-3 col-span-3 gap-4 ">
            <motion.div
              variants={fadeDown}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="flex items-center cursor-pointer hover:text-gulf-harbour-500"
            >
              Personal
              <span className="mt-1">
                <RiArrowDownSLine size={20} />
              </span>
            </motion.div>
            <motion.div
              variants={fadeDown}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="cursor-pointer hover:text-gulf-harbour-500"
            >
              Feature
            </motion.div>
            <motion.div
              variants={fadeDown}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
              className="cursor-pointer hover:text-gulf-harbour-500"
            >
              Pricing
            </motion.div>
          </div>

          <motion.div
            variants={fadeToLeft}
            initial="hidden"
            animate="visible"
            className="col-start-8 lg:col-start-9 flex items-center"
          >
            <div className="hidden md:flex items-center gap-1 cursor-pointer">
              <img src={UK} alt="languange_flag" />
              <h1>EN</h1>
              <span>
                <RiArrowDownSLine />
              </span>
            </div>
            <div className="flex items-center gap-3 ml-5 md:ml-10">
              <Button type="outlined">Login</Button>
              <Button>SignUp</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
