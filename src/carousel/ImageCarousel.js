import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

import CustomDotGroup from "../components/CustomDotGroup";

const ImageCarousel = () => (
  <CarouselProvider infiniteLoop useKeyboardArrows autoplay
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/8/14/0/GT0107_kalbi_s4x3.jpg.rend.hgtvcom.616.462.suffix/1519669666497.jpeg" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/03/10/0/FNK_GRILLED-LEMONADE-CHICKEN-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1583851658221.jpeg" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/04/01/0/FNK_Smoked-Ribs-SXS-121_s4x3.jpg.rend.hgtvcom.616.462.suffix/1585755739478.jpeg" />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;
