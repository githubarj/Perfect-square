import React from "react";
import HeroSlider, { Slide } from "hero-slider";



function BasicSlider(props) {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizantal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)",
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 3000,
        height: "50%",
      }}
    >
      <Slide
        background={{
          backgroundImageSrc: props.slide1,
          backgroundAttachment: "fixed",
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: props.slide2,
          backgroundAttachment: "fixed",
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: props.slide3,
          backgroundAttachment: "fixed",
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: props.slide4,
          backgroundAttachment: "fixed",
        }}
      />
    </HeroSlider>
  );
}

export default BasicSlider;
