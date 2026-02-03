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
            <p>Full-stack Web Developer with deep expertise in React, Next.js, Vue.js and advanced WordPress builds. I specialize in translating complex marketing and regulatory requirements into fast, scalable, and pixel-perfect digital experiences.</p>
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
          <h2>Core Capabilities</h2>
          <div>
            <ul>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                Full-Stack Web Development
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
                    <p>React, Next.js, WordPress Custom Builds</p>
                  </Popover.Content>
                </Popover>
              </li>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                <span>Scalable Front-End System Design</span>
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
                    <p>Reusable components, multi-CMS ecosystems.</p>
                  </Popover.Content>
                </Popover>
              </li>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                <span>Server & Deployment Infrastructure</span>
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
                    <p>AWS Lightsail, Docker, CI/CD, GitOps</p>
                  </Popover.Content>
                </Popover>
              </li>
            </ul>
            <ul>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                Marketing Technology Integrations
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
                    <p>GTM, analytics events, Iterable, Pardot, Veeva</p>
                  </Popover.Content>
                </Popover>
              </li>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                Advanced WordPress Engineering
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
                    <p>Custom Gutenberg Blocks, ACF, Themes</p>
                  </Popover.Content>
                </Popover>
              </li>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                Enterprise Email Development
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
                    <p>MJML, multi-ESP workflows, QA automation</p>
                  </Popover.Content>
                </Popover>
              </li>
            </ul>
            <ul>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                Complex Web Form Architecture
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
                    <p>Formik, multi-layer validation, testing</p>
                  </Popover.Content>
                </Popover>
              </li>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                Automated Testing & QA Engineering
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
                    <p>Playwright, Jest, load/performance testing</p>
                  </Popover.Content>
                </Popover>
              </li>
              <li>
                <div>
                  <VscActivateBreakpoints />
                </div>
                Large-Scale API & Data Integrations
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
                    <p>Mapbox GL JS, Nomics API, Google APIs</p>
                  </Popover.Content>
                </Popover>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.showcase}>
          <h2>Featured Work</h2>
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
                  className={`${styles.portfoloimg} tilt-right`}
                  src={pricesShowcase}
                  alt="Coinme.com/prices screenshot"
                  width={192}
                  height={400}
                />
              </div>
              <h2 className={inter.className}>
                Coinme.com/Prices <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Fetches real-time crypto prices from the Nomics API to build a sortable crypto table.
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
                  width={400}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Coinme.com/Locations<span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Built the store locator map on coinme.com/locations with Mapbox GL JS. Serves over 44k locations all searchable and filterable.
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
                  className={`${styles.portfoloimg} tilt-right`}
                  src="/images/btc-price.webp"
                  alt="Bitcoin price history page screenshot"
                  width={192}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Coinme.com/Prices/Bitcoin <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Developed and designed the crypto price history pages on coinme.com. Leveraged Nomics API to fetch real-time crypto data.
              </p>
            </a>

            <a
              href="https://www.radicava.com/patient/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/radicava-patient.webp"
                  alt="radicava.com screenshot"
                  width={482}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Radicava.com <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                ALS medication marketing website built in NextJS.
              </p>
            </a>
            <a
              href="https://cortrophin.com"
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
                Prescription medication marketing website built in NextJS.
              </p>
            </a>
            <a
              href="https://www.speakparkinsons.com/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/speakparkinsons.webp"
                  alt="speakparkinsons.com screenshot"
                  width={482}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                SpeakParkinsons.com <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Parkinsons educational website built in NextJS.
              </p>
            </a>

            <a
              href="https://www.whitehawktx.com/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={`${styles.portfoloimg} img-lg`}
                  src="/images/whitehawk.webp"
                  alt="whitehawktx.com screenshot"
                  width={300}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Whitehawktx.com <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Biotechnology company website built in WordPress.
              </p>
            </a>
            <a
              href="https://www.rheumagen.com/"
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
                  width={400}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Coinme.com/Learn <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Development for the Coinme Learn Ecosystem, contributed to the page design as well as articles and content ideas driven by SEO research.
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
                  className={`${styles.portfoloimg} tilt-right`}
                  src="/images/quiz-ipad.webp"
                  alt="cryptoliteracy.org/quiz screenshot"
                  width={482}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                CryptoLiteracy.org/Quiz <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                An interactive quiz built in WordPress. Cryptoliteracy.org is a non-profit organization that educates people about cryptocurrency and blockchain technology.
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
                  className={`${styles.portfoloimg} tilt-right`}
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
                Earth and Clay Soaps' shopify website. Managed the entire project from design to development. An amazing product and lovely small business.
              </p>
            </a>

            <a
              href="https://tlando.com/hcp"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.portfoloimg}
                  src="/images/tlando.webp"
                  alt="TLando.com/hcp screenshot"
                  width={482}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                TLando.com/hcp <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Medication marketing website built in HubSpot.
              </p>
            </a>

            <a
              href="https://legacy.ralphjwatts.com/tyrc/index.html"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={`${styles.portfoloimg} img-lg tilt-right`}
                  src="/images/tyrc.webp"
                  alt="Test Your Recall Web App screenshot"
                  width={195}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Test Your Recall Web App <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                jQuery, Angular & Bootstrap-powered web app to train the brain. Test your recall!
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
                  alt="NextJS Starter Template screenshot"
                  width={400}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                NextJS Starter Template <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                NextJS starter template built to practice Next and React. NextJS, React, SCSS and React Icons were in this project.
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
                  className={`${styles.portfoloimg} tilt-right`}
                  src="/images/weather-app.webp"
                  alt="Weather React App screenshot"
                  width={192}
                  height={400}
                  priority
                />
              </div>
              <h2 className={inter.className}>
                Weather React App <span><VscArrowRight /></span>
              </h2>
              <p className={inter.className}>
                Weather Web App built in React that fetches data from the weatherapi.com API. This is a React and design demo/exercise.
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
            <a
              href="/pdfs/Ralph Watts' Resume Extended.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" auto rounded flat color="secondary">Resume&nbsp;<FaDownload /></Button>
            </a>
            <p>Contact info on resume.</p>
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
