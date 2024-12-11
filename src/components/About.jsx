import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../images/banner_one.jpg'
import img2 from '../images/banner_two.jpg'
import img3 from '../images/banner_three.jpg'
import img4 from '../images/banner_four.jpg'
import physical from '../images/physical.JPG'
import skill from '../images/skill.JPG'
import yoga from '../images/yoga.JPG'
import creative from '../images/creative.JPG'

const SLIDES = [
  { src: img1, alt: 'Image 1',title: 'Hope begins where care is given; together, we can build brighter futures.', button_name: 'Donate', link: 'donate' },
  { src: img2, alt: 'Image 2',title: 'A helping hand today can shape a better tomorrow for our children.', button_name: 'Donate', link: 'donate' },
  { src: img3, alt: 'Image 3',title: 'Empower children with love, care, and endless possibilities.', button_name: 'Donate', link: 'donate' },
  { src: img4, alt: 'Image 4',title: 'Every act of kindness is a step toward a child’s brighter future.', button_name: 'Donate', link: 'donate' },
];
const PreviousArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'block',
      background: 'blue', // Circle color
      borderRadius: '50%', // Circle shape
      width: '40px', // Circle diameter
      height: '40px', // Circle diameter
      color: 'white', // Arrow color
      display: 'flex', // Center content
      alignItems: 'center', // Center vertically
      justifyContent: 'center', // Center horizontally
      fontSize: '18px', // Arrow size
      zIndex: 1 // Ensure it's on top
    }}
    onClick={onClick}
  >
    {/* Left arrow symbol */}
  </div>
);

// Custom Next Arrow (Circular)
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'block',
      background: 'blue', // Circle color
      borderRadius: '50%', // Circle shape
      width: '40px', // Circle diameter
      height: '40px', // Circle diameter
      color: 'white', // Arrow color
      display: 'flex', // Center content
      alignItems: 'center', // Center vertically
      justifyContent: 'center', // Center horizontally
      fontSize: '18px', // Arrow size
      zIndex: 1 // Ensure it's on top
    }}
    onClick={onClick}
  >
    {/* Right arrow symbol */}
  </div>
);


export const About = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    //    arrows: true,  Enable custom arrows
    // prevArrow: <PreviousArrow />, // Use custom prev arrow
    //nextArrow: <NextArrow />,     // Use custom next arrow
  };

  return (
    <div className="about-usx">
      {/* carousel */}
      <div className='about_carousel_container' >
        <Slider {...settings}>
          {SLIDES.map((slide, index) => (
            <div key={index} className='content-image'>
              <img src={slide.src} alt="Image Slider" width={1920} height={820} />
              <div className="box-92819">
                <h1 className="text-white mb-3">{slide.title}</h1>
                {/* <p><a href="#" className="btn btn-primary py-3 px-4 rounded-0">{slide.button_name}</a></p> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* title */}
      <div className="title" style={{ paddingTop: 10 }}>
        <h2>Rajkiya Bal Grah (Boys) / Child Care Institution (CCI):</h2>
        <p className='title_para'>Empowering Lives, Rebuilding Futures</p>

        <div className="brief">
          <p> " In alignment with Section 50 of the Juvenile Justice Act, the State Government has established Rajkiya Bal Grah, a registered Child Care Institution (CCI), to provide a nurturing sanctuary for boys aged 10 to 18 who have been abandoned, orphaned, or left destitute. <br /> This home is not just a shelter but a center for holistic development, where the emotional, educational, and personal growth of every child is prioritized."</p>
          <img src={img2} alt="" className='brief_img' />
        </div>


      </div>

      <div className='container'>
        <div className="focus">
          <h2>Our Focus</h2>
          <p>At Rajkiya Bal Grah, we believe that every child deserves a chance to thrive. Our institution focuses on providing a comprehensive support system, including:</p>
          <div className="focus_areas">
            <div className="area">
              <img src={yoga} alt="" className='focus_img' style={{ objectFit: 'cover' }} />
              <h3>Yoga and Meditation</h3>
              <p>Designed to foster mental clarity and emotional balance, helping the children cope with their past experiences and build resilience for the future.</p>
            </div>
            <div className="area">
              <img src={physical} alt="" className='focus_img' style={{ objectFit: 'cover' }} />
              <h3>Physical Education</h3>
              <p>A vital component in ensuring the physical well-being and discipline of the children, promoting a healthy lifestyle.</p>
            </div>
            <div className="area">
              <img src={skill} alt="" className='focus_img' style={{ objectFit: 'cover' }} />
              <h3>Skill Development</h3>
              <p>Computer training and other vocational courses aim to equip the children with practical skills that will serve them well in their personal and professional lives.</p>
            </div>
            <div className="area">
              <img src={creative} alt="" className='focus_img' style={{ objectFit: 'cover' }} />
              <h3>Creative Expression</h3>
              <p>Dance and music lessons provide a creative outlet, allowing children to express themselves and build confidence through the arts.</p>
            </div>
            <div className="area">
              <img src={img1} alt="" className='focus_img' style={{ objectFit: 'cover' }} />
              <h3>Academic Growth</h3>
              <p>In partnership with prestigious public schools in the district, children receive quality education, with additional support provided through home tutoring to ensure no child is left behind.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mission">
        <h2>Our Mission</h2>
        <div className='mission_container'>
          <img src={img1} alt="" className='mission_img' />
          <div>
            <p>Our mission extends beyond care and education, we focus on rehabilitation and family reintegration. In just the past three months, 15 children have been successfully reunited with their families, marking significant progress in our ongoing effort to bring children back into loving, stable homes.
              <br />Rajkiya Bal Grah is more than a shelter it’s a place where hope is restored, futures are rebuilt, and young lives are empowered.</p>
            <input type="submit" value="Donate Now" className="btn btn-primary" />
          </div>
        </div>

        <p className='mission_quote'>  “Rajkiya Bal Grah is more than a shelter it’s a place where hope is restored, futures are rebuilt, and young lives are empowered.”
        </p>

      </div>

    </div>




  );
};



