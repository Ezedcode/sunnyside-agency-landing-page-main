import React from "react";
import Img1 from "../../assets/img/mobile/image-transform.jpg";
import Img2 from "../../assets/img/mobile/image-stand-out.jpg";
import Img3 from "../../assets/img/mobile/image-graphic-design.jpg";
import Img4 from "../../assets/img/mobile/image-photography.jpg";
import Img5 from "../../assets/img/desktop/image-transform.jpg";
import Img6 from "../../assets/img/desktop/image-stand-out.jpg";
import Img7 from "../../assets/img/desktop/image-graphic-design.jpg";
import Img8 from "../../assets/img/desktop/image-photography.jpg";
import LearnMoreBtn from "../../components/button/LearnMoreBtn";
import PageContent from "../../data/PageContent.json";
import * as Styles from "./styles";

const Home = () => {
  return (
    <Styles.Container>
      <section className="container">
        <div>
          <picture>
            <source media="(max-width: 375px)" srcSet={Img1} />
            <img src={Img5} alt="Image_home" />
          </picture>
        </div>
        <div className="content">
          <div>
            <h2>{PageContent.Home.section1.title}</h2>
            <p>{PageContent.Home.section1.about}</p>
            <LearnMoreBtn
              color="hsl(51, 100%, 49%,.3)"
              colorHover="hsl(51, 100%, 49%)"
            />
          </div>
        </div>
      </section>
      <section className="container">
        <div>
          <picture>
            <source media="(max-width: 375px)" srcSet={Img2} />
            <img src={Img6} alt="Image_home" />
          </picture>
        </div>
        <div className="content">
          <div>
            <h2>{PageContent.Home.section2.title}</h2>
            <p>{PageContent.Home.section2.about}</p>
            <LearnMoreBtn
              color="hsl(7, 99%, 70%,.3)"
              colorHover="hsl(7, 99%, 70%)"
            />
          </div>
        </div>
      </section>
      <section className="container">
        <div>
          <div>
            <picture>
              <source media="(max-width: 375px)" srcSet={Img3} />
              <img src={Img7} alt="Image_home" />
            </picture>
          </div>
          <div className="content">
            <h2>{PageContent.Home.section3.title}</h2>
            <p>{PageContent.Home.section3.about}</p>
          </div>
        </div>
        <div>
          <div>
            <picture>
              <source media="(max-width: 375px)" srcSet={Img4} />
              <img src={Img8} alt="Image_home" />
            </picture>
          </div>
          <div className="content">
            <h2>{PageContent.Home.section3.title}</h2>
            <p>{PageContent.Home.section3.about}</p>
          </div>
        </div>
      </section>
    </Styles.Container>
  );
};

export default Home;
