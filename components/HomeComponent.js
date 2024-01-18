// Yeet
import React from "react"
import Link from "next/link"

export default function HomeComponent() {
    return (
        <main>
            <section className="homeMain" id="home">
                <h1>Education for the Future Generation</h1>
                <p className="homeDescription">Our team&apos;s central mission is to inspire the future generation and to educate them in the principals of STEM and the ideals of FIRST!</p>
                <a href="#about">
                    <button className="homeAboutButton">About</button>
                </a>
                <div className="homeImageGrid">
                    <img src="/1.avif" alt="home image" />
                    <img src="/2.avif" alt="home image" />
                    <img src="/3.avif" alt="home image" />
                    <img src="/5.avif" alt="home image" />
                    <img src="/4.avif" alt="home image" />
                </div>
            </section>
            <section className="competitionsMain" id="competitions">
                <div className="compeitionsHeaders">
                    <h1>Competitions</h1>
                    <p>A collection of our past entries into the FIRST high school robotics/technology competition!</p>
                </div>  
                <div className="allCompetitions">
                    <div className="compeitionElement">
                        <img src="/compeition1.avif" className="compeitionElementImage" alt="competition" />
                        <div className="competitionElementTextAlign">
                            <div>
                                <h2>Canadian Pacific Regional</h2>
                                <p>In February, at the save-on memorial center we competed against teams in the FIRST Canadian Pacific Regional Robotics Competition in Victoria, BC.</p>
                                <Link href="https://www.thebluealliance.com/event/2023bcvi" target="_blank" rel="noreferrer">
                                    <button className="competitionViewButton">View on Blue Alliance</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="compeitionElement compeitionElement2">
                        <img src="/compeition2.avif" className="compeitionElementImage" alt="competition" />
                        <div className="competitionElementTextAlign">
                            <div>
                                <h2>BC Provincial Championship</h2>
                                <p>Recently one of our two teams had an exciting win at the FIRST Tech Challenge Provincials in Surrey, BC. As a result, we have earned the incredible opportunity to go to the World Championships in Houston, Texas, this April.</p>
                                <Link href="/get-started" target="_blank" rel="noreferrer">
                                    <button className="competitionViewButton">Sponsor Us Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
               </div>
            </section>
            <section className="sponsorsMain" id="sponsors">
                <div className="sponsorsHeaders">
                    <h1>Sponsors</h1>
                    <p>Everyone who is currently sponsoring the Reybots and helping to fund our robots!</p>
                </div>
            </section>
            <section className="aboutMain" id="about">
                <div className="aboutContainer">
                    <div className="aboutContainerText">
                        <p className="aboutSubheader">About Us</p>
                        <h3>Way More Than Just Building Robots</h3>
                        <p className="aboutDescription">The Reynolds Reybots club is not just about building robots. It’s about working in the community, teaching the fundamentals of STEM and inspiring others! All of our students learn so much by getting hands-on with actually building something and collaborating with others! Many of our students grow up and decided to pursue passions in the area of STEM or just use the skills they used while building the robot like creativity and collaboration!</p>
                        <Link href="https://www.thebluealliance.com/team/7787" target="_blank" rel="noreferrer">
                            <button className="competitionViewButton">View on Blue Alliance</button>
                        </Link>
                    </div>
                    <img src="aboutImage.avif" alt="team photo" />
                </div>
            </section>
        </main>
    )
}
