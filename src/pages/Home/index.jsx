import React from "react";
import Img1 from "../../assets/img/mobile/image-transform.jpg";
import Img2 from "../../assets/img/mobile/image-stand-out.jpg";
import Img3 from "../../assets/img/mobile/image-graphic-design.jpg";
import Img4 from "../../assets/img/mobile/image-photography.jpg";
import Img5 from "../../assets/img/desktop/image-transform.jpg";
import Img6 from "../../assets/img/desktop/image-stand-out.jpg";
import Img7 from "../../assets/img/desktop/image-graphic-design.jpg";
import Img8 from "../../assets/img/desktop/image-photography.jpg";
import Img9 from "../../assets/img/image-emily.jpg";
import Img10 from "../../assets/img/image-thomas.jpg";
import Img11 from "../../assets/img/image-jennie.jpg";
import Img12 from "../../assets/img/mobile/image-gallery-milkbottles.jpg";
import Img13 from "../../assets/img/mobile/image-gallery-orange.jpg";
import Img14 from "../../assets/img/mobile/image-gallery-cone.jpg";
import Img15 from "../../assets/img/mobile/image-gallery-sugar-cubes.jpg";
import Img16 from "../../assets/img/desktop/image-gallery-milkbottles.jpg";
import Img17 from "../../assets/img/desktop/image-gallery-orange.jpg";
import Img18 from "../../assets/img/desktop/image-gallery-cone.jpg";
import Img19 from "../../assets/img/desktop/image-gallery-sugar-cubes.jpg";
import LearnMoreBtn from "../../components/button/LearnMoreBtn";
import PageContent from "../../data/HomePageContent.json";
import * as Styles from "./styles";

const Home = () => {
  return (
    <Styles.Container>
      <section className="section1">
        <div>
          <picture>
            <source media="(max-width: 1204px)" srcSet={Img1} />
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
      <section className="section2">
        <div>
          <picture>
            <source media="(max-width: 1204px)" srcSet={Img2} />
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
      <section className="section3">
        <div>
          <div>
            <picture>
              <source media="(max-width: 1204px)" srcSet={Img3} />
              <img src={Img7} alt="Image_home" />
            </picture>
          </div>
          <div className="graphic-design">
            <div>
              <h2>{PageContent.Home.section3.title}</h2>
              <p>{PageContent.Home.section3.about}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <picture>
              <source media="(max-width: 1204px)" srcSet={Img4} />
              <img src={Img8} alt="Image_home" />
            </picture>
          </div>
          <div className="photography">
            <div>
              <h2>{PageContent.Home.section4.title}</h2>
              <p>{PageContent.Home.section4.about}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <h1>{PageContent.ClientTestimonials.title}</h1>
        <div className="testimonials">
          {PageContent.ClientTestimonials.client.map((client, index) => {
            return (
              <div>
                <img
                  src={
                    (index === 0 && Img9) ||
                    (index === 1 && Img10) ||
                    (index === 2 && Img11)
                  }
                  alt={client.photo}
                />
                <p className="testimonial">{client.testimonials}</p>
                <h2 className="name">{client.name}</h2>
                <p className="job">{client.job}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="section5">
        <picture>
          <source media="(max-width: 1204px)" srcSet={Img12} />
          <img src={Img16} alt="Image_home" />
        </picture>
        <picture>
          <source media="(max-width: 1204px)" srcSet={Img13} />
          <img src={Img17} alt="Image_home" />
        </picture>
        <picture>
          <source media="(max-width: 1204px)" srcSet={Img14} />
          <img src={Img18} alt="Image_home" />
        </picture>
        <picture>
          <source media="(max-width: 1204px)" srcSet={Img15} />
          <img src={Img19} alt="Image_home" />
        </picture>
      </section>
    </Styles.Container>
  );
};

export default Home;
