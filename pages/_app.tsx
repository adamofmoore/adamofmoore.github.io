import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import GlobalStyles from "../globals/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Adam of Moore</title>
				<meta name="description" content="Senior UX Engineer based out of Sacramento, California. Over 20 years building websites and apps for all platforms. Focus on high-quality design with clean, high-performance code." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />

			{/* Google Analytics */}
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-43BNF5WRM6" strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-43BNF5WRM6');
                `}
			</Script>
		</>
	);
}

export default MyApp;
