import { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globalStyles";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://petgram-api-kr.vercel.app/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
