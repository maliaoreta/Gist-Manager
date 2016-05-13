'use strict'

// import express from 'express';
// import passport from 'passport';
// import session from 'express-session';
// import bodyParser from 'body-parser';
// import {Strategy as GitHubStrategy} from 'passport-github2'
// import partials from 'express-partials';
// import * as CONFIG from './config/config.json';
const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const GitHubStrategy = require('passport-github2').Strategy;
const partials = require('express-partials');
const CONFIG = require('./config/config.json');
const path = require('path');
const querystring = require('qs');
const isAuthenticated = require('./middleware/isAuthenticated');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new GitHubStrategy({
  clientID: CONFIG.github_client_id,
  clientSecret: CONFIG.github_client_secret,
  callbackURL: "http://127.0.0.1:8080/auth/github/callback"
},
(accessToken, refreshToken, profile, done) => {
  profile.accessToken = accessToken;
  return done(null, profile);
}
));

app.use(partials());
app.use(session({ secret: 'sdjflskdfj', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile('/public/index.html', {
//     root: __dirname
//   });
// });

app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'gists' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    var accessToken = querystring.stringify({accessToken:req.user.accessToken, username:req.user._json.login})
    res.redirect('/?' + accessToken);
  });

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(8080, () => {
  console.log('Listening on 8080!');
});

