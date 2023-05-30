import React from "react"
import Nav from "../components/Nav"
import CompetitionMain from "../components/CompetitionMain"
import Head from "next/head"
import { useRouter } from 'next/router'
import Footer from "../components/Footer"

export default function Competitions() {
    const router = useRouter()
    const slug = router.query.slug

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            </Head>
            <Nav />
            <CompetitionMain 
                slug={slug}
            />
            <Footer />
        </>
    )
}