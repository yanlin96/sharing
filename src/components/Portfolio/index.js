import "./index.scss";
import Loader from "react-loaders";

import Grid from "@mui/material/Grid";
import { Fragment, useEffect, useState } from "react";

const Portfolio = () => {
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
            Portfolio
          </h1>
        </Grid>
        <div style={{ margin: "auto", width: "90%" }}>
          <Grid container justifyContent="space-around" spacing={1}>
            <Grid item xs={12} md={3}>
              <a href="https://www.pexels.com/">
                <img
                  src="https://images.pexels.com/photos/13539518/pexels-photo-13539518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="img1"
                />
              </a>
            </Grid>

            <Grid item xs={12} md={3}>
              <a href="https://www.pexels.com/">
                <img
                  src="https://images.pexels.com/photos/14557815/pexels-photo-14557815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="img2"
                />
              </a>
            </Grid>
            <Grid item xs={12} md={3} justifyContent="center">
              <a href="https://www.pexels.com/">
                <img
                  src="https://images.pexels.com/photos/14188368/pexels-photo-14188368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="img3"
                />
              </a>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  };

  return (
    <div className="about-container">
      {isShow ? render() : ""}
      <Loader type="line-scale" color="black" width={500} />
    </div>
  );
};

export default Portfolio;
