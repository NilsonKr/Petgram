type Tcategory = {
  id: number | string;
  cover?: string;
  emoji?: string;
  name: string;
  path: string;
  isFloat: boolean;
};

type TphotoCard = {
  id: string;
  categoryId: number;
  src: string;
  userId: number;
  likes: number;
  liked: boolean;
};

type TCategoriesSSR = {
  categories: any[];
};

type TlikeFnProp = (evt: React.MouseEvent<any>) => void;

type TauthToken = {
  login?: string;
  signup?: string;
};

type TauthFecthResult = import("@apollo/client").FetchResult<TauthToken>;
