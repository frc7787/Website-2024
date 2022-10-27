import React from "react"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import Head from "next/head"
import OnlineComponent from "../../components/OnlineComponent"

export default function Online() {
    return (
        <main>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            </Head>
            <Nav />
            <OnlineComponent />
            <Footer />
        </main>
    )
}