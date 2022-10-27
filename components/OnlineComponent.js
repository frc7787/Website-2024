import React from "react"
import Link from "next/link"

export default function OnlineComponent() {
    return (
        <main>
            <section className="onlineComponent">
                <div className="onlinePaymentHeaders">
                    <h1>Online</h1>
                    <p>Fundraise us using the online school cash app and send money electronically!</p>
                </div>
                <div className="onlinePaymentInformation">
                    <p>Payments may be by cheque payable to: Reynolds Secondary School or electronically through the Reynolds Secondary website. Tax receipts will be mailed to the donor by the school district!<br /><br /></p>
                    
                    <strong>Please specific a &quot;Fund Destination&quot; of &quot;Reynolds Secondary&quot; and a &quot;Message to the School Board&quot; of &quot;Robotics Club&quot;.</strong><br /><br />
                    <strong>Email business information like name, amount donated, address, phone, email and website to </strong>
                </div>
                <Link href="https://sd61.schoolcashonline.com/Fee/Details/2967/140/false/true" target="_blank" rel="noreferrer">
                    <button className="onlinePaymentMethod">Pay Electronically</button>
                </Link>
            </section>
        </main>
    )
}