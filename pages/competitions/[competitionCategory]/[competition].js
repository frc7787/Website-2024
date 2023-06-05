import React from "react"
import Nav from "../../../components/Nav"
import Head from "next/head"
import { useRouter } from 'next/router'

export default function Competition() {
    const router = useRouter()
    const slug = router.query.competition

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            </Head>
            <Nav />
            <SpecificCompetition 
                slug={slug}
            />
        </>
    )
}