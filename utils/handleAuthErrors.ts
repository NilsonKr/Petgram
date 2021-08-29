function handleAuthErrors(error: Error) {
  console.log(error);
  if (error.message === "user does not exist") {
    sessionStorage.removeItem("token");
    document.location.href = "/profile";
  } else if (error.message === "you must be logged in to perform this action") {
    document.location.href = "/profile";
  }
}

export default handleAuthErrors;
