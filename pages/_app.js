import '../styles/globals.scss'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  console.log("%c Ayo... What's this? (Easter Egg): https://reybots.ca/contact", "background: #222; color: #bada55")
  console.log("%c PS: Don't tell the mentors :)", "background: #FF0000")

  return (
    <>
      <Head>
        <title>Reybots</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="apple-touch-icon" href="logo.svg" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="description" content="Reybots is not just about building robots, it is about learning, teaching, and inspiring, STEM, and FIRST. All while having fun." />
        <meta name="keyword" content="18840, 7787, 16353, Reybots, Robotics, FRC, FTC, STEM, FIRST, Reynolds, technology, robots, FIRST Robotics, Reynolds Reybots, Java, Programming, Python, Highschool, High School, Secondary, Secondary School" />
        <meta name="author" content="Kai Pereira, Tyler James Stocks, Reynolds Reybots" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="logo.svg" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XNXT5R3YWN`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XNXT5R3YWN', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
