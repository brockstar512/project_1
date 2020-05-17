import React, {Component}from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './App.css'

const photos =[
  {
    name: 'page 1',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1589745976/nancyForSite/bigger_cover_khcy8i.png',
  },
  {
    name: 'page 2',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722903/nancyForSite/1_nnry6h.png'
  },
  {
    name: 'page 3',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722902/nancyForSite/2_t9zjmt.png'
  },
  {
    name: 'page 4',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722901/nancyForSite/4_lytmvi.png'
  },
  {
    name: 'page 5',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722903/nancyForSite/3_yykzsw.png'
  },

 
  {
    name: 'page 6',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722902/nancyForSite/5_tlkfj1.png'
  },
  {
    name: 'page 7',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722902/nancyForSite/6_ykpxdr.png'
  },
  {
    name: 'page 8',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722901/nancyForSite/7_grtpvn.png'
  },
  {
    name: 'page 9',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722898/nancyForSite/8_dgyh8i.png'
  },
  {
    name: 'page 10',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722898/nancyForSite/9_xr3rd7.png'
  },
  {
    name: 'page 12',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722900/nancyForSite/10_fyo2vf.png'
  },
  {
    name: 'page 13',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722900/nancyForSite/11_uobnjx.png'
  },
  {
    name: 'page 14',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722900/nancyForSite/12_jvoezs.png'
  },
  {
    name: 'page 15',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1589752030/nancyForSite/13_wh2lvi_k1lvqa.png'
  },

  {
    name: 'page 16',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722898/nancyForSite/14_k4fnbc.png'
  },
  {
    name: 'page 17',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722897/nancyForSite/15_ily3rt.png'
  },
  {
    name: 'page 18',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722897/nancyForSite/16_a1ogfz.png'
  },
  {
    name: 'page 19',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722898/nancyForSite/17_sj7oaa.png'
  },
  {
    name: 'page 20',
    url: 'https://res.cloudinary.com/dq6nhmmpi/image/upload/v1583722901/nancyForSite/18_qtwzb3.png'
  },

]

class App extends Component {
  render (){

    const settings ={
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slideToScroll:1,
      className: 'slides'
    }
  return (
    <div className="App">
      <Slider {...settings}>
      {photos.map((photo, index)=>{
        return (
          <div>
            <img width="100%" src = {photo.url}/>
          </div>
        )
      })}
      </Slider>
    </div>
  );
}
}

export default App;
