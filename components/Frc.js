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
                            description="In February, at the save-on memorial center we competed against teams in the FIRST Canadian Pacific Regional Robotics Competition in Victoria, BC."
                            link="https://www.thebluealliance.com/event/2023bcvi"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="Canadian Pacific Regionals 2022"
                            description="The Reynolds Reybots were ranked 4 th after Qualifications with a record of 10-6-0 and were Captains of the 4 th Alliance. The Reybots came through the Quarterfinals with a record of 2-0 and lost in the Semifinals with a record of 0-2. The robot was named Belty McBeltFace. Team 7787 won the Judges Award."
                            link="https://www.thebluealliance.com/team/7787/2022"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="Canadian Pacific Regionals 2021"
                            description="This event was Remote Play. The Reynolds Reybots placed 15 th in the “Aluminum Group”."
                            link="https://www.thebluealliance.com/event/2021irhal#rankings"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="Canadian Pacific Regionals 2020"
                            description="The Reynolds Reybots were ranked 18 th after Qualifications with a record of 7-7-0. They were chosen by the Captains of the 4 th Alliance, Team 8312 Royals Robotics, together with Team 7190 Vancouver Rainstorm. The alliance lost in the Quarterfinals, 1-2-0, when sadly the Rainstorm had a mechanical issue before the last match, and the alliance played with only two teams."
                            link="https://www.thebluealliance.com/team/7787/2020"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="Canadian Pacific Regionals 2019"
                            description="In their inaugural season, the Reynolds Reybots competed at the Save-On Memorial Center. The Reybots were ranked 31 st after Qualifications with a record of 4-7-0. 7787 won the Rookie All-Star award and an invitation to the FIRST World Robotics Championship in Houston, Texas."
                            link="https://www.thebluealliance.com/team/7787/2019"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="FIRST World Championship 2019"
                            description="In the Hopper Division, the Reynolds Reybots were 54 th with a record of 3-7-0."
                            link="https://www.thebluealliance.com/team/7787/2019"
                            slug={props.slug}
                        />
                    </div>
                </div>
            </section>
        </main> 
    )
}