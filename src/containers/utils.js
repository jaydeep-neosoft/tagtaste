const isLoggedIn = () => {
  return localStorage.getItem("email") ? true : false;
};

const loginFn = (history, email) => {
  localStorage.setItem("email", email);
  history.push("/");
};

const logoutFn = () => {
  localStorage.removeItem("email");
};

export { isLoggedIn, loginFn, logoutFn };
