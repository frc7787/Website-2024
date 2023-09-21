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
                <div className="sponsorsSection">
                    <div className="sponsorContainer">
                        <img src="/Komodo.avif" alt="Komodo Sponsor" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/64k Logo.svg" alt="64K Software Sponsor" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Bramley House Enterprises.avif" alt="Bramley House Enterprises" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Howell Data Systems Logo.avif" alt="Howell Data Systems Sponsor" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/bernhardt.avif" alt="Bernhardt Sponsor" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/49 below_371.webp" alt="49 Below Sponsor" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Actuonix_500.avif" alt="Actuonix Sponsor" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Ally and Dennis_1000.avif" alt="Ally and Dennis" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Anthony Spick_300.avif" alt="Anthony Spick" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Coast Capital_200.avif" alt="Coast Capital" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Country_Grocer_500.avif" alt="Country Grocer" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Focal Engineering_100.avif" alt="Focal Engineering" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Frontera_250.avif" alt="Frontera" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Island Chef_500.avif" alt="Island Chef" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Knappett_500.avif" alt="Knappett" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Mac_600.avif" alt="Mac" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Redbrick_1000.avif" alt="Redbrick" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Stasuk_500.avif" alt="Stasuk" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Stevenson_300.avif" alt="Stevenson" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/UVIC_2500.svg" alt="UVIC" />
                    </div>
                    <div className="sponsorContainer">
                        <img src="/Viatec_1000.avif" alt="Viatec" />
                    </div>
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
                            <div className="pricingComponentSubheader">FRIENDS</div>
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
                                    <p>Your company acknowledged on the sponsors page of our team website!</p>
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
                            <div className="pricingComponentSubheader">GENEROUS</div>
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
                                    <p>We will include contact information, a logo and an active link to your site on our sponsors page!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Certificate of appreciation that can be displayed at your business!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Photo with the Reybots team!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">SILVER</div>
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
                                    <p>We will include contact information, a logo and an active link to your site on our sponsors page!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Appreciation plaque that can be displayed at your business!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Photo with the Reybots team!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent pricingComponentGold">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">GOLD</div>
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
                                    <p>Place on the homepage for your company logo and active link!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Inclusion in any social media posts as a logo!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Appreciation plaque that can be displayed at your business!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Team robot demonstration at place of business</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Photo with the Reybots team!</p>
                                </div>
                            </div>
                            <Link href="/get-started">
                                <button className="pricingComponentButton">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="pricingComponent pricingComponentPlatinum">
                        <div className="pricingComponentRelative">
                            <div className="pricingComponentSubheader">PLATINUM</div>
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
                                    <p>Extra large logo of business on our robot and on our t-shirt design!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Seperate primary sponsor banner at competition and outreach!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Special mention and shoutout as a major sponsor in any of our Media posts and Videos!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Appreciation plaque that can be displayed at your business!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Place on the homepage for your company logo and active link!</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Team robot demonstration at place of business</p>
                                </div>
                                <div className="pricingComponentBenefit">
                                    <div>
                                        <img src="/benefitCheckmark.avif" alt="" />
                                    </div>
                                    <p>Photo with the Reybots team!</p>
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
