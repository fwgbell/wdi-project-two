const User = require('../models/user');


function showProfileRoute (req, res){
  User
    .findById(req.params.id)
    .populate('addedPhotos')
    .then(result =>{
      res.render('users/profile', result);
    });
}


module.exports = {
  showProfile: showProfileRoute
};