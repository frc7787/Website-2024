import React from "react"
import CompetitionCard from "./subcomponents/CompetitionCard"

export default function Ftc(props) {
    return (
        <main>
            <section className="competitionMainAlign">
                <div className="competitions">
                    <h1>FTC Competitions</h1>
                    <div className="competitionCards">
                        <CompetitionCard 
                            header="FTC British Columbia Championships 2023"
                            description="Recently one of our two teams had an exciting win at the FIRST Tech Challenge Provincials in Surrey, BC. As a result, we have earned the incredible opportunity to go to the World Championships in Houston, Texas, this April."
                            link="https://ftc-events.firstinspires.org/2022/CABCCMP"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="FTC British Columbia Championships 2022"
                            description="After Qualification Rounds, 16353 finished 3 rd with a 5-0-0 record and 18840 finished 7 th . 16353 was the captain of Alliance Seed 3 and chose 18840 (The Reynolds Super Alliance) and 18589 for their alliance. They won their semifinal 2-0 but lost 0-2 in the Finals. 16353 were the winners of the Innovate Award."
                            link="https://ftc-events.firstinspires.org/2021/CABCCMP/playoffs"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="FTC British Columbia Championships 2021"
                            description="In the Playoffs, 16353 finished 3 rd and 18840 finished 7 th . This was a Remote Play competition, and therefore there were no Semifinals or Finals. 16353 were the winners of the Design Award."
                            link="https://ftc-events.firstinspires.org/2020/CABCVCCT1/rankings"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="FTC British Columbia Championships 2020"
                            description="After Qualification Rounds, 16353 finished 1 st with a 5-0-0 record. 16353 was the captain of Alliance Seed 1 and chose 16448 and 16195 for their alliance. They lost their semifinal 1-2, losing the last match in the last five seconds as their tower came crashing down. 16353 were the winners of the Motivate Award."
                            link="https://ftc-events.firstinspires.org/2019/BC%20Champs1/playoffs"
                            slug={props.slug}
                        />
                    </div>
                </div>
            </section>
        </main> 
    )
}