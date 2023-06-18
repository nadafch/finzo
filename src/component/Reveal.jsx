import { motion } from "framer-motion";

function Reveal(props) {
  const { children, reverse } = props;
  return (
    <div className="w-fit relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={
          !reverse
            ? { hidden: { left: 0 }, visible: { left: "100%" } }
            : { hidden: { right: 0 }, visible: { right: "100%" } }
        }
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
        className="absolute top-4 bottom-0 left-0 right-0 bg-weak-green z-10"
      />
    </div>
  );
}

export default Reveal;
