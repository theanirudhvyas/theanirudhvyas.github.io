import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
          <div className={utilStyles.container}>
      <Head>
          <title >Anirudh Vyas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <h1 className={utilStyles.heading2Xl}>
          ANIRUDH V.
        </h1>

          <p className={utilStyles.headingXl}>
          Writing code and Sourcing Events at <a href='https://www.gojek.io/'>Gojek</a>
        </p>
      </main>

      <style jsx>{`


        a {
          color: inherit;
          text-decoration: none;
        }

      `}</style>
    </div>
  );
}
