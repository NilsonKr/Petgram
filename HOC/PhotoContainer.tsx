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

  const like = (evt: React.MouseEvent<any>) => {
    evt.stopPropagation();
    //Update like in UI and Graphql API
    !isLiked &&
      addLike({ variables: { photoInput: { id: `${props.photo.id}` } } });

    toggleLike(!isLiked);
  };

  return props.render(props.photo, like, isLiked);
};

export default PhotoContainer;
