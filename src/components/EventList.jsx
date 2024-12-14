import React, { useState, useEffect } from 'react'
import banner from '../images/event_banner.jpg'
import banner_2 from '../images/banner_1.JPG'
import person from '../images/person_1.jpg'
import organizer from '../images/classroom.jpg'

import about from '../images/banner_2.JPG'
export const EventList = () => {

    const eventDate = "2024-12-18T00:00:00";
    const EVENT_APIS = 'https://ngo.createdinam.com/api/event_list';
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [EventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    // Fetch data using useEffect hook
    useEffect(() => {
        fetch(EVENT_APIS)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(JSON.stringify(data));
                setEventData(data?.events);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {/* hero */}
            <div className="event_hero" style={{ backgroundImage: `url(${banner})`,height:900,resize:'block' }}>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="heading-20219 mb-5">
                        <h2 className="title text-cursive">Latest Event</h2>
                    </div>
                    <div className="row">
                        {EventData?.map((info, index) =>
                        (<div className="col-md-6">
                            <div className="event-29191 mb-5">
                                <a href="#" className="d-block mb-3">
                                    {info.event_banner ? JSON.parse(info.event_banner)?.map((info, index) => <img src={'https://ngo.createdinam.com/public/' + info} alt="Image" className="img-fluid rounded" />) : null}
                                </a>
                                <div className="px-3 d-flex">
                                    <div className="bg-primary p-3 d-inline-block text-center rounded mr-4 date">
                                        <span className="text-white h3 m-0 d-block">{new Date(info?.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', })}</span>
                                        <span className="text-white small"></span>
                                    </div>
                                    <div>
                                        <div className="mb-3">
                                            <span className="mr-3"> <span className="icon-clock-o mr-2 text-muted"></span>{new Date(info?.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', })}</span>
                                            <span> <span className="icon-room mr-2 text-muted"></span>Hariyana, Meerut</span>
                                        </div>
                                        <h3><a href="#">{info?.event_title}</a></h3>
                                        <p>{info?.event_short_desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
            {/* stats */}
            {/* <div class="bg-section" style={{ backgroundImage: `url(${banner_2})` }}>
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
                    </div>
                </div>
            </div> */}
            <div className="about_organizer">
                <div className='organizer_left'> <img src={organizer} alt=""  style={{height:525}}/>
                </div>
                <div className='organizer_right'>
                    <h2>About Event organizer</h2>
                    <p>Lifevent started in October 2013 in English. We have worked with most of the biggest events and artist promoters in English from Music Festival to Kpop concerts, classical concerts. Our notable clients include: TEDx, Hardrock Cafe, Tech In Asia.</p>
                    <ul>
                        <li>We have 10+ Years</li>
                        <li>100+ Members in all states</li>
                        <li> 120+ Events at 200 countries</li>
                    </ul>
                    <button className='organizer_btn'>Learn More</button>
                </div>
            </div>
        </div>
    )
}
