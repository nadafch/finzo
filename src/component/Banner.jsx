import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

function Banner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    setTimeout(() => {
      setIsOpen(false);
    }, 10000);
  }, []);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ type: "spring" }}
    >
      <div className="w-full bg-lacustral flex justify-center items-center text-gulf-harbour-500 py-4  relative text-xs md:text-base">
        <span className="font-extrabold">Announcing our Series A </span>— Finzo
        raises $40m for better environment.{" "}
        <span className="mx-2 font-bold underline">Learn More</span>
        <AiOutlineArrowRight />
        <div
          role="button"
          className="font-extrabold absolute right-0 mr-4"
          onClick={() => setIsOpen(false)}
        >
          <RxCross2 />
        </div>
      </div>
    </motion.div>
  );
}

export default Banner;
