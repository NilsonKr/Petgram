import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const apolloLink = createHttpLink({
  uri: "https://petgram-api-kr.vercel.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  uri: "https://petgram-api-kr.vercel.app/graphql",
  link: typeof window === "undefined" ? undefined : authLink.concat(apolloLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
