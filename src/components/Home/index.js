import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import pic from "../../assets/images/img.jpeg";

import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={4}>
            <h1 style={{ textAlign: "center" }}>
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
            <p style={{ textAlign: "center", fontSize: "20px" }}>
              {" "}
              <AnimatedLetters
                strArray={"A new journey to digital world".split("")}
                startIdx={1}
              />
            </p>
          </Grid>
          <Grid item xs={12} md={8} justifyContent="center">
            <div className="img-container">
              <img className="img" src={pic} alt="jenny" />
            </div>
          </Grid>
        </Grid>
      </div>

      <Loader type="line-scale" color="#fed002" width={500} />
    </div>
  );
};

export default Home;
