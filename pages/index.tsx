import { GetServerSideProps } from "next";
import apolloClient from "graphql/Client";
import { getCategories } from "../graphql/queries";
import Head from "next/head";
import PropTypes from "prop-types";

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

index.propTypes = {
  categoriesData: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        cover: PropTypes.string,
        emoji: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  }),
};

export default index;
