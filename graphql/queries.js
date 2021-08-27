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

export const addLikeAnonymus = gql`
	mutation likeAnonymousPhoto($photoInput: LikePhoto!) {
		likeAnonymousPhoto(input: $photoInput) {
			id
			liked
			likes
		}
	}
`;
