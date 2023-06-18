import clsx from "classnames";

function Button(props) {
  const { children, type, rightIcon, leftIcon, size, className } = props;

  return (
    <div
      role="button"
      className={clsx(
        "w-full max-w-fit flex justify-center items-center px-4 md:px-8 rounded-2xl text-sm md:text-base",
        className,
        {
          "border-2 border-lacustral/20 bg-white text-gulf-harbour-500 hover:bg-stone-100":
            type === "outlined",
          "border border-transparent bg-gulf-harbour-500 hover:bg-gulf-harbour-700 text-white":
            !type,
        },
        {
          "py-4": size == "huge",
          "py-2": !size,
        }
      )}
    >
      {leftIcon && <span className="">{rightIcon}</span>}
      {children}
      {rightIcon && <span className="ml-3">{rightIcon}</span>}
    </div>
  );
}

export default Button;
