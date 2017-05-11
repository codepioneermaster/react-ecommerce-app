var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var OAuth = require('./auth.js');

function extractProfile(profile) { 
  var imageURL = '';
  if (profile.photos && profile.photos.length) {
    imageUrl = profile.photos[0].value;
  }
  return {
    id: profile.id,
    displayName: profile.displayName,
    image: imageUrl
  };
}

passport.use(new GoogleStrategy({
    clientID: OAuth.googleAuth.clientID,
    clientSecret: OAuth.googleAuth.clientSecret,
    callbackURL: OAuth.googleAuth.callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, extractProfile(profile));
  }
));
  
passport.serializeUser(function(user, cb) { 
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
