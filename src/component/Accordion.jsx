import clsx from "classnames";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

function Accordion(props) {
  const { title, index, activeIndex, onClick, children } = props;
  return (
    <div className="w-[300px] md:w-[600px] lg:w-[800px] bg-dr-white rounded-2xl px-0 shadow-md ">
      <div className="text-base md:text-xl border-b-2 px-6 py-6 relative">
        <div className="w-full max-w-[80%]">{title}</div>
        <div className="absolute right-0 top-1/4 mr-5">
          <div role="button" onClick={onClick} className="transition-all">
            {index == activeIndex ? <AiOutlineMinus /> : <BsPlus />}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "transition-all text-china-blue text-sm md:text-base",
          activeIndex == index
            ? "py-4 px-6 translate-y-100"
            : "translate-y-0 opacity-0 h-0"
        )}
      >
        {children && children}
      </div>
    </div>
  );
}

export default Accordion;
