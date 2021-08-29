import React from "react";
import { useMutation } from "@apollo/client";
import { addLikeMutation } from "../graphql/mutations";
import handleAuthErrors from "../utils/handleAuthErrors";

type Tprops = {
  photo: TphotoCard;
  render: (photo: TphotoCard, like: TlikeFnProp) => JSX.Element;
};

const PhotoContainer: React.FC<Tprops> = (props) => {
  const [addLike] = useMutation(addLikeMutation);

  const like = (evt: React.MouseEvent<any>) => {
    evt.stopPropagation();
    //Update like in UI and Graphql API

    addLike({ variables: { photoInput: { id: `${props.photo.id}` } } }).catch(
      (err) => handleAuthErrors(err)
    );
  };

  return props.render(props.photo, like);
};

export default PhotoContainer;
