import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ className = "", delivery, description, image }) => {
  return (
    <div className={[styles.depth7Frame0, className].join(" ")}>
      <img className={styles.depth8Frame0} loading="lazy" alt="" src={image} />
      <div className={styles.depth8Frame1}>
        <div className={styles.depth9Frame0}>
          <div className={styles.delivery}>{delivery}</div>
        </div>
        <div className={styles.depth9Frame1}>
          <div className={styles.deliverPackagesMeals}>{description}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  delivery: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
