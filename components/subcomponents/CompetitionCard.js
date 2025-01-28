// Das nice
import React from "react"
import Link from "next/link"

export default function CompetitionCard(props) {
    console.log(props.slug)
    
    return (
        <>
        <div className="competitionCard">
            <p className="competitionCardHeader">{props.header}</p>
            <p className="competitionCardDescription">{props.description}</p>
            { (props.link == "frc" || props.link == "ftc") ?
            <Link href={`/competitions/${props.link}`}>
                <button>Check Them Out</button>
            </Link>
            :
            <a href={props.link} target="_blank" rel="noreferrer">
                <button>Check Them Out</button>
            </a>
            }
        </div>
        </>
    )
}
