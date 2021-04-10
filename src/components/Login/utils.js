const isLoggedIn = () => {
  return localStorage.getItem("email") ? true : false;
};

const loginFn = (email) => {
  localStorage.setItem("email", email);
};

const logoutFn = () => {
  localStorage.removeItem("email");
};

export { isLoggedIn, loginFn, logoutFn };
