import Head from "next/head";

import PhotosCardList from "components/photosCardList/PhotosCardList";
import HomeLayout from "components/HomeLayout/HomeLayout";

const index = () => {
  return (
    <>
      <Head>
        <title>Petgram</title>
      </Head>
      <HomeLayout>
        <PhotosCardList categoryId="" />
      </HomeLayout>
    </>
  );
};

export default index;
