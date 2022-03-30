import Main from '../components/Main/Main'
import Head from 'next/head'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Flight380</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <script src='js/custom-swiper2.js'></script>
      </Head>
      <Main />
    </div>
  )
}
