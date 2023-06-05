// Das Incredible
import React from "react"
import CompetitionCard from "./subcomponents/CompetitionCard"

export default function CompetitionMain(props) {
    return (
        <main>
            <section className="competitionMainAlign">
                <div className="competitions">
                    <h1>Competitions</h1>
                    <div className="competitionCards">
                        <CompetitionCard 
                            header="FRC Competitions"
                            description="FIRST Robotics Competition is an international high school robotics competition. Each year, teams of high school students, coaches, and mentors work during a six week period to build robots capable of competing in that year's game that weigh up to 125 pounds."
                            link="frc"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="FTC Competitions"
                            description="FIRST Tech Challenge, formerly known as FIRST Vex Challenge, is a robotics competition for students in grades 7–12 to compete head to head, by designing, building, and programming a robot to compete in an alliance format against other teams."
                            link="ftc"
                            slug={props.slug}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}