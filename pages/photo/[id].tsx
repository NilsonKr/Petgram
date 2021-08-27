import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { photoDetail } from "../../graphql/queries";
import HomeLayout from "components/HomeLayout/HomeLayout";

const PhotoDetail = () => {
  const { query } = useRouter();
  const { data } = useQuery<{ data: TphotoCard }>(photoDetail, {
    variables: { photoId: `${query.id}` },
  });

  console.log(data);
  return <HomeLayout>Photo with id: {query.id}</HomeLayout>;
};

export default PhotoDetail;
