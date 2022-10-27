import React from "react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer id="contact">
            <p className="footerHeader">Interested in Funding Our Team?</p>
            <Link href="/get-started">
               <button className="footerPricingButton">Sponsor Us!</button> 
            </Link>
            <div className="footerElements">
                <div className="footerElement1">
                    <p className="footerContactSubheader">Contact Us</p>
                    <Link href="mailto:kkarim@sd61.bc.ca" target="_blank" rel="noreferrer">
                        <p className="footerContactEmail">reybots7787@gmail.com</p>
                    </Link>
                </div>
                <div className="footerElement2">
                    <Link href="https://www.instagram.com/reynoldsreybots/" target="_blank" rel="noreferrer">
                        <button className="socialButton">
                            <i class="fa-brands fa-instagram"></i>
                        </button>
                    </Link>
                    <button className="socialButton">
                        <i class="fa-brands fa-youtube"></i>
                    </button>
                </div>
            </div>
        </footer>
    )
}