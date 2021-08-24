type Tcategory = {
  id: number;
  cover?: string;
  emoji?: string;
  name: string;
  path: string;
};

type TphotoCard = {
  id: number;
  categoryId: number;
  src: string;
  userId: number;
  likes: number;
  like: boolean;
};
