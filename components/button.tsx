import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ className = "", xXXXX }) => {
  return (
    <div className={[styles.button, className].join(" ")}>
      <div className={styles.master}>
        <Image
          className={styles.icon}
          loading="lazy"
          width={32}
          height={30}
          alt=""
        />
        <a className={styles.xxxxx}>{xXXXX}</a>
      </div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  xXXXX: PropTypes.string,
};

export default Button;
