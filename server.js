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
const CONFIG = require('./config/config.json')

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: CONFIG.github_client_id,
  clientSecret: CONFIG.github_secret_id,
  callbackURL: "http://localhost:3000/"
},
(accessToken, refreshToken, profile, done) => {
  process.nextTick(() => {
    return done(null, profile);
  });
}
));

app.

app.use(partials());
app.use(session({ secret: 'sdjflskdfj', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, () => {
  console.log('Listening on 3000!');
});