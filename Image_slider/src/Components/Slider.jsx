import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);
  let slideInterval;
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  function autoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  useEffect(() => {
    if (true) {
      autoSlide();
    }
    return () => clearInterval(slideInterval);
  }, [slide]);
  return (
    <Wrapper>
      <FaArrowLeft className="arrow left_arrow" onClick={prevSlide} />
      {data.map((val, idx) => {
        console.log("idx is " + idx + ",slide is " + slide);
        if (slide != idx) {
          console.log("slide_hidden executed");
        }
        return (
          <img
            src={val.src}
            key={idx}
            className={idx === slide ? "" : "slide_hidden"}
          />
        );
      })}
      <FaArrowRight className="arrow right_arrow" onClick={nextSlide} />
      <div className="indicator">
        {data.map((_, index) => {
          return (
            <button key={index} onClick={()=>setSlide(index)} className={index === slide ? "" : "indicator_hidden"} />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled.div`
display: flex;
justify-content: center;
  height: 400px;
  width: 600px;
  box-shadow: 2px 2px 7px grey;
  border-radius: 0.5rem;
  position: relative;

  .slide_hidden {
    display: none;
  }
  img {
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
  }

  .arrow:hover {
    cursor: pointer;
  }
  .arrow {
    position: absolute;
    top: 50%;
    color: white;
    background-color: #242020;
    border-radius: 50%;
    font-size: 1.5rem;
  }
  .right_arrow {
    right: 1rem;
  }

  .left_arrow {
    left: 1rem;
  }
  .indicator {
    position: absolute;
    bottom: 1rem;
    display: flex;
    gap: 0.3rem;
   
    button {
      border-radius: 100%;
      height: 0.5rem;
      width: 0.5rem;
      border: none;
      outline: none;
      box-shadow: 0px 0px 5px grey;
      margin: 0 0.2rem;
      cursor: pointer;
    }
    .indicator_hidden{
      background-color: orange;
    }
  }
`;
