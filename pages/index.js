import Nav from "../components/Nav"
import HomeComponent from "../components/HomeComponent"
import Footer from "../components/Footer"
import Head from "next/head"

export default function Home() {
  // WORKING ON SLUG REMEMEBER JKFWHNFJKNWGIUJBK WGKJWBGK >WKGNWG
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta name="google-site-verification" content="CDgShZaGIACnlPIJVgaMKk-YREWa20WFPqhPw9S8jLM" />
      </Head>
      <Nav />
      <HomeComponent />
      <Footer />
    </main>
  )
}
