import React from "react"
import Nav from "../../components/Nav"
import Frc from "../../components/Frc"
import Ftc from "../../components/Ftc"
import { useRouter } from 'next/router'
import Head from "next/head"
import Footer from "../../components/Footer"


export default function competitionCategory() {
    const router = useRouter()
    const slug = router.query.competitionCategory
    
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            </Head>
            <Nav />
            { slug == "frc" ?
                <Frc 
                    slug={slug}
                />
                :
                <Ftc 
                    slug={slug}
                />
            }
            <Footer />
        </>
    )
}