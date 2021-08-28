import { NotAuthenticatedStyled } from "./NotAuthenticatedStyles";

const NotAuthenticated = ({ setAuth }: { setAuth: () => void }) => {
  return (
    <NotAuthenticatedStyled>
      <img src="/illustration1.png" alt="Cutie Cat" />
      <h2>Seems like you dont have an account yet!</h2>
      <button onClick={setAuth}>Create One!</button>
    </NotAuthenticatedStyled>
  );
};

export default NotAuthenticated;
