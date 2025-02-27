// Das lit bro
import React from "react"
import Link from "next/link"

export default function GetStartedComponent() {
    return (
        <main>
            <section className="startedFormDetails">
                <div className="getStartedHeaders">
                    <h1>Sponsor Us</h1>
                    {/* <p>Help us fund our new robots for 2023/2024 and also receive fantastic benefits in the process!</p> */}
                </div>
                <p className="getStartedInformation">
			Last year, we proudly represented our community at the FIRST Tech Challenge World Championships in Houston, Texas, placing 22nd in our division. This marked our second consecutive year at Worlds, and we are determined to continue building on this momentum.
		<br/>
		<br/>
			This season, we’ve already achieved incredible milestones, including winning the highest award in FIRST and being part of the winning alliance at qualifiers. We believe in our team’s potential to succeed again and qualify for the World Championships. The cost to send both of our teams and enough mentors and supervisors to Houston for a week is approximately $40,000 CAD.
		<br/>
		<br/>
			Even if we don’t make it to Worlds this year, your support will have a meaningful impact. It helps us continue to promote STEM education throughout our community. Our team runs a robotics club and FLL team at a local middle school, and we are working to establish another middle school robotics club. We also regularly organize demonstrations to inspire students and engage with local organizations.
                </p>
                <div className="getStartedButtons">
                    <a href="https://docs.google.com/document/d/1zeOKqpUPmC5Ezn7Eeiv_QGQLDBkFl3XG9JWsn4spxh8/edit?usp=sharing" target="_blank" rel="noreferrer">
                        <button>Donation/Sponsorship Instructions</button>
                    </a>
                    {/* <a href="https://drive.google.com/file/d/1nVa96LfjXIpPU3YXZehfFc4mP3UioZBE/view" target="_blank" rel="noreferrer">
                        <button>Sponsorships and Pledges</button>
                    </a> */}
                </div>
                <div className="getStartedAllInformation">
                    <img src="sponsorUs.avif" className="getStartedImage" />
                    {/* <p className="getStartedInformation">
                        The Reynolds Reybots are a school-based team that designs and builds competition robots. The team meets year-round and operates like a small business, with different sub-teams that handle everything from marketing and fundraising to programming, mechanics, and electrical work. We operate on an apprenticeship model, where more experienced students lead and mentor more junior students to gain the skills and knowledge required. The collaborative effort of running a team and building and competing with robots provides a real world learning environment that is fun, exciting, and rewarding. As FIRST® founder Dean Kamen said, &quot;We don’t use kids to build robots. We use robots to build kids.&quot;<br /><br />

                        FIRST® (For Inspiration and Recognition of Science and Technology) was founded in 1989 to inspire young people’s interest in science and technology. The not-for-profit organization designs accessible, innovative programs that motivate young people to pursue education and career opportunities in science, technology, engineering, and math, while building self-confidence, knowledge, and life skills. The Reybots participate in the two highest levels of competition, FIRST® Robotics Competition (FRC) and FIRST® Tech Challenge (FTC). Please see our website, Reybots.ca, for more information on our specific team.<br /><br />

                        Universities and employers recognize the crucible that FIRST® participants have been fired through, value their experience and skills, and actively recruit such students. Participation in robotics provides students with exposure to real world applications of math, science, and technology that are often missing from their academic classes, and motivates students for participation in post-secondary STEM programs. Graduated students from the Reynolds Robotics Team have gone on to attend programs in Computer Science, Engineering, Science, and Trades.<br /><br />

                        We are looking for sponsors who will cheer us on year after year and ultimately become part of the Reynolds Reybots family. How the funds will be used can be seen in the chart below. Because this is an extracurricular activity, this would not be possible without grants and generous donations from generous people and companies like you/yours. Sponsors for Reybots make a positive contribution to the education, well-being, and eventual careers of students who get to participate. Upwards of 30 children participate in some role every year during the competition season and we hope to grow this.<br /><br />

                        Our sponsorship goal for 2022-2023 is to raise $15,000. Sponsor money received will go directly towards the expenses required to run the team each year, including competition registration, parts, tools, and travel. <br /><br />
                    </p> */}
                    {/* 
                    <p className="getStartedInformationHeader">Our Budget</p>
                    <div className="getStartedBudget">
                        <div className="getStartedBudgetElement">
                            <div className="getStartedBudgetHeader">
                                FIRST Robotics Competition ($6,000USD)
                            </div>
                            <div className="getStartedBudgetCost">
                                8,500
                            </div>
                        </div>
                        <div className="getStartedBudgetElement">
                            <div className="getStartedBudgetHeader">
                                FIRST Tech Challenge (2 teams at $825)
                            </div>
                            <div className="getStartedBudgetCost">
                                1,650
                            </div>
                        </div>
                        <div className="getStartedBudgetElement">
                            <div className="getStartedBudgetHeader">
                                Travel to FTC Provincials in Vancouver, ferry costs
                            </div>
                            <div className="getStartedBudgetCost">
                                400
                            </div>
                        </div>
                        <div className="getStartedBudgetElement">
                            <div className="getStartedBudgetHeader">
                                Additional Robot Purchases - parts and materials
                            </div>
                            <div className="getStartedBudgetCost">
                                2,000
                            </div>
                        </div>
                        <div className="getStartedBudgetElement">
                            <div className="getStartedBudgetHeader">
                                Practice field building materials and FTC game elements
                            </div>
                            <div className="getStartedBudgetCost">
                                900
                            </div>
                        </div>
                        <div className="getStartedBudgetElement">
                            <div className="getStartedBudgetHeader">
                                Team Apparel (t-shirts)
                            </div>
                            <div className="getStartedBudgetCost">
                                500
                            </div>
                        </div>
                        <div className="getStartedBudgetElement">
                            <div className="getStartedBudgetHeader">
                                Team Building Activities
                            </div>
                            <div className="getStartedBudgetCost">
                                600
                            </div>
                        </div>
                        <div className="getStartedBudgetElement">
                            <div className="getStartedBudgetHeader">
                                Unanticipated expenses
                            </div>
                            <div className="getStartedBudgetCost">
                                500
                            </div>
                        </div>
                        <div className="getStartedBudgetElement">
                            <div className="getStartedBudgetHeader">
                                Total Estimated Expenses
                            </div>
                            <div className="getStartedBudgetCost">
                                $15,250
                            </div>
                        </div>
                    </div> */}
                    <p className="getStartedInformationHeader getStartedInformationHeaderBenefits">Financial</p>
                    <div className="getStartedInformation getStartedInformationBenefits">
                        <ul>
                            <li>Of course, Financial is one way that people and businesses can help.</li>
                            <li>In all previous years, we have been heavily reliant on parents  and grants to help fund the annual costs.</li>
                            <li>As we become a more senior team, some of the grants offered by FIRST are less available, and our expenses can jump significantly when we qualify for World&apos;s down in Houston.</li>
                            <li>You can help us in several ways:</li>
                            <ul>
                                <li>Be a donor: this is eligible for tax receipts if done through the school district. Details can be found in the button down below and you will be included with other individuals and companies in the donor section of our webpage if you wish.</li>
                                <li>Be a Sponsor: for Canada Revenue Agency Purposes this is separated from regular donors as it comes with a form of expected benefit. Sponsors are not eligible for a tax receipt through the school district.</li>
                                <li>Pledge funds: One of our biggest financial difficulties is not knowing if we will qualify for world championships, and then having to frantically obtain funds. If you or your company are willing to pledge funds conditinally if we qualify, either as a donor or sponsor, please reach out to us directly.</li>
                            </ul>
                        </ul>
                        <p className="getStartedNotification">Would you like to know more about sponsoring the Reynolds Reybots? Do you have any questions or comments? Please contact us at reynoldsreybots@gmail.com</p>
                    </div>
                </div>
                
            </section>
        </main>
    )
}
