type Tcategory = {
  id: number;
  cover?: string;
  emoji?: string;
  name: string;
  path: string;
};

type TphotoCard = {
  id: string;
  categoryId: number;
  src: string;
  userId: number;
  likes: number;
  like: boolean;
};

type TlikeFnProp = (evt: React.MouseEvent<any>) => void;
