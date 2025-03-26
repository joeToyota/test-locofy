import Button from "./button";
import PropTypes from "prop-types";
import styles from "./navigation-menu.module.css";

const NavigationMenu = ({ className = "" }) => {
  return (
    <nav className={[styles.navigationMenu, className].join(" ")}>
      <Button xXXXX="Button 1" />
      <Button xXXXX="Button 2" />
      <Button xXXXX="Button 3" />
      <Button xXXXX="Button 4" />
    </nav>
  );
};

NavigationMenu.propTypes = {
  className: PropTypes.string,
};

export default NavigationMenu;
