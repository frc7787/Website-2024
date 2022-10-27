import React from "react"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import Head from "next/head"
import ChequeComponent from "../../components/ChequeComponent"

export default function Cheque() {
    return (
        <main>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            </Head>
            <Nav />
            <ChequeComponent />
            <Footer />
        </main>
    )
}