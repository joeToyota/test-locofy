import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./map1.module.css";

const Map1 = ({ className = "" }) => {
  return (
    <div className={[styles.map, className].join(" ")}>
      <Image className={styles.vectorIcon} width={802} height={425} alt="" />
    </div>
  );
};

Map1.propTypes = {
  className: PropTypes.string,
};

export default Map1;
