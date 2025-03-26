import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./chart.module.css";

const Chart = ({ className = "" }) => {
  return (
    <div className={[styles.chart, className].join(" ")}>
      <div className={styles.visualizationContainers}>
        <div className={styles.headingContainer}>
          <h2 className={styles.headdlingco2}>Scope1 Energy Consumption</h2>
          <div className={styles.headdlingco21}>By Time</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.onsiteSolar}>Target</div>
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <div className={styles.offsiteSolar}>Actual</div>
          </div>
          <div className={styles.ellipseContainer}>
            <div className={styles.frameInner} />
            <div className={styles.purchasedRe}>Purchased RE</div>
          </div>
        </div>
      </div>
      <div className={styles.chart1}>
        <div className={styles.chartColumns}>
          <div className={styles.sep}>Sep</div>
          <div className={styles.oct}>Oct</div>
          <div className={styles.nov}>Nov</div>
          <div className={styles.dec}>Dec</div>
        </div>
        <div className={styles.columnData}>
          <div className={styles.dataPointOne}>40</div>
          <div className={styles.dataPointOne}>30</div>
          <div className={styles.dataPointOne}>20</div>
          <div className={styles.dataPointOne}>10</div>
          <div className={styles.dataPointOne}>0</div>
        </div>
        <div className={styles.vectorParent}>
          <Image className={styles.vectorIcon} width={1415} height={1} alt="" />
          <Image
            className={styles.vectorIcon1}
            width={1415}
            height={1}
            alt=""
          />
          <Image
            className={styles.vectorIcon1}
            width={1415}
            height={1}
            alt=""
          />
          <Image
            className={styles.vectorIcon1}
            width={1415}
            height={1}
            alt=""
          />
          <Image
            className={styles.vectorIcon4}
            width={1415}
            height={1}
            alt=""
          />
        </div>
        <Image
          className={styles.vectorIcon5}
          loading="lazy"
          width={1}
          height={229}
          alt=""
        />
        <div className={styles.vectorGroup}>
          <Image
            className={styles.vectorIcon6}
            loading="lazy"
            width={284}
            height={183}
            alt=""
          />
          <Image
            className={styles.vectorIcon7}
            loading="lazy"
            width={284}
            height={100}
            alt=""
          />
          <Image
            className={styles.vectorIcon8}
            loading="lazy"
            width={284}
            height={153}
            alt=""
          />
          <Image
            className={styles.vectorIcon9}
            loading="lazy"
            width={284}
            height={69}
            alt=""
          />
        </div>
        <div className={styles.unit}>GJ</div>
      </div>
    </div>
  );
};

Chart.propTypes = {
  className: PropTypes.string,
};

export default Chart;
