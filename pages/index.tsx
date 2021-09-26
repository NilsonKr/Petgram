import { GetServerSideProps } from "next";
import apolloClient from "graphql/Client";
import { getCategories } from "../graphql/queries";
import Head from "next/head";

import PhotosCardList from "components/photosCardList/PhotosCardList";
import HomeLayout from "components/HomeLayout/HomeLayout";

export const getServerSideProps: GetServerSideProps = async (_) => {
  const { data } = await apolloClient.query({ query: getCategories });

  return {
    props: {
      categoriesData: data,
    },
  };
};

const index = ({ categoriesData }: { categoriesData: TCategoriesSSR }) => {
  return (
    <>
      <Head>
        <title>Petgram</title>
      </Head>
      <HomeLayout data={categoriesData.categories}>
        <PhotosCardList categoryId="" />
      </HomeLayout>
    </>
  );
};

export default index;
