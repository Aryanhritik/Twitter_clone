// @desc signUp Page
// @api  POST /api/auth/signup
// @access public
const signup = async (req, res) => {
  res.json({
    message: "signup page",
  });
};


// @desc login Page
// @api  POST /api/auth/login
// @access public
const login = async (req, res) => {
  res.json({
    message: "login page",
  });
};


// @desc logout Page
// @api  POST /api/auth/logout
// @access public
const logout = async (req, res) => {
  res.json({
    message: "logout page",
  });
};


export { signup, login, logout}