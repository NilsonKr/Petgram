import { useQuery } from "@apollo/client";
import Link from "next/link";

import { getFavs } from "../graphql/queries";
import Authenticate from "HOC/Authenticate";

import Loader from "@components/Loader/Loader";
import {
  FavThumbnail,
  FavLists,
} from "@components/FavPhotoThumbnail/FavPhotoStyled";

const favorites = () => {
  const { data, loading, error } = useQuery(getFavs, {
    fetchPolicy: "cache-and-network",
  });

  return (
    <FavLists>
      {data &&
        data.favs.map((fav: TphotoCard) => (
          <Link href={`/photo/${fav.id}`} key={fav.id}>
            <FavThumbnail>
              <img src={fav.src} alt="Favorite" />
            </FavThumbnail>
          </Link>
        ))}
      {loading && (
        <>
          <FavThumbnail>
            <Loader width="150px" height="150px" />
          </FavThumbnail>
          <FavThumbnail>
            <Loader width="150px" height="150px" />
          </FavThumbnail>
          <FavThumbnail>
            <Loader width="150px" height="150px" />
          </FavThumbnail>
        </>
      )}
    </FavLists>
  );
};

export default Authenticate(favorites);
