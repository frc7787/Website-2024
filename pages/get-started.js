import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import GetStartedComponent from "../components/GetStartedComponent"
import Head from "next/head"

export default function GetStarted() {
    return (
        <main>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            </Head>
            <Nav />
            <GetStartedComponent />
            <Footer />
        </main>
    )
}