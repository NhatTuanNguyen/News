let linkLogin = `/auth/login`;
let linkNoPermission = `/auth/no-permission`;

module.exports = (req, res,next) => {
  // console.log(req.isAuthenticated(),req.user);
  if(req.isAuthenticated()) {
      if(req.user.username == 'admin') {
          next();
      } else {
          res.redirect(linkNoPermission);
      }
  } else {
      res.redirect(linkLogin);
  }
}