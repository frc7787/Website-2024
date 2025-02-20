// Yeet
import React from "react"
import Link from "next/link"
import Sponsors from "../data/sponsors.json"


export default function HomeComponent() {
    return (
        <main>
            <section className="tempMain">
                <h2>#18840</h2>
                <h1>Reynolds Reybots</h1>
                <div className="tempAlignImages">
                    <img src="/FIRST-logos/FIRST_logo.png" alt="FIRST Logo" />
                    <img src="/FIRST-logos/FIRST_bc_logo.png" alt="FIRST Tech Challenge Logo" />
                    <img src="/FIRST-logos/FIRST_tech_logo.png" alt="FIRST BC Logo" />
                </div>
                <div className="tempGrid">
                    <div>
                        <p>Scoring Information:</p>
                        <span>
                            referred Auto: Specimens Max 4 (40 - 63 pts)<br />
                            Alternative Auto: Samples (22 pts)<br /><br />

                            Preferred TeleOp:  Specimens (60-80)<br />
                            Alternative TeleOp: Samples (56-72)<br /><br />

                            Endgame: Level 3 Ascent (30)<br /><br />

                            <u>10 Run Average in Practice:</u><br /><br />

                            Specimens : 70 TeleOp / 125 Total<br />
                            Samples : 65 TeleOp / 120 Total<br />
                        </span>
                    </div>
                    <div>
                        <p>Strategy:</p>
                        <span>
                            Specimens in Auto.<br /><br />

                            Specimens in Tele, with samples as necessary or when advantageous. We like a clear path between the two nearest sides of the sub and the observation zone. If you are picking up specimens from the observation zone, please stick to one side of the observation zone, rather than going to the middle.<br /><br />

                            Ascent at the last second.<br />
                        </span>
                    </div>
                    <div>
                        <p>Teleop Scoring Plan A:</p>
                        <span>
                            <ul>
                                <li>- Specimen Clipping.</li>
                                <li>- Scoring in Range of 6 to 8 Specimens Clipped.</li>
                                <li>- Picking up from all parts of the sub but concentrating on near and right side.</li>
                                <li>- Moving between sub, observation, and bars.</li>
                                <li>- Level 3 Ascent or Park in Observation Zone.</li><br />
                                <b><li>- Possible Scores (with Auto included):</li>
                                <ol>- Ideal = 213</ol>  
                                <ol>- Solid = 146  </ol>
                                <ol>- Decent = 106</ol></b>
                            </ul>
                        </span>
                    </div>
                    <div>
                    <p>Teleop Scoring Plan B:</p>
                        <span>
                            <ul>
                                <li>- Sample Buckets.</li>
                                <li>- Scoring in Range of 8 to 10 Bucket Samples</li>
                                <li>- Picking up from all parts of the sub but concentrating on near and left side.</li>
                                <li>- Get 2 samples from Human in End Game.</li>
                                <li>- Level 3 Ascent or Park in Observation Zone or Bar</li><br />
                                <b><li>- Possible Scores (with Auto included):</li>
                                <ol>- Ideal = 193</ol>  
                                <ol>- Solid = 130</ol>
                                <ol>- Decent = 94</ol></b>
                            </ul>
                        </span>
                    </div>
                </div>
            </section>
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
                <div className="sponsorsSection">
                    {
                        
                        Sponsors.map((sponsor, index) => {
                            return (
                                <div className="sponsorContainer" key={index}>
                                    <img src={sponsor.logo} alt="Sponsor" />
                                </div>
                            )
                        })

                    }
                </div>
            </section>
            <section className="aboutMain" id="about">
                <div className="aboutContainer">
                    <div className="aboutContainerText">
                        <p className="aboutSubheader">About Us</p>
                        <h3>Way More Than Just Building Robots</h3>
                        <p className="aboutDescription">
                            The Reynolds Reybots club is located in Victoria, BC at Reynolds Secondary School.
                            Our team is not just about building robots.
                            It&apos;s about working in the community, teaching the fundamentals of STEM and inspiring others!
                            Every year we come together and create a common goal for the season.
                            This year our goal is: Improve our skills, develop our documentation and award focused aspects.
                            All of our students work hard to achieve the goal and learn so much along the way by getting hands-on with actually building something, collaborating with others, and sometimes working on the more business side of things! 
                            Many of our students grow up and decide to pursue passions in the area of STEM or Business, or just use the skills they used while on the team like creativity and collaboration!
                        </p>
                        <Link href="https://www.thebluealliance.com/team/7787" target="_blank" rel="noreferrer">
                            <button className="competitionViewButton">View on Blue Alliance</button>
                        </Link>
                    </div>
                    <img src="aboutImage.avif" alt="team photo" />
                </div>
            </section>
            <section className="pricingMain" id="pricing">
                <div className="pricingHeaders">
                    <h1>Sponsor Us</h1>
                    <p>Help us fund our new robots for 2023/2024 and also receive fantastic benefits in the process!</p>
                </div>
                <div className="pricingComponents">

                    <div className="pricingComponent">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">TINKERER</div>
                            <div className="pricingComponentPricing">
                                <p className="pricingComponentPricingHeader">$50 to 199</p>
                                <p className="pricingComponentPricingToAndYear">/ Year</p>
                            </div>
                            <div className="seperationLine"></div>
                            <div className="pricingComponentBenefits">
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Invitation to our sponsor night!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Certificate of appreciation that can be displayed at your business!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">CREATOR</div>
                            <div className="pricingComponentPricing">
                                <p className="pricingComponentPricingHeader">$200 to 499</p>
                                <p className="pricingComponentPricingToAndYear">/ Year</p>
                            </div>
                            <div className="seperationLine"></div>
                            <div className="pricingComponentBenefits">
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Everything from TINKERER!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Active link from our website to yours!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Photo of the Reybots team!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">MECHANIC</div>
                            <div className="pricingComponentPricing">
                                <p className="pricingComponentPricingHeader">$500+</p>
                                <p className="pricingComponentPricingToAndYear">/ Year</p>
                            </div>
                            <div className="seperationLine"></div>
                            <div className="pricingComponentBenefits">
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Everything from CREATOR!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Logo on sponsor banner!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Logo on robot!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent pricingComponentGold">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">ENGINEER</div>
                            <div className="pricingComponentPricing">
                                <p className="pricingComponentPricingHeader">$1000+</p>
                                <p className="pricingComponentPricingToAndYear">/ Year</p>
                            </div>
                            <div className="seperationLine"></div>
                            <div className="pricingComponentBenefits">
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Everything from MECHANIC!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Team robot demonstration!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Photo with the team!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Feature on our social media pages!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent pricingComponentGold">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">ROBORUNNER</div>
                            <div className="pricingComponentPricing">
                                <p className="pricingComponentPricingHeader">$2500+</p>
                                <p className="pricingComponentPricingToAndYear">/ Year</p>
                            </div>
                            <div className="seperationLine"></div>
                            <div className="pricingComponentBenefits">
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Everything from ENGINEER!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Plaque of appreciation!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>We will wear your merchandise!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent pricingComponentGold">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">REYBOT</div>
                            <div className="pricingComponentPricing">
                                <p className="pricingComponentPricingHeader">$5000+</p>
                                <p className="pricingComponentPricingToAndYear">/ Year</p>
                            </div>
                            <div className="seperationLine"></div>
                            <div className="pricingComponentBenefits">
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Everything from ROBORUNNER!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Benefits TBD!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}
