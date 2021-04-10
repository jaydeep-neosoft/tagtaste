const isLoggedIn = () => {
  return localStorage.getItem("email") ? true : false;
};

const loginFn = (history, email) => {
  localStorage.setItem("email", email);
  history.replace("/");
};

const logoutFn = (history) => {
  localStorage.removeItem("email");
  history.replace("/login");
};

export { isLoggedIn, loginFn, logoutFn };
