import React, { useRef, useState } from "react";
import './main.scss'
import './utility.scss'
import panda from '../img/finaldone.png' //done
import panda2 from '../img/nidhiSecondsecond.jpg' //done
import portfolioOne from '../img/portfolio_one.jpg'
import portfolioTwo from '../img/portfolio_two.png'
import portfolioThree from '../img/portfolio_three.jpg'
import portfolioFour from '../img/portfolio_four.png'
import portfolioFive from '../img/portfolio_five.jpg'
import portfolioSix from '../img/portfolio_six.jpg'
import NidhiSVG from '../img/NidhiMain.svg'
import contently from '../img/contently.jpg'
import storyboardOne from '../img/storyboardOne.png'
import storyboardTwo from '../img/storyboardTwo.png'
import storyboardThree from '../img/storyboardThree.png'
import storyboardFour from '../img/storyboardFour.png'
import storyboardFive from '../img/storyboardFive.png'
import storyboardSix from '../img/storyboardsix.png'
import storyboardVidone from '../img/portfolio_vone.jpg'
import storyboardVidtwo from '../img/portfolio_vtwo.jpg'
import storyboardVidthree from '../img/portfolio_vthree.jpg'
import storyboardVidfour from '../img/portfolio_vfour.jpg'
import storyboardVidfive from '../img/portfolio_vfive.jpg'
import storyboardVidsix from '../img/portfolio_vsix.jpg'
import portfolioAssOne from '../img/portasone.png'
import portfolioAssTwo from '../img/portastwo.png'
import portfolioAssThree from '../img/portasthree.png'
import portfolioAssFour from '../img/portasFour.png'
import portfolioAssFive from '../img/portasFive.png'
import portfolioAssSix from '../img/portasSix.png'
import portfolioAssSeven from '../img/portasSeven.png'
import portfolioAssEight from '../img/portasEight.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';
import ReactPlayer from "react-player";

const Intro = () => {
    return <div className="intro container" id="homeID">
        <div className="mainSection grid">
            <section className="icons flex">
                <i class="fa-brands fa-linkedin-in fa-2x"></i>
                <i class="fa-brands fa-facebook fa-2x" ></i>
                <i class="fa-brands fa-instagram fa-2x" ></i>
            </section>
            <section className="portfolio flex">
                <div className="info flex">
                    <div>
                        <h1 className="pd-y">Hi, I'am Nidhi</h1>
                        <h3 className="pd-y">Instructional Designer</h3>
                        <p className="pd-y desc">High level experience in instructional designing and development, producing quality work</p>
                        <a href="" className="pd-y">Contact Me</a>
                    </div>
                    <div className="flex scroll" onClick={() => window.scrollBy(0, 700)} >
                        <i class="fa-solid fa-computer-mouse fa-2x" ></i>
                        <p>Scroll down</p>
                        <i class="fa-solid fa-arrow-down" onClick={() => window.scrollBy(0, 700)}></i>
                    </div>
                </div>
                <div className="pic">
                    <div className="pic-image">
                        <img src={panda} />
                    </div>
                </div>
            </section>
        </div>
    </div>
}


