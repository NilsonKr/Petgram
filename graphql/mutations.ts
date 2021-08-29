import { gql } from "@apollo/client";

export const addLikeAnonymus = gql`
  mutation likeAnonymousPhoto($photoInput: LikePhoto!) {
    likeAnonymousPhoto(input: $photoInput) {
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
