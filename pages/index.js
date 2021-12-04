export default function Home() {
  return (
    <div className="container">

      <main>
        <title>Tawsif's Coalition Technologies Project</title>
        <link rel="icon" href="/favicon.ico" />
        <div className="header-nav top">
            <img 
                id="header-logo"
                src="/header-logo.png"
                height="50"
                width="50"
                alt="Coalition Technologies logo"
            />
            <div style={{display: 'flex', justifyContent: 'space-between', width: '30%'}}>
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
          <div style={{display: 'flex', justifyContent: 'space-between', width: '30%'}}>
            <a className="header-link" href="#history" style={{color: 'black'}}>01. HISTORY</a>
            <a className="header-link" href="#team" style={{color: 'black'}}>02. TEAM</a>
          </div>
        </div>

        <div>
          <img 
              id="footer-logo"
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
              height="50"
              width="50"
              alt="Coalition Technologies logo"
          />
          <span>
              COPYRIGHT 2016. ALL RIGHTS RESERVED
          </span>
        </div>
      </main>

      {/* <footer>
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
        `}
        </style>

      {/* <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style> */}

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
