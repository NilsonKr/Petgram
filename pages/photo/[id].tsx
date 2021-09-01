import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import apolloClient from "graphql/Client";
import { photoDetail, getCategories } from "../../graphql/queries";

import HomeLayout from "components/HomeLayout/HomeLayout";

import PhotoDetails from "@components/photoCard/PhotoDetails";
import PhotoContainer from "HOC/PhotoContainer";
import PhotoLoader from "@components/Loader/PhotoLoader";

export const getServerSideProps: GetServerSideProps = async (_) => {
  const { data } = await apolloClient.query({ query: getCategories });

  return {
    props: {
      categoriesData: data,
    },
  };
};

const PhotoDetail = ({
  categoriesData,
}: {
  categoriesData: TCategoriesSSR;
}) => {
  const { query } = useRouter();
  const { data, loading } = useQuery<{ photo: TphotoCard }>(photoDetail, {
    variables: { photoId: `${query.id}` },
  });

  //Render photo details view with like functionalities
  const render = (photo: TphotoCard, like: TlikeFnProp) => {
    return <PhotoDetails {...photo} like={like} />;
  };

  return (
    <HomeLayout data={categoriesData.categories}>
      {data && (
        <PhotoContainer
          photo={{ ...data.photo, id: query.id as string }}
          render={render}
        ></PhotoContainer>
      )}
      {loading && <PhotoLoader />}
    </HomeLayout>
  );
};

export default PhotoDetail;
