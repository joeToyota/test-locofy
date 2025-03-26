import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./meter.module.css";

const Meter = ({ className = "", mDBC2A }) => {
  return (
    <div className={[styles.meter, className].join(" ")}>
      <div className={styles.meterName}>
        <b className={styles.mdbC2a}>{mDBC2A}</b>
      </div>
      <div className={styles.iconnormal}>
        <Image
          className={styles.normalIcon}
          loading="lazy"
          width={30}
          height={30}
          alt=""
        />
      </div>
    </div>
  );
};

Meter.propTypes = {
  className: PropTypes.string,
  mDBC2A: PropTypes.string,
};

export default Meter;
