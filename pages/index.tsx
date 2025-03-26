import NavigationMenu from "../components/navigation-menu";
import Chart from "../components/chart";
import Map1 from "../components/map1";
import Meter from "../components/meter";
import styles from "./index.module.css";

const Dashboard1920X = () => {
  return (
    <div className={styles.dashboard1920X1082}>
      <div className={styles.leftMenuArea} />
      <main className={styles.dashboard1920X1082Inner}>
        <section className={styles.navigationMenuParent}>
          <NavigationMenu />
          <div className={styles.mainCotent}>
            <div className={styles.topSection}>
              <Chart />
            </div>
            <div className={styles.bottomSection}>
              <Map1 />
              <div className={styles.metersContainer}>
                <div className={styles.meters}>
                  <Meter mDBC2A="MDB-C2A" />
                  <div className={styles.meterContainer}>
                    <Meter mDBC2A="MDB-C2A" />
                  </div>
                  <div className={styles.meterContainer1}>
                    <Meter mDBC2A="MDB-C2A" />
                  </div>
                </div>
              </div>
              <Meter mDBC2A="SDC-001" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard1920X;
