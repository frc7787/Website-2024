import React from "react"
import Link from "next/link"

export default function ChequeComponent() {
    return (
        <main>
            <section className="chequeComponent">
                <div className="chequePaymentHeaders">
                    <h1>Cheque</h1>
                    <p>Drop off or mail a check to our the Reynolds Reybots using the instructions below!</p>
                </div>
                <p className="chequePaymentInformation">
                    If you would like to fund the Reynolds Reybots via cheque please mail or physically bring a cheque to the Reynolds office with the information in the form below! Reynolds is located at 3963 Borden St. Victoria, BC - V8P 3H9. You can also phone Reynolds at (250) 479-1696!
                </p>
                <Link href="https://docs.google.com/document/d/1WULboHyo5PpB0rkZKRlIsME9tFkRBIS3gqIaAloTwrA/edit?usp=sharing" target="_blank" rel="noreferrer">
                    <button className="chequeFormButton">Form</button>
                </Link> 
                {/* <div className="chequeForm">

                </div> */}
            </section>
        </main>
    )
}