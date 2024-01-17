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
            <section className="pricingMain" id="pricing">
                <div className="pricingHeaders">
                    <h1>Sponsor Us</h1>
                    <p>Help us fund our new robots for 2022 and also receive fantastic benefits in the process!</p>
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
