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
                            description="Description about FRC Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id libero velit. Etiam iaculis sem vel eleifend viverra. Mauris fringilla felis mauris, a aliquam ipsum tristique viverra. Morbi tincidunt neque a suscipit blandit. Integer egestas scelerisque lobortis. Duis feugiat orci ex, id tempus justo rhoncus et."
                            link="frc"
                            slug={props.slug}
                        />
                        <CompetitionCard 
                            header="FTC Competitions"
                            description="Description about FRC Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id libero velit. Etiam iaculis sem vel eleifend viverra. Mauris fringilla felis mauris, a aliquam ipsum tristique viverra. Morbi tincidunt neque a suscipit blandit. Integer egestas scelerisque lobortis. Duis feugiat orci ex, id tempus justo rhoncus et."
                            link="ftc"
                            slug={props.slug}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}