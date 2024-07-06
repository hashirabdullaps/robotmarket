import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  const onDepth4FrameClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='readyToTransform']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className={[styles.depth2Frame0, className].join(" ")}>
      <div className={styles.depth3Frame0}>
        <div className={styles.depth4Frame0}>
          <div className={styles.depth5Frame0}>
            <img className={styles.vector0} alt="" src="/vector--0.svg" />
            <img
              className={styles.vector1}
              loading="lazy"
              alt=""
              src="/vector--1.svg"
            />
            <div className={styles.depth6Frame0} />
            <div className={styles.depth6Frame1} />
          </div>
        </div>
        <div className={styles.depth4Frame1}>
          <a className={styles.aiRobotics}>AI Robotics</a>
        </div>
      </div>
      <div className={styles.depth3Frame1}>
        <nav className={styles.depth4Frame01}>
          <div className={styles.depth5Frame01}>
            <a className={styles.product}>Product</a>
          </div>
          <div className={styles.depth5Frame1}>
            <a className={styles.useCases}>Use Cases</a>
          </div>
          <div className={styles.depth5Frame2}>
            <a className={styles.technology}>Technology</a>
          </div>
          <div className={styles.depth5Frame3}>
            <a className={styles.company}>Company</a>
          </div>
          <div className={styles.depth5Frame4}>
            <a className={styles.resources}>Resources</a>
          </div>
        </nav>
        <Button
          className={styles.depth4Frame11}
          name="Get a Demo"
          variant="primary"
          size="sm"
          onClick={onDepth4FrameClick}
        >
          Get a Demo
        </Button>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
