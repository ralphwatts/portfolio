import Head from 'next/head'
import Image from 'next/image'
import pricesShowcase from '../public/images/prices.webp'
import { Inter, Noto, Baskervville } from '@next/font/google'
import { BsInfoCircle } from "@react-icons/all-files/bs/BsInfoCircle";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";
import { VscActivateBreakpoints } from "@react-icons/all-files/vsc/VscActivateBreakpoints";
import { VscArrowRight } from "@react-icons/all-files/vsc/VscArrowRight";
import { GrTools } from "@react-icons/all-files/gr/GrTools";
import { Popover, Button } from "@nextui-org/react";
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ralph Watts | Web Developer</title>
        <meta name="description" content="Ralph Watts' portfolio. Built with NextJS and NextUI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <section className={styles.hero}>
          <div>
            <h1>Portfolio</h1>
            <h2>Ralph Watts, Web Developer</h2>
            <p>Full-stack Web Developer specializing in modern JavaScript frameworks, scalable WordPress builds, and marketing technology integrations. Experienced delivering pixel-perfect, high-performance web solutions for enterprise clients.</p>
          </div>
          <div className={styles.resumeTopLink}>
            {/*<a
              href="https://www.linkedin.com/in/ralphwatts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" auto rounded flat color="secondary">Linked<FaLinkedin /></Button>
            </a>*/}
            <a
              href="/pdfs/Ralph Watts' Resume Extended.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" auto rounded flat color="secondary">Resume&nbsp;<FaDownload /></Button>
            </a>
          </div>
        </section>
        <section className={styles.skills}>
          <h2>Skills</h2>
          <div>
            <ul>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                Web Development
                <Popover>
                  <Popover.Trigger>
                    <div>
                      <BsInfoCircle />
                    </div>
                  </Popover.Trigger>
                  <Popover.Content css={{
                    background: '#111',
                    padding: '4px 8px',
                    textAlign: 'center',
                    placement: 'bottom-left',
                    color: '#fff'
                  }}>
                    <p>HTML, CSS, Javascript, React, PHP and WordPress expert.<br></br>8+ years of professional web development experience across many frameworks and CMS'</p>
                  </Popover.Content>
                </Popover>
              </li>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                <span>SEO and Performance Optimization</span>
                <Popover>
                  <Popover.Trigger>
                    <div>
                      <BsInfoCircle />
                    </div>
                  </Popover.Trigger>
                  <Popover.Content css={{
                    background: '#111',
                    padding: '4px 8px',
                    color: '#fff'
                  }}>
                    <p>Lighthouse, schema & metadata optimization.</p>
                  </Popover.Content>
                </Popover>
              </li>
            </ul>
            <ul>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                UI/UX Design</li>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                A/B Testing
                <Popover>
                  <Popover.Trigger>
                    <div>
                      <BsInfoCircle />
                    </div>
                  </Popover.Trigger>
                  <Popover.Content css={{
                    background: '#111',
                    padding: '4px 8px',
                    textAlign: 'center',
                    color: '#fff'
                  }}>
                    <p>Across websites to optimize user experience as well as paid advertising spend.</p>
                  </Popover.Content>
                </Popover>
              </li>
            </ul>
            <ul>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                Website Analytic Reporting</li>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                Email Marketing and Development</li>
            </ul>
          </div>
        </section>
        <section className={styles.showcase}>
          <h2>Showcase</h2>
          <p>Click an example to see the live site.</p>
          <div className={styles.grid}>
            <a
              href="https://coinme.com/prices/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src={pricesShowcase}
                  alt="Coinme.com/prices screenshot"
                  width={192}
                  height={400}
                />
              </div>
              <h2 className={inter.className}>
                Coinme.com/prices <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Pulling real-time crypto prices from the Nomics API to build a sortable crypto table.
              </p>
            </a>

            <a
              href="https://coinme.com/locations/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/map.webp"
                  alt="Coinme store locator screenshot"
                  width={481}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Store locator<span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Check out the map on coinme.com/locations that I built with Mapbox GL JS.
              </p>
            </a>

            <a
              href="https://coinme.com/prices/bitcoin/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/btc-price.webp"
                  alt="Bitcoin price history page screenshot"
                  width={192}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Bitcoin price history page <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Developed and designed the crypto price history pages on coinme.com.
              </p>
            </a>


            <a
              href="https://cryptoliteracy.org/quiz/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/cortrophin.webp"
                  alt="cortrophin.com screenshot"
                  width={482}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Cortrophin.com <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Prescription medication website built in NextJS.
              </p>
            </a>
            <a
              href="https://whitehawk.com"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/whitehawk.webp"
                  alt="whitehawk.com screenshot"
                  width={400}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Whitehawk.com <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Biotechnology company website built in WordPress.
              </p>
            </a>
            <a
              href="https://rhuemagen.com"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/rheumagen.webp"
                  alt="rhuemagen.com screenshot"
                  width={400}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Rheumagen.com <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Biotechnology company website built in WordPress.
              </p>
            </a>
            <a
              href="https://coinme.com/learn/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/learn.webp"
                  alt="Coinme.com/learn screenshot"
                  width={482}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Coinme.com/learn <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Page design and development for coinme.com/learn, contributed to articles and content ideas.
              </p>
            </a>
            <a
              href="https://cryptoliteracy.org/quiz/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/quiz-ipad.webp"
                  alt="cryptoliteracy.org/quiz screenshot"
                  width={482}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Cryptoliteracy.org/quiz <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                An interactive quiz built in WordPress.
              </p>
            </a>

            <a
              href="https://earthandclaysoaps.com/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/earthandclay.webp"
                  alt="earthandclaysoaps.com screenshot"
                  width={192}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                EarthandClaySoaps.com<span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Earth and Clay Soaps' shopify website. An amazing product and lovely small business.
              </p>
            </a>



            <a
              href="https://nextjs-template.ralphjwatts.com/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/next-temp.webp"
                  alt="NextJS Starter Template"
                  width={482}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                NextJS Starter Template <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                A NextJS starter template I built to practice Next and React. I used NextJS, React, SCSS and React Icons to build this.
              </p>
            </a>

            <a
              href="https://weathertoday.ralphjwatts.com/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/weather-app.webp"
                  alt="Weather React App"
                  width={192}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Weather React App <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                A Weather Web App built in React that fetches data from the weatherapi.com API. This is a React and design demo/exercise.
              </p>
            </a>
          </div>
          {/* <div> 
            <a
              href="http://legacy.ralphjwatts.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" auto rounded flat color="secondary">Older Work</Button>
            </a>
          </div>*/}
        </section>
        <section className={styles.hero}>
          <div className={styles.footer}>
            <h1>Contact</h1>
            <p>Contact info on resume.</p>
          </div>
          <div>
            {/*<a
              href="https://www.linkedin.com/in/ralphwatts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" auto rounded flat color="secondary">Linked<FaLinkedin /></Button>
            </a>*/}
            <a
              href="/pdfs/Ralph Watts' Resume Extended.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" auto rounded flat color="secondary">Resume&nbsp;<FaDownload /></Button>
            </a>
          </div>
        </section>
        <section className={styles.copyright}>
          <div>
            <p><GrTools /> Built with
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              > NextJS</a>,
              <a
                href="https://nextui.org/"
                target="_blank"
                rel="noopener noreferrer"
              > NextUI</a> and
              <a
                href="https://react-icons.github.io/react-icons"
                target="_blank"
                rel="noopener noreferrer"
              > React Icons</a></p>
          </div>
        </section>
      </main>
    </>
  )
}
