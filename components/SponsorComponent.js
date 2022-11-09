import React from "react"
import Link from "next/link"

export default function SponsorComponent() {
    return (
        <main>
            <section className="sponsorsHome">
                <h1>Everyone Helping to Fund our Robot</h1>
                <p className="sponsorsHomeDescription">We thank everyone who has helped sponsor our different robots across the years. All our sponsors help advance the education of our students.</p>
                <p className="sponsorsButtonHeader">Want to Sponsor Us?</p>
                <button>Contact Us</button>
                <img src="sponsorsImage.png" alt="sponsorsImage" />
            </section>
            {/* <section className="platinumSponsors sponsorTier">
                <h2>Platinum</h2>
                <p className="sponsorTierDescription">Anyone who has donated $5000+</p>
                <div className="sponsorComponentAlign">
                    <div className="sponsorComponent">
                        <div className="sponsorComponentInformation">
                            <p className="sponsorNumber">1</p>
                            <p className="sponsorComponentHeader">Prime Engineering</p>
                            <p className="sponsorComponentDescription">Prime Engineering is a full service electrical engineering firm specializing in power system design and commissioning. They offer their clients design-build services for complete electrical turnkey solutions.</p>
                            <button>Check it Out</button>
                        </div>
                        <div className="sponsorComponentLogo">
                            <img src="bernhardt.png" alt="Bernhardt Logo" />
                        </div>
                    </div>
                    <div className="sponsorComponent sponsorComponent2">
                        <div className="sponsorComponentInformation">
                            <p className="sponsorNumber">2</p>
                            <p className="sponsorComponentHeader">Prime Engineering</p>
                            <p className="sponsorComponentDescription">Prime Engineering is a full service electrical engineering firm specializing in power system design and commissioning. They offer their clients design-build services for complete electrical turnkey solutions.</p>
                            <button>Check it Out</button>
                        </div>
                        <div className="sponsorComponentLogo">
                            <img src="bernhardt.png" alt="Bernhardt Logo" />
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="goldSponsors sponsorTier">
                <h2>Gold</h2>
                <p className="sponsorTierDescription">Anyone who has donated $1000+</p>
                <div className="sponsorComponentAlign">
                    <div className="sponsorComponent goldSponsorComponent">
                        <div className="sponsorComponentInformation">
                            <p className="sponsorComponentHeader">64K Software</p>
                            <p className="sponsorComponentDescription">64K Software&apos;s expertise is primarily in systems-level software and back-end services in support of SaaS platforms. However, from technical architecture and startup advisory down to opening up the command line, they&apos;re able to work with you to coax out what you really need and how to do it. </p>
                            <Link href="https://64k.software/" target="_blank" rel="noreferrer" className="sponsorButtonLink">
                                <button>Check it Out</button>
                            </Link>
                        </div>
                        <div className="sponsorComponentLogo">
                            <img src="64k Logo.svg" alt="64K Software Logo" />
                        </div>
                    </div>
                    <div className="sponsorComponent sponsorComponent2">
                        <div className="sponsorComponentInformation">
                            <p className="sponsorComponentHeader sponsorComponentHeaderGold">Bramley House Enterprises</p>
                            <p className="sponsorComponentDescription">Bramley House Enterprises is a holding company. There is currently not enough information on them!</p>
                            <button>Check it Out</button>
                        </div>
                        <div className="sponsorComponentLogo">
                            <img src="Bramley House Enterprises.png" alt="Bramley House Enterprises Logo" />
                        </div>
                    </div>
                    <div className="sponsorComponent goldSponsorComponent">
                        <div className="sponsorComponentInformation">
                            <p className="sponsorComponentHeader">Howell Data Systems</p>
                            <p className="sponsorComponentDescription">Whatever business challenge you need to address, HDS offers all of the necessary components for your business to excel in today’s rapidly-evolving retail environment.</p>
                            <Link href="https://www.howelldatasystems.com/" target="_blank" rel="noreferrer" className="sponsorButtonLink">
                                <button>Check it Out</button>
                            </Link>
                        </div>
                        <div className="sponsorComponentLogo">
                            <img src="Howell Data Systems Logo.png" alt="Howell Data Systems Logo" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="SilverSponsors sponsorTier">
                <h2>Silver</h2>
                <p className="sponsorTierDescription">Anyone who has donated $500+</p>
                <div className="silverComponentAlign">
                    <div className="silverComponentSponsor">
                        <img src="bernhardt.png" alt="bernhardt sponsor" />
                        <p>bernhardtcontracting.com</p>
                        <p>250 857-2432</p>
                    </div>
                </div>
            </section>
            {/* <section className="SilverSponsors sponsorTier">
                <h2>Generous</h2>
                <p className="sponsorTierDescription">Anyone who has donated $200 - $500</p>
                <div className="silverComponentAlign">
                    <div className="silverComponentSponsor">
                        <img src="bernhardt.png" alt="bernhardt sponsor" />
                    </div>
                    <div className="silverComponentSponsor">
                        <img src="bernhardt.png" alt="bernhardt sponsor" />
                    </div>
                    <div className="silverComponentSponsor">
                        <img src="bernhardt.png" alt="bernhardt sponsor" />
                    </div>
                </div>
            </section>
            <section className="generousSponsors sponsorTier">
                <h2>Friends</h2>
                <p className="sponsorTierDescription">Anyone who has donated $50 - $200</p>
                <div className="silverComponentAlign">
                    <div className="generousComponentSponsor">
                        <img src="bernhardt.png" alt="bernhardt sponsor" />
                    </div>
                    <div className="generousComponentSponsor">
                        <img src="bernhardt.png" alt="bernhardt sponsor" />
                    </div>
                    <div className="generousComponentSponsor">
                        <img src="bernhardt.png" alt="bernhardt sponsor" />
                    </div>
                    <div className="generousComponentSponsor">
                        <img src="bernhardt.png" alt="bernhardt sponsor" />
                    </div>
                </div>
            </section> */}
        </main>
    )
}