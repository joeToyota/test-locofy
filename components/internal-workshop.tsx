import NavigationMenu1 from "./navigation-menu1";
import PropTypes from "prop-types";
import styles from "./internal-workshop.module.css";

const InternalWorkshop = ({ className = "" }) => {
  return (
    <div className={[styles.internalWorkshop, className].join(" ")}>
      <section className={styles.mainContent}>
        <NavigationMenu1 />
      </section>
    </div>
  );
};

InternalWorkshop.propTypes = {
  className: PropTypes.string,
};

export default InternalWorkshop;
