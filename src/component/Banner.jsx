import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

function Banner() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }, []);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100, h: 0 }}
      animate={{ opacity: 1, y: 0, h: "100%" }}
      transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
      className="w-full bg-lacustral flex justify-center items-center text-gulf-harbour-500 py-4 sticky text-xs md:text-base"
    >
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
    </motion.div>
  );
}

export default Banner;
