import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./UsageCard.module.css";

const UsageCard = ({
  className = "",
  icon,
  title,
  description,
  propMinWidth,
}) => {
  const depth7Frame0Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.depth7Frame0, className].join(" ")}
      style={depth7Frame0Style}
    >
      <div className={styles.depth8Frame0}>
        <div className={styles.depth9Frame0}>
          <img className={styles.applicationIcons} alt="" src={icon} />
          <div className={styles.depth10Frame0} />
        </div>
      </div>
      <div className={styles.depth8Frame1}>
        <div className={styles.depth9Frame01}>
          <b className={styles.autonomousDelivery}>{title}</b>
        </div>
        <div className={styles.depth9Frame1}>
          <div className={styles.deliverPackagesMeals}>{description}</div>
        </div>
      </div>
    </div>
  );
};

UsageCard.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default UsageCard;
