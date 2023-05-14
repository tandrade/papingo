import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Header from '../components/Header.js'

export default function Home() {
  return (
    <>
    <Header />
    <div className="titleSplash">
      <h1><div className="headingEmp">Royalties</div> shouldn't have to be a <div className="headingEmp">royal pain</div></h1>
      <h3>Your work is collaborative. Your payouts should be too.</h3>
    </div>
    <div className="description">
      <p>Papingo allows you to sell anything you build anywhere on the web with up to 10 collaborators. Before you start selling, determine how you want to divide up the project proceeds. Then once your product starts selling, Papingo will automatically route everyone the money they’re owed. Goodbye to long waits. Goodbye to paying upfront. Hello to easy payouts that scale with your business.
      </p>
    </div>


    <style jsx>{`
      h1 { 
        max-width: 60%;
        font-size: 75px;
        margin-bottom: 15px;
      }

      .headingEmp { 
        color: #475C7B
      }

      .titleSplash { 
        margin: 0px;
        padding: 30px;
        background-color: white;
      }

      h3 {
        padding-bottom: 40px;
      }

      .description { 
        margin: 0px; 
        padding: 35px;
        height: 100;
        font-size: 16px;
        line-height: 1.8;
      }
    `}</style>

    <style jsx global>{`

    body { 
      background-color: #79A9D1;
    }
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
    </>
    )
}
