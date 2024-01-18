// Goofey Ahh Dangler
import React from "react"
import Link from "next/link"
import Sponsors from "../data/sponsors.json"

export function SponsorPlatinum(props) {
    const reversedSponsorElement = props.placement % 2 ? true : false

    return (
        <div className={`sponsorComponent ${!reversedSponsorElement ? "sponsorComponent2" : ""}`}>
            <div className="sponsorComponentInformation">
                <p className="sponsorNumber">{props.placement}</p>
                <p className="sponsorComponentHeader">{props.name}</p>
                <p className="sponsorComponentDescription">{props.description}</p>
                <Link href={props.websiteLink}>
                    <button>Check it Out</button>
                </Link>
            </div>
            <div className="sponsorComponentLogo">
                <img src={props.logo} />
            </div>
        </div>
    )
}

export function SponsorGold(props) {
    const reversedSponsorElement = props.placement % 2 ? true : false

    console.log(props.placement)

    return (
        <div className={`sponsorComponent goldSponsorComponent ${!reversedSponsorElement ? "sponsorComponent2" : ""}`}>
            <div className="sponsorComponentInformation">
                <p className="sponsorComponentHeader">{props.name}</p>
                <p className="sponsorComponentDescription">{props.description}</p>
                <Link href={props.websiteLink} target="_blank" rel="noreferrer" className="sponsorButtonLink">
                    <button>Check it Out</button>
                </Link>
            </div>
            <div className="sponsorComponentLogo">
                <img src={props.logo} />
            </div>
        </div>
    )
}

export function SponsorSilver(props) {
    return (
        <div className="silverComponentSponsor">
            <img src={props.logo} />
            <p>{props.websiteLink}</p>
        </div>
    )
}

export default function SponsorComponent() {
    const [platinumSponsors, setPlatinumSponsors] = React.useState([])
    const [goldSponsors, setGoldSponsors] = React.useState([])
    const [silverSponsors, setSilverSponsors] = React.useState([])

    React.useEffect(() => {
        Sponsors.map((sponsor, index) => {
            // Split the sponsors into different pricing categories
            const sponsorAmount = sponsor.amountDonated

            if (sponsorAmount >= 5000) {
                // Platinum
                const platinumSponsorElement = (
                    <SponsorPlatinum 
                        placement={platinumSponsors.length + 1}
                        name={sponsor.name}
                        description={sponsor.description}
                        websiteLink={sponsor.websiteLink ? sponsor.websiteLink : ""}
                        logo={sponsor.logo}
                        key={index}
                    />
                )

                setPlatinumSponsors(currentElements => [...currentElements, platinumSponsorElement])
            } else if (sponsorAmount < 5000 && sponsorAmount >= 1000) {
                // Gold
                const goldSponsorElement = (
                    <SponsorGold
                        placement={goldSponsors.length + 1}
                        name={sponsor.name}
                        description={sponsor.description}
                        websiteLink={sponsor.websiteLink ? sponsor.websiteLink : ""}
                        logo={sponsor.logo}
                        key={index}
                    />
                )

                setGoldSponsors(currentElements => [...currentElements, goldSponsorElement])
            } else {
                // Silver
                const silverSponsorElement = (
                    <SponsorSilver
                        websiteLink={sponsor.websiteLink ? sponsor.websiteLink : ""}
                        logo={sponsor.logo}
                        key={index}
                    />
                )

                setSilverSponsors(currentElements => [...currentElements, silverSponsorElement])
            }
        })
    }, [])

    return (
        <main>
            <section className="sponsorsHome">
                <h1>Everyone Helping to Fund our Robot</h1>
                <p className="sponsorsHomeDescription">We thank everyone who has helped sponsor our different robots across the years. All our sponsors help advance the education of our students.</p>
                <p className="sponsorsButtonHeader">Want to Sponsor Us?</p>
                <button>Contact Us</button>
                <img src="sponsorsImage.avif" alt="sponsorsImage" />
            </section>
            <section className="platinumSponsors sponsorTier">
                <h2>Reybot</h2>
                <p className="sponsorTierDescription">Anyone who has donated $5000+</p>
                <div className="sponsorComponentAlign">
                    {platinumSponsors}
                </div>
            </section>
            <section className="goldSponsors sponsorTier">
                <h2>Engineer</h2>
                <p className="sponsorTierDescription">Anyone who has donated $1000+</p>
                <div className="sponsorComponentAlign">
                    {goldSponsors}
                </div>
            </section>
            <section className="SilverSponsors sponsorTier">
                <h2>Mechanic</h2>
                <p className="sponsorTierDescription">Anyone who has donated $500+</p>
                <div className="silverComponentAlign">
                    {silverSponsors}
                </div>
            </section>
            <section className="SilverSponsors sponsorTier">
                <h2>Generous</h2>
                <p className="sponsorTierDescription">Anyone who has donated $200 - $500</p>
                <div className="silverComponentAlign">
                    {/* <div className="silverComponentSponsor">
                        <img src="bernhardt.avif" alt="bernhardt sponsor" />
                    </div> */}
                    <div className="silverComponentSponsor">
                        <img src="bernhardt.avif" alt="bernhardt sponsor" />
                    </div>
                    {/* <div className="silverComponentSponsor">
                        <img src="bernhardt.avif" alt="bernhardt sponsor" />
                    </div> */}
                </div>
            </section>
            {/* <section className="generousSponsors sponsorTier">
                <h2>Friends</h2>
                <p className="sponsorTierDescription">Anyone who has donated $50 - $200</p>
                <div className="silverComponentAlign">
                    <div className="generousComponentSponsor">
                        <img src="bernhardt.avif" alt="bernhardt sponsor" />
                    </div>
                    <div className="generousComponentSponsor">
                        <img src="bernhardt.avif" alt="bernhardt sponsor" />
                    </div>
                    <div className="generousComponentSponsor">
                        <img src="bernhardt.avif" alt="bernhardt sponsor" />
                    </div>
                    <div className="generousComponentSponsor">
                        <img src="bernhardt.avif" alt="bernhardt sponsor" />
                    </div>
                </div>
            </section> */}
        </main>
    )
}