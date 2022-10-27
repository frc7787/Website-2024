import Nav from "../components/Nav"
import HomeComponent from "../components/HomeComponent"
import Footer from "../components/Footer"
import Head from "next/head"

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      </Head>
      <Nav />
      <HomeComponent />
      <Footer />
    </main>
  )
}
