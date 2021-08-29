import { gql } from "@apollo/client";

export const addLikeMutation = gql`
  mutation likePhotoUser($photoInput: LikePhoto!) {
    likePhoto(input: $photoInput) {
      id
      liked
      likes
    }
  }
`;

export const registerMutation = gql`
  mutation doSignup($signupInput: UserCredentials!) {
    signup(input: $signupInput)
  }
`;

export const loginMutation = gql`
  mutation login($loginInput: UserCredentials!) {
    login(input: $loginInput)
  }
`;
