import { gql, QueryResult } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import PhotoCard from "./PhotoCard";

const queryPhoto = gql`
  {
    photo(id: "18") {
      id
      src
      likes
      liked
      userId
      categoryId
    }
  }
`;

const PhotoCardContainer = ({ photoId }: { photoId: string }) => {
  return (
    <Query query={queryPhoto} variables={{ photoId: photoId }}>
      {({ data, loading }: QueryResult) => {
        return loading ? <h3>Loading...</h3> : <PhotoCard {...data.photo} />;
      }}
    </Query>
  );
};

export default PhotoCardContainer;
