import { gql } from "@apollo/client";

export const photosQuery = gql`
  query photosList($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      src
      likes
      liked
      userId
      categoryId
    }
  }
`;

export const getCategories = gql`
  {
    categories {
      id
      name
      cover
      emoji
    }
  }
`;

export const photoDetail = gql`
  query getPhotoDetail($photoId: ID!) {
    photo(id: $photoId) {
      id
      src
      likes
      liked
      userId
      categoryId
    }
  }
`;

export const getFavs = gql`
  {
    favs {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;
