import { useState } from "react"


export default function Home() {
  const [ carouselImgSelectedNo, setCarouselSelectedImg ] = useState(1)
  const [ tabNoSelected, setSelectedTab ] = useState(1)
  return (
    <div className="container">

      <main>
        <title>Tawsif's Coalition Technologies Project</title>
        <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css' />
        <link rel="icon" href="/favicon.ico" />

        {/* Home section */}
        <div className="header-nav top">
            <img 
                id="header-logo"
                src="/header-logo.png"
                height="50"
                width="50"
                alt="Coalition Technologies logo"
            />
            <div className="header-link-container" style={{display: 'flex', justifyContent: 'space-around', width: '30%'}}>
                <a className="header-link" href="#history">01. HISTORY</a>
                <a className="header-link" href="#team">02. TEAM</a>
            </div>
        </div>

        <img src="/bg-pic-1.png" />

        <div className="header-nav">
          <div>
            <img
              id="body-logo"
              src="/body-logo.png"
              height="50"
              width="50"
              alt="Coalition Technologies body logo"
            />
            <img
              id="body-logo-text"
              src="/body-logo-text.svg"
              height="50"
              width="50"
              alt="Coalition Technologies body logo"
              style={{marginLeft: '5px'}}
            />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', width: '30%'}}>
            <a className="header-link" href="#history" style={{color: 'black'}}>01. HISTORY</a>
            <a className="header-link" href="#team" style={{color: 'black'}}>02. TEAM</a>
          </div>
        </div>
        {/* Home section */}

        {/* History section */}
        <div id="history">
          <img
            id="history"
            src="/bg-pic-2.png"
          />
        
          <div className="history-text-container">
            <p style={{fontFamily: 'Lato, sans-serif', fontSize: '16px', fontWeight: 400, color: '#16181b'}}>
              Lorem ipsum dolor si amet, consectetur adipiscing elit. Proin in ante viverra, retrum erat rutrum, consecutur mi. Proin at
              maximumus est. Nullam purus sex, iaculis sed erat set blandit tincidunt quam. Cras scelerisque id quam sed dignisiim
              Pellentesque urna nunc, gravida quis hendrerit ac, tritisque ut quam. Vivamus suscipit dignissim tortor nec congue.
            </p>
          </div>

          <img 
            id="carousel-bg"
            src="/carousel-bg.png"
          />
          <div id="carousel">
            <img
              className="carousel-image"
              src="/carousel-image1.png"
              style={carouselImgSelectedNo === 1 ? {border: '2px solid black', opacity: 1.0} : {}}
              onClick={() => setCarouselSelectedImg(1)}
            />
            <img
              className="carousel-image"
              src="/carousel-image2.png"
              style={carouselImgSelectedNo === 2 ? {border: '2px solid black', opacity: 1.0} : {}}
              onClick={() => setCarouselSelectedImg(2)}
            />
            <img
              className="carousel-image"
              src="/carousel-image3.png"
              style={carouselImgSelectedNo === 3 ? {border: '2px solid black', opacity: 1.0} : {}}
              onClick={() => setCarouselSelectedImg(3)}
            />
            <img 
              className="carousel-image"
              src="/carousel-image4.png"
              style={carouselImgSelectedNo === 4 ? {border: '2px solid black', opacity: 1.0} : {}}
              onClick={() => setCarouselSelectedImg(4)}
            />
          </div> 
        </div>
        {/* History section */}

        {/* Team section */}
        <div id="team">

          <img 
            id="team-pre-bg-img"
            src="/team-pre-bg-img.png"
          />

          <p style={{position: 'absolute', top: '20px', left: '630px'}}>
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac,
            tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
          </p>

          <div className="tab-switcher">
            <div className={tabNoSelected === 1 ? 'tab tab-selected' : 'tab'} onClick={() => setSelectedTab(1)}>
              <span>MOUNTAIN 1</span>
            </div>
            <div className={tabNoSelected === 2 ? 'tab tab-selected' : 'tab'} onClick={() => setSelectedTab(2)}>
              <span>MOUNTAIN 2</span>
            </div>
          </div>

          <img
            id="team-bg"
            src="/bg-pic-3.png"
          />
        
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px', marginBottom: '20px'}}>
          <img 
            id="footer-logo"
            src="/footer-logo.png"
            height="50"
            width="50"
            alt="Coalition Technologies logo"
          /> 
          
          <span>
              COPYRIGHT 2016. ALL RIGHTS RESERVED
          </span>
        </div>

        </div>
        {/* Team section */}


      </main>
{/* 
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer> */}

      <style jsx>{`
            .header-nav {
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 10px;
            }
            .header-link {
                color: white
            }
            .top {
                position: absolute;
                left: 0px;
                top: 0px;
                z-index: 1;
                width: 100%;
            }
            
            .history-text-container {
              position: absolute;
              left: 395px;
              top: 1070px;
              z-index: 1;
              width: 57%;
            }
            #carousel-bg {
              position: absolute;
              top: 1600px;
              left: 0px;
            }
            #carousel {
              position: absolute;
              top: 1620px;
              left: 350px;
              z-index: 2;
              display: flex;
            }
          .carousel-image {
            opacity: 0.4
          }
          #team {
            position: absolute;
            top: 1830px;
            left: 0px;
          }
          #team-pre-bg-img {
            padding-bottom: 30px;
            padding-left: 350px;
          }
          .tab-switcher {
            background-color: #41456b;
            height: 50px;
            min-height: 50px;
            display: flex;
            align-items: center;
            padding-left: 305px
          }
         
          .tab {
            display: flex;
            align-items: center;
            height: 100%;
            min-height: 50px;
            color: white;
            margin-left: 20px;
            padding: 0 20px;
          }
          .tab-selected {
            background-color: #b0b4be
          }
        `}
        </style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
