import Button1 from "./button1";
import PropTypes from "prop-types";
import styles from "./navigation-menu1.module.css";

const NavigationMenu1 = ({ className = "" }) => {
  return (
    <header className={[styles.navigationMenu, className].join(" ")}>
      <Button1 type="unselected" icon="/icon.svg" xXXXX="Button1" />
      <Button1
        type="unselected"
        buttonBorder="none"
        icon="/icon-1.svg"
        xXXXX="Button2"
      />
      <Button1
        type="unselected"
        buttonBorder="unset"
        icon="/icon-2.svg"
        xXXXX="Button3"
      />
      <Button1
        type="unselected"
        buttonBorder="none"
        icon="/icon-3.svg"
        xXXXX="Button4"
      />
    </header>
  );
};

NavigationMenu1.propTypes = {
  className: PropTypes.string,
};

export default NavigationMenu1;
