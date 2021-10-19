import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
        <>
			<Head>
				<title>Home</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet"></link>
			</Head>
        </>
	);
}

export default MyApp;