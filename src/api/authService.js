const AUTH_KEY = "isLoggedIn";

const hardcodedUser = {
  username: "admin",
  password: "password123",
};

// Login
export function login(username, password) {
  if (
    username === hardcodedUser.username &&
    password === hardcodedUser.password
  ) {
    localStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
}

// Logout
export function logout() {
  localStorage.removeItem(AUTH_KEY);
  window.open("/");
}

// Login status
export function isLoggedIn() {
  return localStorage.getItem(AUTH_KEY) === "true";
}
