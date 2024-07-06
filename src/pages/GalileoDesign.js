import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Header from "../components/Header";
import Card from "../components/Card";
import UsageCard from "../components/UsageCard";
import styles from "./GalileoDesign.module.css";

const GalileoDesign = () => {
  const onDepth7FrameClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='readyToTransform']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.galileoDesign}>
      <main className={styles.depth0Frame0}>
        <Header />
        <section className={styles.depth3Frame0Wrapper}>
          <div className={styles.depth3Frame0}>
            <div className={styles.depth6Frame0Wrapper}>
              <div className={styles.depth6Frame0}>
                <div className={styles.heroTitleContent}>
                  <h1 className={styles.meetTheAi}>
                    Meet the AI Robotics Office Robot
                  </h1>
                  <div
                    className={styles.theFutureOf}
                  >{`The future of office automation is here. Our robots are designed to make your workplace more efficient, productive, and enjoyable. `}</div>
                </div>
                <Button
                  className={styles.depth7Frame1}
                  name="Get a Demo"
                  variant="primary"
                  onClick={onDepth7FrameClick}
                >
                  Get a Demo
                </Button>
              </div>
            </div>
            <div className={styles.depth4Frame1}>
              <div className={styles.depth5Frame0}>
                <div className={styles.depth6Frame01}>
                  <h1 className={styles.robotsForEvery}>
                    Robots for Every Task
                  </h1>
                </div>
                <div className={styles.depth6Frame1}>
                  <div className={styles.ourRobotsAre}>
                    Our robots are designed to handle a wide range of tasks,
                    from delivering packages and serving food to cleaning floors
                    and handling mail.
                  </div>
                </div>
              </div>
              <div className={styles.depth5Frame1}>
                <div className={styles.depth6Frame02}>
                  <Card
                    delivery="Delivery"
                    description="Deliver packages, meals, and other items to employees"
                    image="/depth-8-frame-0@2x.png"
                  />
                  <Card
                    delivery={`Mail & Document Handling`}
                    description="Sort and deliver mail, documents, and other items"
                    image="/depth-8-frame-0-1@2x.png"
                  />
                  <Card
                    delivery="Cleaning"
                    description="Vacuum and mop floors, clean windows, and more"
                    image="/depth-8-frame-0-2@2x.png"
                  />
                  <Card
                    delivery="Check-in"
                    description="Greet visitors and provide check-in services"
                    image="/depth-8-frame-0-3@2x.png"
                  />
                  <Card
                    delivery={`Food & Beverage Service`}
                    description="Serve food and beverages to employees and guests"
                    image="/depth-8-frame-0-4@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.robotFeatures}>
              <div className={styles.depth4Frame2}>
                <div className={styles.depth5Frame01}>
                  <div className={styles.depth6Frame03}>
                    <h1 className={styles.robotsForEvery1}>
                      Robots for Every Task
                    </h1>
                  </div>
                  <div className={styles.depth6Frame11}>
                    <div className={styles.ourRobotsAre1}>
                      Our robots are designed to handle a wide range of tasks,
                      from delivering packages and serving food to cleaning
                      floors and handling mail.
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame11}>
                  <div className={styles.depth6Frame04}>
                    <UsageCard
                      icon="/vector--0-1.svg"
                      title="Autonomous Delivery"
                      description="Deliver packages, meals, and other items to employees"
                    />
                    <UsageCard
                      icon="/vector--0-2.svg"
                      title={`Mail & Document Handling`}
                      description="Sort and deliver mail, documents, and other items"
                      propMinWidth="172px"
                    />
                    <UsageCard
                      icon="/vector--0-3.svg"
                      title={`Cleaning & Sanitizing`}
                      description="Vacuum and mop floors, clean windows, and more"
                      propMinWidth="172px"
                    />
                    <UsageCard
                      icon="/vector--0-4.svg"
                      title="Visitor Management"
                      description="Greet visitors and provide check-in services"
                      propMinWidth="172px"
                    />
                    <UsageCard
                      icon="/vector--0-5.svg"
                      title={`Food & Beverage Service`}
                      description="Serve food and beverages to employees and guests"
                      propMinWidth="172px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.leadingAutomation}>
              <h3 className={styles.leadingTheWay}>
                Leading the Way in Office Automation
              </h3>
            </div>
            <div className={styles.spacer}>
              <div className={styles.depth5Frame02}>
                <img
                  className={styles.depth6Frame05}
                  loading="lazy"
                  alt=""
                  src="/depth-6-frame-01@2x.png"
                />
              </div>
            </div>
            <div className={styles.workplaceDesign}>
              <div className={styles.depth4Frame5}>
                <div className={styles.depth5Frame03}>
                  <div className={styles.depth6Frame06}>
                    <h1 className={styles.designedForModern}>
                      Designed for Modern Workplaces
                    </h1>
                  </div>
                  <div className={styles.depth6Frame12}>
                    <div className={styles.ourRobotsAre2}>
                      Our robots are equipped with advanced features and
                      capabilities to help your business thrive in the digital
                      age.
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame12}>
                  <div className={styles.depth6Frame07}>
                    <UsageCard
                      icon="/vector--0-6.svg"
                      title="Customizable"
                      description="Easily configure robots to meet your unique needs"
                      propMinWidth="172px"
                    />
                    <UsageCard
                      icon="/vector--0-6.svg"
                      title="Scalable"
                      description="Add or remove robots as your business grows"
                      propMinWidth="172px"
                    />
                    <UsageCard
                      icon="/vector--0-8.svg"
                      title="Innovative"
                      description="Stay ahead of the competition with cutting-edge technology"
                      propMinWidth="172px"
                    />
                    <UsageCard
                      icon="/vector--0-9.svg"
                      title="Efficient"
                      description="Increase productivity with automated workflows"
                      propMinWidth="172px"
                    />
                    <UsageCard
                      icon="/vector--0-10.svg"
                      title="Secure"
                      description="Protect sensitive data and assets with advanced security features"
                      propMinWidth="172px"
                    />
                  </div>
                  <div className={styles.depth6Frame13}>
                    <UsageCard
                      icon="/vector--0-11.svg"
                      title="Compliant"
                      description="Meet industry regulations and standards with ease"
                      propMinWidth="132px"
                    />
                    <UsageCard
                      icon="/vector--0-12.svg"
                      title="User-Friendly"
                      description="Simplify complex tasks with intuitive interfaces and controls"
                      propMinWidth="132px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contactParent}>
              <div className={styles.contact}>
                <h3
                  className={styles.readyToTransform}
                  data-scroll-to="readyToTransform"
                >
                  Ready to Transform Your Workplace?
                </h3>
              </div>
              <div className={styles.contactForm}>
                <div className={styles.depth4Frame7}>
                  <TextField
                    className={styles.depth5Frame04}
                    color="primary"
                    placeholder="first and last name"
                    variant="standard"
                    sx={{ "& .MuiInputBase-root": { height: "64px" } }}
                  />
                </div>
                <div className={styles.companyInfo}>
                  <div className={styles.depth4Frame8}>
                    <TextField
                      className={styles.depth5Frame05}
                      color="primary"
                      placeholder="Company name"
                      variant="standard"
                      sx={{ "& .MuiInputBase-root": { height: "64px" } }}
                    />
                  </div>
                  <div className={styles.depth4Frame9}>
                    <TextField
                      className={styles.depth5Frame06}
                      color="primary"
                      placeholder="Email address"
                      variant="standard"
                      sx={{ "& .MuiInputBase-root": { height: "64px" } }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame10Parent}>
                <div className={styles.depth4Frame10}>
                  <div className={styles.depth5Frame07}>
                    <div className={styles.depth6Frame08}>
                      <div className={styles.howCanWe}>How can we help?</div>
                    </div>
                    <TextField
                      className={styles.depth6Frame14}
                      color="primary"
                      rows={5}
                      maxRows={10}
                      placeholder="How can we help?"
                      sx={{ width: 448 }}
                      variant="standard"
                      multiline
                    />
                  </div>
                </div>
                <div className={styles.depth4Frame11}>
                  <Button
                    className={styles.depth5Frame08}
                    variant="primary"
                    size="sm"
                  >
                    Submit Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GalileoDesign;
