import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "graphql/Client";

import AuthContext from "context/AuthContext";

import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthContext>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthContext>
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
