import React, { useState, useEffect } from 'react'
import banner from '../images/banner_1.JPG'
import banner_2 from '../images/banner_1.JPG'
import person from '../images/person_1.jpg'
import organizer from '../images/classroom.jpg'

import about from '../images/banner_2.JPG'
export const Events = () => {

    const eventDate = "2024-12-18T00:00:00";
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const eventTime = new Date(eventDate).getTime();
        const currentTime = new Date().getTime();
        const difference = eventTime - currentTime;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Clear interval on component unmount
    }, []);



    return (
        <div>
            {/* hero */}
            <div className="event_hero" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero_top">
                    <i class="fa-solid fa-clock fa-lg"></i><p>17-18 December, 2024</p> &emsp;<i class="fa-solid fa-location-dot fa-lg"></i><p>New York</p>
                </div>
                <h2>Business Conference of Newyork-2024.</h2>
                <button className='hero_btn'>Register Now</button>


            </div>
            <div className="hero_days">
                <p>{timeLeft.days || 0} <span>days</span></p>
                <p>{timeLeft.hours || 0} <span>hours</span></p>
                <p>{timeLeft.minutes || 0} <span>minutes</span></p>
                <p>{timeLeft.seconds || 0} <span>seconds</span></p>
            </div>

            <div className="event_about">
                <div><img src={about} alt="" className='about_image' /></div>
                <div>
                    <h2>About Our Event</h2>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div className="about_btn">
                        <button className='about_btn_1'>View our schedule</button>
                        <button className='about_btn_2'>Buy Tickets Now </button>
                    </div>
                </div>
            </div>
            {/* stats */}
            <div class="bg-section" style={{ backgroundImage: `url(${banner_2})` }}>
                <div class="bg-overlay"></div>
                <div class="event_content">
                    <div class="stat-item">
                        <i class="fa-solid fa-campground"></i>
                        <div class="numbers">15</div>
                        <p>Our Visionary Speakers</p>
                    </div>
                   <div class="stat-item">
                        <i class="fa-solid fa-globe"></i>
                        <div class="numbers">300</div>
                        <p>International Sponsors</p>
                    </div>
                    <div class="stat-item">
                        <i class="fa-solid fa-flag"></i>
                        <div class="numbers">78</div>
                        <p>Workshops We Offer</p>
                    </div>
                    <div class="stat-item">
                        <i class="fa-solid fa-ticket"></i>
                        <div class="numbers">4,560</div>
                        <p className='last_one'>Tickets Sold by our Organization</p>
                    </div>  {/* */}
                </div>
            </div>

            {/* schedule */}
            <div className="schedule">
                <div className="schedule_left">
                    <h1>Check The Schedule</h1>
                    <p>This is floting event schedule section you can check the details about time duration, speaker, venue & more.</p>

                    <div className="schedule_days">
                        <button>Day - 1</button>
                        <button>Day - 2</button>
                        <button>Day - 3</button>
                    </div>
                </div>
                <div className="schedule_right">
                    <div className="event_schedule_container">
                        <div className="event_date">
                            <p>Friday, 17 December 2019</p>
                        </div>
                        <div className="event_details">
                            <p>10:30am</p>
                            <img src={person} alt="" />
                            <div className="about_speaker">
                                <h3>Community Meeting</h3>
                                <div className="place_details">
                                    <i class="fa-solid fa-location-dot fa-lg"></i>
                                    <p>New York</p> &emsp;
                                    <i class="fa-solid fa-user"></i>
                                    <p>Speaker Name</p>
                                </div>
                            </div>
                        </div>
                        <div className="event_details">
                            <p>10:30am</p>
                            <img src={person} alt="" />
                            <div className="about_speaker">
                                <h3>Community Meeting</h3>
                                <div className="place_details">
                                    <i class="fa-solid fa-location-dot fa-lg"></i>
                                    <p>New York</p> &emsp;
                                    <i class="fa-solid fa-user"></i>
                                    <p>Speaker Name</p>
                                </div>
                            </div>
                        </div>
                        <div className="event_details">
                            <p>10:30am</p>
                            <img src={person} alt="" />
                            <div className="about_speaker">
                                <h3>Community Meeting</h3>
                                <div className="place_details">
                                    <i class="fa-solid fa-location-dot fa-lg"></i>
                                    <p>New York</p> &emsp;
                                    <i class="fa-solid fa-user"></i>
                                    <p>Speaker Name</p>
                                </div>
                            </div>
                        </div>
                        <div className="event_details">
                            <p>10:30am</p>
                            <img src={person} alt="" />
                            <div className="about_speaker">
                                <h3>Community Meeting</h3>
                                <div className="place_details">
                                    <i class="fa-solid fa-location-dot fa-lg"></i>
                                    <p>New York</p> &emsp;
                                    <i class="fa-solid fa-user"></i>
                                    <p>Speaker Name</p>
                                </div>
                            </div>
                        </div>
                        <div className="event_details">
                            <p>10:30am</p>
                            <img src={person} alt="" />
                            <div className="about_speaker">
                                <h3>Community Meeting</h3>
                                <div className="place_details">
                                    <i class="fa-solid fa-location-dot fa-lg"></i>
                                    <p>New York</p> &emsp;
                                    <i class="fa-solid fa-user"></i>
                                    <p>Speaker Name</p>
                                </div>
                            </div>
                        </div>
                        <div className="event_details">
                            <p>10:30am</p>
                            <img src={person} alt="" />
                            <div className="about_speaker">
                                <h3>Community Meeting</h3>
                                <div className="place_details">
                                    <i class="fa-solid fa-location-dot fa-lg"></i>
                                    <p>New York</p> &emsp;
                                    <i class="fa-solid fa-user"></i>
                                    <p>Speaker Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="about_organizer">
                <div className='organizer_left'>
                    <img src={organizer} alt="" />
                </div>
                <div className='organizer_right'>
                    <h2>About Event organizer</h2>
                    <p>Lifevent started in October 2013 in English. We have worked with most of the biggest events and artist promoters in English from Music Festival to Kpop concerts, classical concerts. Our notable clients include: TEDx, Hardrock Cafe, Tech In Asia.</p>
                    <ul>
                        <li>We have 10+ Years</li>
                        <li>100+ Members in all states
                        </li>
                        <li>
                            120+ Events at 200 countries
                        </li>
                    </ul>
                    <button className='organizer_btn'>Learn More</button>
                </div>
            </div>

<div className="speakers_container">
<h2>Event Speakers</h2>
<div className="speakers_div">
    <div className="speaker_details">
        <img src={person} alt="" />
        <div className='speaker_details_inner'>
            <h4>Speaker Name</h4>
            <p>Profession</p>
            <p><i class="fa-solid fa-phone"></i> +91 XXXXX XXXXX</p>
        </div>
    </div>
    <div className="speaker_details">
        <img src={person} alt="" />
        <div className='speaker_details_inner'>
            <h4>Speaker Name</h4>
            <p>Profession</p>
            <p><i class="fa-solid fa-phone"></i> +91 XXXXX XXXXX</p>
        </div>
    </div>
    <div className="speaker_details">
        <img src={person} alt="" />
        <div className='speaker_details_inner'>
            <h4>Speaker Name</h4>
            <p>Profession</p>
            <p><i class="fa-solid fa-phone"></i> +91 XXXXX XXXXX</p>
        </div>
    </div>
    <div className="speaker_details">
        <img src={person} alt="" />
        <div className='speaker_details_inner'>
            <h4>Speaker Name</h4>
            <p>Profession</p>
            <p><i class="fa-solid fa-phone"></i> +91 XXXXX XXXXX</p>
        </div>
    </div>
    <div className="speaker_details">
        <img src={person} alt="" />
        <div className='speaker_details_inner'>
            <h4>Speaker Name</h4>
            <p>Profession</p>
            <p><i class="fa-solid fa-phone"></i> +91 XXXXX XXXXX</p>
        </div>
    </div>
    <div className="speaker_details">
        <img src={person} alt="" />
        <div className='speaker_details_inner'>
            <h4>Speaker Name</h4>
            <p>Profession</p>
            <p><i class="fa-solid fa-phone"></i> +91 XXXXX XXXXX</p>
        </div>
    </div>
</div>
</div>














        </div>
    )
}
