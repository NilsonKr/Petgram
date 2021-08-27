import React from "react";
import { useMutation } from "@apollo/client";
import { addLikeAnonymus } from "../graphql/queries";
import useLocalStorage from "../hooks/useLocalStorage";

type Tprops = {
  photo: TphotoCard;
  render: (
    photo: TphotoCard,
    like: TlikeFnProp,
    isLiked: boolean
  ) => JSX.Element;
};

const PhotoContainer: React.FC<Tprops> = (props) => {
  const [isLiked, toggleLike] = useLocalStorage(props.photo.id);
  const [addLike] = useMutation(addLikeAnonymus);

  console.log(props.photo);

  const like = (evt: React.MouseEvent<any>) => {
    evt.stopPropagation();
    !isLiked &&
      addLike({ variables: { photoInput: { id: `${props.photo.id}` } } });
    toggleLike(!isLiked);

    console.log("Like");
  };

  return props.render(props.photo, like, isLiked);
};

export default PhotoContainer;
