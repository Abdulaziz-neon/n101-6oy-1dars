import './App.css'
import logo from './assets/svg/Logo.svg'
import notebook from './assets/img/notebook.png'
import best from './assets/img/best-photo.png'
import paper from './assets/img/photo-inpaper.png'
import raceta from './assets/img/Raceta.png'
import writing from './assets/img/write.png'
import comps from './assets/img/comps.png'
import a from './assets/img/a.png'
import acca from './assets/img/acca.png'

function App() {

  return (
    <>
      <div className="container">
        <header>
          <div className="header-left">
            <img src={logo} alt="logo" />
          </div>
          <div className="header-right">
            <a href="/">Home</a>
            <a href="/">How it works</a>
            <a href="/">What we do</a>
            <a href="/">Who we help</a>
            <a href="/">Resources</a>
            <button className='login-btn'>Login</button>
            <button className='talk-btn'>Talk to an Expert</button>
          </div>
        </header>

        <main>
          <div className="main-left">
            <h1>Get your <br /> finances right</h1>
            <p>Get your finances right with Accountancy Cloud. We <br /> offer the best accounting, R&D credits and CFO <br /> services for ambitious businesses who want to grow.</p>
            <div className='main-left-child'>
              <p>Switching to us is simple</p>
              <button className='main-btn'>
                Talk to us
              </button>
            </div>
          </div>
          <div className="main-right">
            <img src={notebook} alt="Photo" />
          </div>
        </main>
        <section className='best'>
          <img src={best} alt="" />
          <div className="best-child">
            <h1>
              The best finance <br /> stack for <br /> entrepreneurs
            </h1>
            <p>
              70% of companies switch to us from their DIY or legacy <br /> system. Now, get your bookkeeping, tax prep and CFO <br /> problems, solved. Complete our <a className='a-tag' href="/">contact form</a>, and find <br /> out why 9 out of 10 customers recommend us.
            </p>
          </div>

        </section>
        <section className='why'>
          <h1>Why Switch?</h1>
          <div className="why-child">
            <div>
              <img src={paper} alt="Paper" />
              <h3>Powerful software</h3>
              <p>Included in our service, each <br />
                customer gets in-house software to <br />
                access live <a href="/"> financial dashboards</a> and <br />
                real-time management reports.</p>
            </div>
            <div>
              <img src={paper} alt="Paper" />
              <h3>Powerful software</h3>
              <p>Included in our service, each <br />
                customer gets in-house software to <br />
                access live <a href="/"> financial dashboards</a> and <br />
                real-time management reports.</p>
            </div>
            <div>
              <img src={paper} alt="Paper" />
              <h3>Powerful software</h3>
              <p>Included in our service, each <br />
                customer gets in-house software to <br />
                access live <a href="/"> financial dashboards</a> and <br />
                real-time management reports.</p>
            </div>
          </div>
          <button className='why-btn'>
            Discover what we do
          </button>

        </section>
        <section className='pink-zone'>
          <h1>
            Plans built for growth
          </h1>
          <div className="pink-zone-child">
            <div>
              <img src={raceta} alt="" />
              <h3>High growth</h3>
              <p>Gain the financial accuracy, visibility, <br />
                and real-time analysis you need to <br />
                make smarter decisions, drive <br />
                efficiency, and achieve total <br />
                organizational alignment.</p>
            </div>
            <div>
              <img src={raceta} alt="" />
              <h3>High growth</h3>
              <p>Gain the financial accuracy, visibility, <br />
                and real-time analysis you need to <br />
                make smarter decisions, drive <br />
                efficiency, and achieve total <br />
                organizational alignment.</p>
            </div>
            <div>
              <img src={raceta} alt="" />
              <h3>High growth</h3>
              <p>Gain the financial accuracy, visibility, <br />
                and real-time analysis you need to <br />
                make smarter decisions, drive <br />
                efficiency, and achieve total <br />
                organizational alignment.</p>
            </div>
          </div>

        </section>
        <section className='photos'>
          <p>Join 200+ amazing <br /> companies</p>
          <div>
            <img src={writing} alt="" />
            <img src={writing} alt="" />
            <img src={writing} alt="" />
            <img src={writing} alt="" />
            <img src={writing} alt="" />
            <img src={writing} alt="" />
            <img src={writing} alt="" />
            <img src={writing} alt="" />
            <img src={writing} alt="" />
          </div>
        </section>

        <section className='hub'>
          <div className='hub-child'>
            <h1>The AC Hub</h1>
            <p>Explore our dedicated online resources. We've got the tips, <br />
              tricks and online accounting know-how for business success.</p>
            <button className='hub-btn'>
              View Hub

            </button>
          </div>
          <img src={comps} alt="" />


        </section>
        <section className='ready'>
          <div className="ready-child">
            <h1>Ready to Switch? It's simple.</h1>
            <p>Speak to an expert today</p>
          </div>
          <button className='ready-btn'>
            Get Started
          </button>

        </section>
        <footer>
          <div className="footer-child1">
            <img src={a} alt="" />
            <h1>Your new finance team</h1>
          </div>
          <div className="footer-child2">
            <div>
              <h3>How it works</h3>
              <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
              </div>
               <div>
              <h3>How it works</h3>
              <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
              </div>
               <div>
              <h3>How it works</h3>
              <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
              </div>
               <div>
              <h3>How it works</h3>
              <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
              </div>
               <div>
              <h3>How it works</h3>
              <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
              </div>
          </div>
          <div className="footer-child3">
            <h3>Speak to us</h3>
            <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
              <p>Hassle Free Switching</p>
          </div>
          <div className="footer-child4">
            <div>
              <p>© Accountancy Cloud 2021</p>
              <p>Privacy Policy & Cookies</p>
              <p>Terms of Service</p>
            </div>
            <img src={acca} alt="" />
          </div>
          


        </footer>
      </div>
    </>
  )
}

export default App
