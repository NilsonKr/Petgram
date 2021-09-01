import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import apolloClient from "graphql/Client";
import { getCategories } from "../../graphql/queries";

import HomeLayout from "components/HomeLayout/HomeLayout";
import PhotosCardList from "components/photosCardList/PhotosCardList";

export const getServerSideProps: GetServerSideProps = async (_) => {
  const { data } = await apolloClient.query({ query: getCategories });

  return {
    props: {
      categoriesData: data,
    },
  };
};

const ListOfCategories = ({
  categoriesData,
}: {
  categoriesData: TCategoriesSSR;
}) => {
  const { query } = useRouter();

  return (
    <HomeLayout data={categoriesData.categories}>
      <PhotosCardList categoryId={query.id as string} />
    </HomeLayout>
  );
};

export default ListOfCategories;
