import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  & section {
    display: flex;
    width: 100%;
  }

  & .section1 {
    flex-direction: row-reverse;
  }

  & section > div {
    width: 50%;
  }

  & button {
    text-align: left;
  }

  & img {
    width: 100%;
    height: 100%;
  }

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .section1 .content > div,
  & .section2 .content > div {
    width: 448px;
    margin: 0 auto;
  }

  & .section1 p,
  & .section2 p {
    color: hsl(210, 4%, 67%);
    padding: 43px 0;
  }

  & .section1 h2,
  & .section2 h2 {
    font-size: 41px;
  }

  & .section3 > div {
    position: relative;
  }

  & .section3 > div > div:first-child {
    height: 100%;
  }

  & .section3 > div > div:last-child > div {
    text-align: center;
    margin: 0 auto;
    width: 370px;
  }

  & .section3 > div > div:last-child p {
    padding: 1.5rem 0;
  }

  & .section3 h2 {
    font-size: 32px;
  }

  & .graphic-design,
  & .photography {
    position: absolute;
    top: 65%;
    left: 0;
    width: 100%;
    height: 8rem;
  }

  & .graphic-design {
    color: hsl(167, 40%, 24%);
  }

  & .photography {
    color: hsl(198, 62%, 26%);
  }

  & .section4 {
    padding: 10rem 0;
    text-align: center;
    align-items: center;
    flex-direction: column;
  }

  & .section4 .testimonials {
    width: 65rem;
    display: flex;
    justify-content: center;
  }

  & .section4 .testimonials > div {
    width: 358px;
    margin: 0 auto;
  }

  & .section4 h1 {
    font-size: 20px;
    letter-spacing: 8px;
  }

  & .section4 h1,
  & .section4 .job {
    color: hsl(210, 4%, 67%);
  }

  & .section4 img {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    margin: 5rem 0;
  }

  & .section4 .testimonial {
    color: hsl(213, 9%, 39%);
  }

  & .section4 .name {
    margin-bottom: 1rem;
    margin-top: 5rem;
  }

  @media screen and (max-width: 1204px) {
    text-align: center;
    max-width: 375px;

    & button {
      text-align: center;
    }

    & section {
      flex-direction: column;
    }

    & section > div {
      width: 100%;
    }

    & .section1 {
      flex-direction: column;
    }

    & .section1 .content > div,
    & .section2 .content > div {
      padding: 5rem 0;
      width: 100%;
    }

    & .section3 {
      height: 62rem;
    }

    & img {
      width: 100%;
    }

    & .content > div {
      width: 100%;
    }

    & .content p {
      width: 335px;
      margin: 0 auto;
    }

    & .section3 > div > div:last-child {
      top: 21rem;
    }

    & .section4 {
      padding: 4rem 0;
      margin-top: 93px;
    }

    & .section4 h1 {
      font-size: 18px;
      letter-spacing: 5px;
    }

    & .section4 .testimonials {
      width: 100%;
      flex-direction: column;
    }

    & .section4 .testimonials > div {
      width: 337px;
    }

    & .section4 img {
      margin-bottom: 2rem;
      margin-top: 4rem;
    }

    & .section4 .name {
      margin-top: 2rem;
    }

    & .section5 {
      display: grid;
      grid-template-columns: auto auto;
    }
  }
`;
