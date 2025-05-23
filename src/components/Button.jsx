import clsx from "clsx";
import PropTypes from "prop-types";

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  onClick,
}) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-white px-7 py-3 text-black",
        containerClass
      )}
      onClick={onClick} // Added onClick here
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-sm uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12 font-general">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 font-general">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  containerClass: PropTypes.string,
  onClick: PropTypes.func, // Added onClick propType
};

export default Button;
