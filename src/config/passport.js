import User from '../models/user';
import auth from '../auth';

let LocalStrategy = require('passport-local').Strategy;
let FacebookStrategy = require('passport-facebook').Strategy;

module.exports = (passport) => {
    ///
    /// Local authentication strategy
    ///
    passport.use('local', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, email, password, done) => {
        process.nextTick(() => {
            console.log('Authenticating...');
            User.findOne({'local.email': email}, (err, user) => {
                if (err)
                    return done(err);
                if (!user)
                    return done(null, false, {success: false, message: 'User not found.'});
                if(!user.comparePassword(password))
                    return done(null, false, {success: false, message: 'Invalid password.'});
                
                return done(null, user);
            });
        });
    }));
    
    ///
    /// Facebook authentication strategy
    ///
    passport.use('facebook', new FacebookStrategy({
        clientID: auth.facebookAuth.clientID,
        clientSecret: auth.facebookAuth.clientSecret,
        callbackURL: auth.facebookAuth.callbackURL
    }, (accessToken, refreshToken, profile, done) => {
        process.nextTick(() => {
           User.findOne({'facebook.id': profile.id }, (err, user) => {
              if (err)
                return done(err);
              if (!user)
                return done(null, false, {success: false, message: 'User not found.'});
              
              let newUser = new User();
              newUser.facebook.id = profile.id;
              newUser.facebook.token = accessToken;
              newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
              newUser.facebook.email = profile.emails[0].value;
              
              newUser.save((err) => {
                  if (err)
                    throw err;
                  return done(null, newUser);
              });
           });
        });
    }));
}