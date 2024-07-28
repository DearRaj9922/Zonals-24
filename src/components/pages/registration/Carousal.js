import Slider from "react-slick";
import "./card.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousal.css";
import Card from "./Card";
import { cardDetail } from "./CardDetail";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
// import img1 from "./image/image 13049 (Traced).svg";
import { useState } from "react";
import { useEffect } from "react";

let slidesToShow = 4;
const PreviousBtn = (props) => {
  const { onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className="bkArrow" onClick={onClick}>
          <IoIosArrowDropleftCircle
            size="2.5rem"
            style={{ color: "#777777" }}
          />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className="fwArrow" onClick={onClick}>
          <IoIosArrowDroprightCircle
            size="2.5rem"
            style={{ color: "#777777" }}
          />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    // {
    //   breakpoint: 1400,
    //   settings: {
    //     slidesToShow: 3,
    //     centerMode: false,
    //     slidesToScroll: 1,
    //   },
    // },
    // {
    //   breakpoint: 1400,
    //   settings: {
    //     slidesToShow: 4,
    //     centerMode: false,
    //     slidesToScroll: 1,
    //   },
    // },
  ],
};

const MultiItemCarousel = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 3;
  } else if (width > 426 && width <= 951) {
    slidesToShow = 3;
  }
  //   } else if (width > 769 && width <= 1025) {
  //     slidesToShow = 2;
  //   } else if (width > 1025 && width <= 1400) {
  //     slidesToShow = 3;
  //   } else {
  //     slidesToShow = 4;
  //   }

  return (
    <div className="carousal">
      <Slider {...carouselProperties}>
        {cardDetail.map((list, index) => (
          <Items
            list={list}
            index={index}
            onEventChange={props?.onEventChange}
            id={props.id}
          />
        ))}
      </Slider>
    </div>
  );
};

const Items = ({ list, index, onEventChange, id}) => {
  return (
    <div className="Cbox">
      <Card list={list} index={index} onEventChange={onEventChange} id={id} />
    </div>
  );
};

export default MultiItemCarousel;
