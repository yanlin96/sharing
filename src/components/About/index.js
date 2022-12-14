import "./index.scss";
import Loader from "react-loaders";
import { Fragment, useEffect, useState } from "react";

import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

const About = () => {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const render = () => {
    return (
      <Fragment>
        <Grid container justifyContent={"center"}>
          <h1 style={{ textAlign: "center", fontSize: "40px", color: "black" }}>
            About Me
          </h1>
        </Grid>
        <Grid container xs={12} justifyContent={"end"}>
          <p
            style={{
              textAlign: "right",
              fontSize: "20px",
              color: "black",
              paddingRight: "20px",
            }}
          >
            I'm Jenny. It is nice to start the journey of digital transformation
            with everyone.
          </p>
        </Grid>

        <div style={{ margin: "auto", width: "90%" }}>
          <Grid container justifyContent="space-around">
            <Grid
              item
              xs={12}
              md={5}
              style={{ backgroundColor: "#ADEAEA", borderRadius: "10%" }}
            >
              <h1 style={{ textAlign: "center", color: "black" }}>
                Front End Dev
              </h1>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "20px",
                  color: "black",
                  margin: "0 10px 0 10px",
                }}
              >
                Passionate junior front-end developer with a desire to learn and
                grow in a collaborative team environment. Possess an ability to
                learn quickly and collaborate within a team to provide
                interactive solutions. <br />
                <p></p>
                SKILLS <br />
                REACT | JavaScript | JQuery | Github | HTML | CSS
              </p>
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              justifyContent="center"
              style={{ backgroundColor: "#BF5FFF", borderRadius: "10%" }}
            >
              <h1 style={{ textAlign: "center", color: "black" }}>Devops</h1>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "20px",
                  color: "black",
                  margin: "0 10px 0 10px",
                }}
              >
                A self-motivated DevOps engineer with hands-on project
                experience in automating critical deployment over large
                infrastructures. A good team player with strong project
                management and problem-solving skills. <br />
                <p></p>
                SKILLS <br />
                <ul>
                  <li>
                    Cloud service (AWS): S3, Route 53, CloudFront, EC2, ECS, AWS
                    Fargate
                  </li>
                  <li>- CI/CD pipeline</li>
                  <li>
                    - Infrastructure as Code: E Terraform, Ansible, knowledge of
                    Cloudformation
                  </li>
                  <li>
                    Containerization and Orchestration: Docker, AWS ECS;
                    Kubernetes
                  </li>
                  <li>
                    Microservice: Knowledge of AWS Lambda, Serverless Framework
                  </li>
                </ul>
              </p>
            </Grid>
          </Grid>
        </div>

        <Grid container justifyContent={"center"}>
          <Link to="/contact">
            <p
              style={{
                textAlign: "right",
                fontSize: "20px",
                color: "black",
              }}
            >
              Say Hi Anytime!
            </p>
          </Link>
        </Grid>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className="about-container">
        {isShow ? render() : ""}
        <Loader type="line-scale" color="black" width={500} />
      </div>
    </Fragment>
  );
};

export default About;
