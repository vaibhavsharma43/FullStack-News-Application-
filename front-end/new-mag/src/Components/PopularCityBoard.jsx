import React from "react";
import "./Css/PopularCity.css";

const cities = [
  {
    CityName: "Berlin",
    Location: "370 Location",
    img: "https://media.istockphoto.com/id/489776362/photo/berlin-skyline-panorama-with-tv-tower-at-sunset-germany.jpg?s=612x612&w=0&k=20&c=Ng6cNc_9FEtoA1Go3P86ltVsy_-yoAZWcANCQr2ftGs=",
  },
  {
    CityName: "Moscow",
    Location: "370 Location",
    img: "https://www.state.gov/wp-content/uploads/2018/11/Russia-2499x1406.jpg",
  },
  {
    CityName: "Paris",
    Location: "370 Location",
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
  },
  {
    CityName: "Rio",
    Location: "370 Location",
    img: "https://whc.unesco.org/uploads/thumbs/site_1100_0004-750-750-20120625114004.jpg",
  },
  {
    CityName: "Delhi",
    Location: "370 Location",
    img: "https://deih43ym53wif.cloudfront.net/small_Rajpath-delhi-shutterstock_1195751923.jpg_7647e1aad2.jpg",
  },
  {
    CityName: "Tokyo",
    Location: "370 Location",
    img: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
  },
  {
    CityName: "USA",
    Location: "370 Location",
    img: "https://c.tadst.com/gfx/600x337/united-states-capitol-building.jpg?1",
  },
];

const PopularCityBoard = () => {
  return (
    <div className="CityPanel">
      <div className="Col1">
        <div className="City1">
          <img src={cities[0].img} alt="Berlin" />
          <div className="CityName">{cities[0].CityName}</div>
        </div>
        <div className="City2">
          <img src={cities[1].img} alt="Moscow" />
          <div className="CityName">{cities[1].CityName}</div>
        </div>
      </div>
      <div className="Col2">
        <div className="City3">
          <img src={cities[2].img} alt="Paris" />
          <div className="CityName">{cities[2].CityName}</div>
        </div>
        <div className="City4">
          <img src={cities[3].img} alt="Rio" />
          <div className="CityName">{cities[3].CityName}</div>
        </div>
        <div className="City5">
          <img src={cities[4].img} alt="New Delhi" />
          <div className="CityName">{cities[4].CityName}</div>
        </div>
      </div>
      <div className="Col3">
        <div className="City6">
          <img src={cities[5].img} alt="Tokyo" />
          <div className="CityName">{cities[5].CityName}</div>
        </div>
        <div className="City7">
          <img src={cities[6].img} alt="Washington" />
          <div className="CityName">{cities[6].CityName}</div>
        </div>
      </div>
    </div>
  );
};

export default PopularCityBoard;
