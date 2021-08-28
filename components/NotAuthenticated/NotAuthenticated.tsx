import { NotAuthenticatedStyled } from "./NotAuthenticatedStyles";

const NotAuthenticated = () => {
  return (
    <NotAuthenticatedStyled>
      <img src="/illustration1.png" alt="Cutie Cat" />
      <h2>Seems like you dont have an account yet!</h2>
      <button>Create One!</button>
    </NotAuthenticatedStyled>
  );
};

export default NotAuthenticated;
