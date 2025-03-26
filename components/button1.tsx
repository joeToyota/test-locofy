import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./button1.module.css";

const Button1 = ({
  className = "",
  type = "unselected",
  buttonBorder,
  icon,
  xXXXX,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      border: buttonBorder,
    };
  }, [buttonBorder]);

  return (
    <div
      className={[styles.button, className].join(" ")}
      data-type={type}
      style={buttonStyle}
    >
      <Image
        className={styles.icon}
        loading="lazy"
        width={32}
        height={30}
        alt=""
        src={icon}
      />
      <div className={styles.xxxxx}>{xXXXX}</div>
    </div>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  xXXXX: PropTypes.string,

  /** Variant props */
  type: PropTypes.number,

  /** Style props */
  buttonBorder: PropTypes.string,
};

export default Button1;