const Skills = () => {
    const handleCollapsible = (event, order) => {
        event.target.classList.toggle('active');
        var content = event.target.nextElementSibling;
        const collapsibleClasses = document.getElementsByClassName('collapsible');
        if (order === 'first') {
            collapsibleClasses[1].nextElementSibling.style.maxHeight = null;
            collapsibleClasses[2].nextElementSibling.style.maxHeight = null;
        }
        if (order === 'second') {
            collapsibleClasses[0].nextElementSibling.style.maxHeight = null;
            collapsibleClasses[2].nextElementSibling.style.maxHeight = null;
        }
        if (order === 'third') {
            collapsibleClasses[0].nextElementSibling.style.maxHeight = null;
            collapsibleClasses[1].nextElementSibling.style.maxHeight = null;
        }
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    const collapsibleItem = () => {
        return (
            <div className="content">
                <div class="w3-light-grey w3-round-xlarge">
                    <div className="content-detail">
                        <div className="flex">
                            <p>Figma</p>
                            <p>75%</p>
                        </div>
                        <div class="w3-container w3-blue w3-round-xlarge" style={{ width: '75%' }} />
                    </div>
                </div>
                <div class="w3-light-grey w3-round-xlarge">
                    <div className="content-detail">
                        <div className="flex">
                            <p>Figma</p>
                            <p>75%</p>
                        </div>
                        <div class="w3-container w3-blue w3-round-xlarge" style={{ width: '75%' }} />
                    </div>
                </div>
                <div class="w3-light-grey w3-round-xlarge">
                    <div className="content-detail">
                        <div className="flex">
                            <p>Figma</p>
                            <p>75%</p>
                        </div>
                        <div class="w3-container w3-blue w3-round-xlarge" style={{ width: '75%' }} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <section className="container skills flex" id="skillsID">
                <div className="skills-title flex">
                    <h1 id='sectionTitle'>Skills</h1>
                    <p id="sectionSubtitle">My Technical Level</p>
                </div>
                <div className="skills-content grid">
                    <div className="skills-content-column">
                        <div className="skill grid">
                            <div className="skill-name">
                                <div className="flex">
                                    <i class="fa-solid fa-swatchbook fa-lg"></i>
                                    <div className="skill-summary">
                                        <p className="skill-heading">Skill #1</p>
                                        <p className="skill-exp">More than 2 years</p>
                                    </div>
                                </div>
                            </div>
                            <i class="fa-solid fa-angle-down collapsible" onClick={(event) => handleCollapsible(event, 'first')}></i>
                            {collapsibleItem()}
                        </div>
                        <div className="skill grid">
                            <div className="skill-name">
                                <div className="flex">
                                    <i class="fa-solid fa-swatchbook fa-lg"></i>
                                    <div className="skill-summary">
                                        <p className="skill-heading">Skill #1</p>
                                        <p className="skill-exp">More than 2 years</p>
                                    </div>
                                </div>
                            </div>
                            <i class="fa-solid fa-angle-down collapsible" onClick={(event) => handleCollapsible(event, 'second')}></i>
                            {collapsibleItem()}
                        </div>
                    </div>
                    <div>
                        <div className="skill grid">
                            <div className="skill-name">
                                <div className="flex">
                                    <i class="fa-solid fa-swatchbook fa-lg"></i>
                                    <div className="skill-summary">
                                        <p className="skill-heading">Skill #1</p>
                                        <p className="skill-exp">More than 2 years</p>
                                    </div>
                                </div>
                            </div>
                            <i class="fa-solid fa-angle-down collapsible" onClick={(event) => handleCollapsible(event, 'third')}></i>
                            {collapsibleItem()}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}



const Portfolio = () => {

    const [eduction, setEducation] = useState(true);
    const [work, setWork] = useState(false);
    const handleEducation = () => {
        setEducation(true);
        setWork(false);
    }
    const handleWork = () => {
        setEducation(false);
        setWork(true);
    }

    const educationTimeline = () => {
        return (
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                        <h3>Bachelor of Technology</h3>
                        <p className="uni">Kurukshetra University</p>
                        <p className="year"><i class="fa-solid fa-calendar-days"></i> 2018 - 2012</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h3>Master of Technology</h3>
                        <p className="uni">Kurukshetra University</p>
                        <p className="year"><i class="fa-solid fa-calendar-days"></i> 2012 - 2014</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h3>Bachelor of Education</h3>
                        <p className="uni">Kurukshetra University</p>
                        <p className="year"><i class="fa-solid fa-calendar-days"></i> 2020 - 2022</p>
                    </div>
                </div>
            </div>

        )
    }

    const workTimeline = () => {
        return (
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                        <h3>Lead Instructional Designer</h3>
                        <p className="uni">LearningMate Solutions</p>
                        <p className="year"><i class="fa-solid fa-calendar-days"></i> 2022 - 2023</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h3>Learning Experience Designer</h3>
                        <p className="uni">StayQrious</p>
                        <p className="year"><i class="fa-solid fa-calendar-days"></i> 2020 - 2022</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h3>International Tutor</h3>
                        <p className="uni">Questmath International</p>
                        <p className="year"><i class="fa-solid fa-calendar-days"></i> 2019 - 2020</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h3>Instructional Designer</h3>
                        <p className="uni">Unacademy</p>
                        <p className="year"><i class="fa-solid fa-calendar-days"></i> 2018 - 2019</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h3>Assistant Professor</h3>
                        <p className="uni">M.L.N College</p>
                        <p className="year"><i class="fa-solid fa-calendar-days"></i> 2017 - 2019</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h3>Maths | Physics Teacher</h3>
                        <p className="uni">S.N.P School</p>
                        <p className="year"><i class="fa-solid fa-calendar-days"></i> 2015 - 2017</p>
                    </div>
                </div>
            </div>

        )
    }
    const Qualification = () => {
        return (
            <section className="qualification container flex" id="qualificationID">
                <div className="qualification-heading flex">
                    <h1 id='sectionTitle'>Qualification</h1>
                    <p id="sectionSubtitle">My Technical Level</p>
                </div>
                <div className="qualification-timeline grid">
                    <div className="qualification-title flex">
                        <div className={`edu ${eduction ? 'colored' : ''}`} onClick={() => handleEducation()} > <i class="fa-solid fa-graduation-cap fa-lg"></i>Education</div>
                        <div className={`work ${work ? 'colored' : ''}`} onClick={() => handleWork()}><i class="fa-solid fa-briefcase fa-lg"></i>Work</div>
                    </div>
                    {
                        eduction && (
                            <div className="qualification-content">
                                {(educationTimeline())}
                            </div>
                        )
                    }
                    {
                        work && (
                            <div className="qualification-content">
                                {(workTimeline())}
                            </div>
                        )
                    }
                </div>
            </section >
        )
    }

    const Portfolio = () => {
        const slide = (portfolioName, heading, desc, link) => {
            return (
                <div className="portfolio-content-container">
                    <div className="portfolio-content flex ">
                        <img className="portfolio-img" src={portfolioName} />
                        <div className="portfolio-data">
                            <h3 className="portfolio-title">{heading}</h3>
                            <p className="portfolio-description">{desc}</p>
                            <a href={link} className="button" target='_blank' >Demo</a>
                        </div>
                    </div >
                </div>
            )
        }
        const slides = () => {
            const one = 'https://igeekteam.com/logos-why-do-they-matter/';
            const two = 'https://www.linkedin.com/pulse/20-most-astounding-facts-nidhi-sharma?articleId=6540508811340410880#comments-6540508811340410880&trk=public_profile_article_view';
            const three = 'https://medium.com/@sharma.nidhi8890/https-medium-com-i-am-a-teacher-who-writes-and-teaching-is-my-writing-muse-c3079f282c57';
            const four = 'https://igeekteam.com/logos-why-do-they-matter/';
            const six = 'https://shopeclipsegear.com/news/5-best-observatories-in-chile-for-2019-total-solar-eclipse/';
            return (
                <Swiper className=" portfolio-container "

                    loop={true}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ enabled: false }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>{slide(portfolioOne, 'Logos- Do They Matter??', 'Logo designs are all over, I check out around me now, and I can undoubtedly tally up at least 10 distinct logos easily…', one)}</SwiperSlide>
                    <SwiperSlide>{slide(portfolioTwo, '20 Most Astounding Facts...', 'Science encourages us to explore the world & the universe around us revealing some really unusual...', two)}</SwiperSlide>
                    <SwiperSlide>{slide(portfolioThree, 'I am a Teacher who writes...', 'Life is an act of juggling and I am juggling with 2 balls in my hands...', three)}</SwiperSlide>
                    <SwiperSlide>{slide(portfolioFour, 'Agile Certification', 'Agile is a versatile approach of project management that focuses on delivering value...', four)}</SwiperSlide>
                    <SwiperSlide>{slide(portfolioSix, '2019 Eclipse South America', 'Chile has established itself as a worldwide capital for astrotourism since it has the best skies for stargazing...', six)}</SwiperSlide>
                </Swiper>
            )
        }

        return (
            <section className="portfolioDemo container" id="portfolioID">
                <div className="portfolio-heading flex">
                    <h1>Portfolio</h1>
                    <p>Content Writing</p>
                </div>
                {slides()}
            </section>
        )
    }
    const openLink = (link) => window.open(link, '_newtab')

    const PortfolioStoryBoard = () => {
        const portOne = () => openLink('https://drive.google.com/file/d/1yZLe-yt77N1uwxhDCbvAJ95CWnEBz0c2/view?usp=drive_link');
        const portTwo = () => openLink('https://drive.google.com/file/d/1vW6EeNaWySsgGONzpRY7g-2DYNXMpjCW/view?usp=drive_link');
        const portThree = () => openLink('https://drive.google.com/file/d/1VmqrFt0HgzeEPwjPIEZ3hJV2XpgTt9Nr/view?usp=drive_link');
        const portFour = () => openLink('https://drive.google.com/file/d/1GZl5zHc5g8oaVndCRTK80PkRnvgjUmbZ/view?usp=drive_link');
        const portFive = () => openLink('https://drive.google.com/file/d/19rVtur0PUSJ3uGJDWlHwqlB-_CWpOw0p/view?usp=drive_link');
        const portSix = () => openLink('https://drive.google.com/file/d/1HxShlXBl1DwCa7NyDNm2X8LqD6W8akZK/view?usp=drive_link');

        return (
            <section className="container portfolioStoryboard flex">
                <div className="portfolioStoryboardHeading flex">
                    <p>Storyboarding</p>
                </div>
                <div className="storyboardContainer">
                    <div className="sitemContainer">
                        <div className="sitem" onClick={() => portOne()}>
                            <img src={storyboardOne} />
                            <div className="sitem-desc flex">
                                {/* <div className="sitem-desc-title">E-Learning Storyboard</div> */}
                                <div className="sitem-desc-desc">Introduces various performance art genres like dance, music and circus, showcasing their unique qualities and appeal to different audiences.</div>
                            </div>
                        </div>
                        <div className="sitem" onClick={() => portTwo()}>
                            <img src={storyboardTwo} />
                            <div className="sitem-desc flex">
                                {/* <div className="sitem-desc-title">Title</div> */}
                                <div className="sitem-desc-desc">Introduces the newly designed gaming arena, emphasizing ethical approvals and accessibility.</div>

                            </div>
                        </div>
                        <div className="sitem" onClick={() => portThree()}>
                            <img src={storyboardThree} />
                            <div className="sitem-desc flex">
                                {/* <div className="sitem-desc-title">Title</div> */}
                                <div className="sitem-desc-desc">Discussing the importance of an online presence, quality photos, and effective promotion for a gaming arena's success.</div>

                            </div>
                        </div>
                        <div className="sitem" onClick={() => portFour()}>
                            <img src={storyboardFour} />
                            <div className="sitem-desc flex">
                                {/* <div className="sitem-desc-title">Title</div> */}
                                <div className="sitem-desc-desc"> Exploring key considerations for planning a gaming arena, including market research, location selection, funding, and legal permits for a successful venture.</div>
                            </div>
                        </div>
                        <div className="sitem" id="sitemFive" onClick={() => portFive()}>
                            <img src={storyboardFive} />
                            <div className="sitem-desc flex">
                                {/* <div className="sitem-desc-title">Title</div> */}
                                <div className="sitem-desc-desc">Efficiently calculate the area of a rectangle without counting square by square using smoothly animated lines and labels.</div>
                            </div>
                        </div>
                        <div className="sitem" id="sitemSix" onClick={() => portSix()}>
                            <img src={storyboardSix} />
                            <div className="sitem-desc flex">
                                {/* <div className="sitem-desc-title">Title</div> */}
                                <div className="sitem-desc-desc"> Enhance math skills by quickly identifying the number of dots in a group without counting each one..</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }

    const PortfolioVideos = () => {
        const PlayIcon = () => (<i class="fa-regular fa-circle-play fa-3x videoIcon"></i>);
        return (
            <section className="container portfolioVideos flex">
                <div className="portfolioVideosHeading flex">
                    <p>Videos</p>
                </div>
                <div className="videosContainer">
                    <div className="portfoldioVideos-videos">
                        <div className="vitem" onClick={() => { openLink('https://drive.google.com/file/d/1bLuK9ZTGamM_grQtNqyW8KhJodFFw8zV/view?usp=drive_link') }}>
                            {PlayIcon()}
                            <img src={storyboardVidone} />
                        </div>
                        <div className="vitem" onClick={() => { openLink('https://drive.google.com/file/d/1buMdww0BDWWRlMaluR925mNaAvrG18S0/view?usp=drive_link') }}>
                            {PlayIcon()}
                            <img src={storyboardVidtwo} />
                        </div>
                        <div className="vitem" onClick={() => { openLink('https://drive.google.com/file/d/1JjI09HjZ9Y9QPoMLzEZVbDL-ej7sm0_o/view?usp=drive_link') }}>
                            {PlayIcon()}
                            <img src={storyboardVidthree} />
                        </div>
                        <div className="vitem" onClick={() => { openLink('https://drive.google.com/file/d/1M8ii941ybHJPi93nFG5Q507L2jkOtjR4/view?usp=drive_link') }}>
                            {PlayIcon()}
                            <img src={storyboardVidfour} />
                        </div>
                        <div className="vitem" onClick={() => { openLink('https://drive.google.com/file/d/1y7kEdH3Zm9H71IkfxpZEz61EfsSATwCu/view?usp=drive_link') }}>
                            {PlayIcon()}
                            <img src={storyboardVidfive} />
                        </div>
                        <div className="vitem" onClick={() => { openLink('https://drive.google.com/file/d/1zbA-HJt93o3Nh2Y1SOLr0ivVxq4YO7HM/view?usp=drive_link') }}>
                            {PlayIcon()}
                            <img src={storyboardVidsix} />
                        </div>
                    </div>
                </div>
            </section >
        )
    }

    const PortfolioAsess = () => {
        return (
            <section className="container flex asses">
                <div className="asessheading flex">
                    <p>Asessment</p>
                </div>
                <div className="assesContainer">
                    <div className="assesments">
                        <div className="sitem" onClick={() => openLink('https://drive.google.com/file/d/1KyXHQT5-aN1tOF1qzfXEoOgC7mIKoNq7/view?usp=drive_link')}>
                            <img src={portfolioAssOne} />
                        </div>
                        <div className="sitem" onClick={() => openLink('https://drive.google.com/file/d/1cSjs0l-TVsG8d1JDcmLE3Zsc7sa-ov9V/view?usp=drive_link')}>
                            <img src={portfolioAssTwo} />
                        </div>
                        <div className="sitem" onClick={() => openLink('https://drive.google.com/file/d/1T-ukLMdzdo4BocO68BKAZ9uz2ZDA9Wlc/view?usp=drive_link')}>
                            <img src={portfolioAssThree} />
                        </div>
                        <div className="sitem" onClick={() => openLink('https://drive.google.com/file/d/1EIh0YqG6-inA3LecqSE1VHHVt05-9SkJ/view?usp=drive_link')}>
                            <img src={portfolioAssFour} />
                        </div>
                        <div className="sitem" onClick={() => openLink('https://drive.google.com/file/d/17uxNznNgm3QVgfVraER_pyZeoSUgNcy1/view?usp=drive_link')}>
                            <img src={portfolioAssFive} />
                        </div>
                        <div className="sitem" onClick={() => openLink('https://drive.google.com/file/d/1FyD8NyNEQrFFxYoVIpFOYWnyRO0iKTiv/view?usp=drive_link')}>
                            <img src={portfolioAssSix} />
                        </div>
                        <div className="sitem" onClick={() => openLink('https://drive.google.com/file/d/1ow1YHPiN0Y0jnvgwZC6pzcbtJA-kvoFf/view?usp=drive_link')}>
                            <img src={portfolioAssSeven} />
                        </div>
                        <div className="sitem" onClick={() => openLink('https://drive.google.com/file/d/1gv5F1sd0iNYyw8NPefk4XO4Pf90tm_Du/view?usp=drive_link')}>
                            <img src={portfolioAssEight} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const navAbout = () => {
        const aboutID = document.getElementById('aboutID');
        var headerOffset = 45;
        var elementPosition = aboutID.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
        });
    }

    const navSkills = () => {
        const element = document.getElementById('skillsID');
        var headerOffset = 45;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
        });
    }

    const navQualification = () => {
        const element = document.getElementById('qualificationID');
        var headerOffset = 45;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
        });
    }
    const navHome = () => {
        const element = document.getElementById('homeID');
        var headerOffset = 45;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        // element.scrollIntoView();
        window.scrollTo({
            top: -offsetPosition,
        });
    }
    const navPortfolio = () => {
        const element = document.getElementById('portfolioID');
        var headerOffset = 45;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
        });
    }



    const Header = () => {
        return (<>
            <header className="header flex">
                <div className="headerContainer flex">
                    <nav className="navbar flex">
                        <h3 className="name">Nidhi</h3>
                        <ul className="flex">
                            <li onClick={navHome}><h3>Home</h3></li>
                            <li onClick={navAbout}><h3>About</h3></li>
                            <li onClick={navSkills}><h3>Skills</h3></li>
                            <li onClick={navQualification}><h3>Qualification</h3></li>
                            <li onClick={navPortfolio}><h3>Portfolio</h3></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>)
    }


    const About = () => {
        return (
            <section id="aboutID" className="container about">
                <div className="about-title flex">
                    <h1 id='sectionTitle'>About Me</h1>
                    <p id='sectionSubtitle'>My introduction</p>
                </div>
                <div className="about-content flex">
                    <div className="about-pic flex">
                        <img src={panda2} />
                    </div>
                    <div className="about-exp">
                        <p className="about-exp-text">Instructional designer with extensive knowledge and years of experience, working
                            in eduction sector, delivering quality work
                        </p>
                        <div className="about-exp-details flex">
                            <div>
                                <p>08<i class="fa-solid fa-plus fa-xs"></i></p>
                                <p>Years experience</p>
                            </div>
                            <div>
                                <p>08<i class="fa-solid fa-plus fa-xs"></i></p>
                                <p>Years experience</p>
                            </div>
                            <div>
                                <p>08<i class="fa-solid fa-plus fa-xs"></i></p>
                                <p>Years experience</p>
                            </div>
                        </div>
                        <a href="">Download CV</a>
                    </div>
                </div>
            </section>
        )
    }

    const Footer = () => {
        return (
            <section className="footer">
                <div className="footerContainer flex container">
                    <div className="footerName">
                        <h3>Nidhi</h3>
                        <p>Instructional Designer</p>
                    </div>
                    <div className="footerLinks flex">
                        <ul className="flex">
                            <li onClick={navHome}><h3>Home</h3></li>
                            <li onClick={navAbout}><h3>About</h3></li>
                            <li onClick={navSkills}><h3>Skills</h3></li>
                            <li onClick={navQualification}><h3>Qualification</h3></li>
                            <li onClick={navPortfolio}><h3>Portfolio</h3></li>
                        </ul>
                        <div className="icons flex">
                            <i class="fa-brands fa-linkedin-in fa-1x"></i>
                            <i class="fa-brands fa-facebook fa-1x" ></i>
                            <i class="fa-brands fa-instagram fa-1x" ></i>
                        </div>
                    </div>
                </div>
            </section>
        )
    }


    return <>
        <Header />
        <Intro />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <PortfolioStoryBoard />
        <PortfolioVideos />
        <PortfolioAsess />
        <Footer />
    </>
}

export default Portfolio;