// Das FRC
import React from "react"
import CompetitionCard from "./subcomponents/CompetitionCard"

export default function Frc(props) {
    return (
        <main>
            <section className="competitionMainAlign">
                <div className="competitions">
                    <h1>FRC Competitions</h1>
                    <div className="competitionCards">
                        <CompetitionCard 
                            header="Canadian Pacific Regionals 2023"
                            description="The Reybots were ranked 23rd after Qualifications, with a 5-6-1 record. The robot garnered much attention for its unusual construction, with a structure and mechanism mostly made of wood and recycled industrial parts. The Reybots won the Judges' Award for the environmentally friendly and distinctive construction."
                            link="https://www.thebluealliance.com/event/2023bcvi"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="Canadian Pacific Regionals 2022"
                            description="The Reynolds Reybots were ranked 4th after Qualifications with a record of 10-6-0 and were Captains of the 4th Alliance. The Reybots came through the Quarterfinals with a record of 2-0 and lost in the Semifinals with a record of 0-2. The robot was named Belty McBeltFace. Team 7787 won the Judges' Award, for all-around awesomeness, a can-do attitude, and comprehensive knowledge of the team members."
                            link="https://www.thebluealliance.com/team/7787/2022"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="Canadian Pacific Regionals 2021"
                            description="This event was Remote Play. The team ran several different challenges in the school gym. The Reynolds Reybots placed 15th in the “Aluminum Group”."
                            link="https://www.thebluealliance.com/event/2021irhal"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="Canadian Pacific Regionals 2020"
                            description="The Reynolds Reybots were ranked 18th after Qualifications with a record of 7-7-0. They were chosen by the Captains of the 4th Alliance, Team 8312 Royals Robotics, together with Team 7190 Vancouver Rainstorm. The alliance lost in the Quarterfinals, 1-2-0, when sadly the Rainstorm had a mechanical issue before the last match, and the alliance played with only two teams. Team Member Andrew Du won the FIRST Dean's List Finalist Award."
                            link="https://www.thebluealliance.com/team/7787/2020"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="FIRST World Championship 2019"
                            description="In the Hopper Division, the Reynolds Reybots were 54th with a record of 3-7-0."
                            link="https://www.thebluealliance.com/team/7787/2019"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="Canadian Pacific Regionals 2019"
                            description="In their inaugural season, the Reynolds Reybots competed at the Save-On Memorial Center. The Reybots were ranked 31 st after Qualifications with a record of 4-7-0. 7787 won the Rookie All-Star award and an invitation to the FIRST World Robotics Championship in Houston, Texas."
                            link="https://www.thebluealliance.com/team/7787/2019#2019hop"
                            slug={props.slug}
                        />
                    </div>
                </div>
            </section>
        </main> 
    )
}