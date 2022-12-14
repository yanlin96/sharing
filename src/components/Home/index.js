import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import pic from "../../assets/images/img.jpeg";

import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

const Home = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="container">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={4}>
            <h1 style={{ textAlign: "center", color: "black" }}>
              <AnimatedLetters
                strArray={"Jenny's Portfolio".split("")}
                startIdx={1}
              />
              <br />
              <AnimatedLetters
                strArray={"Front End Dev".split("")}
                startIdx={18}
              />
            </h1>
            <p
              style={{ textAlign: "center", fontSize: "20px", color: "black" }}
            >
              {" "}
              <AnimatedLetters
                strArray={"A new journey to digital world".split("")}
                startIdx={1}
              />
            </p>
          </Grid>
          <Grid item xs={12} md={8} justifyContent="center">
            <div className="img-container">
              {isShow ? <img className="img" src={"https://media.licdn.com/dms/image/D4E03AQEQmdeul3WhBQ/profile-displayphoto-shrink_800_800/0/1668420796498?e=1676505600&v=beta&t=h2ZZ86bU-mQkVUW12y-smbyCAt4mGlV9zzeZvlXwSJk"} alt="jenny" /> : ""}
            </div>
          </Grid>
        </Grid>
      </div>

      <Loader type="line-scale" color="black" width={500} />
    </div>
  );
};

export default Home;
