(function () {

  'use strict';
  const express = require('express');
  const path = require('path');
  const _ = require('lodash');
  var myRouter = express.Router();

  /**
   * Responsibility: Add all the website valid routes.
   *
   * @param mongoose
   * @return {Object} myRouter with all the mapping.
   */
  module.exports.create = function (mongoose) {
    return require(path.resolve(process.cwd(),'lib' ,'models','article')).create(mongoose).then(function ($articles) {
      myRouter.get('/cs', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Computer Science'})});
      });

      myRouter.get('/cs/ts-complexity', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Time & Space Complexity'})});
      });

      myRouter.get('/cs/ds', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Data Structures'})});
      });

      myRouter.get('/cs/algo', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Algorithms'})});
      });

      myRouter.get('/cs/interviews', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Technical Interviews'})});
      });

      myRouter.get('/tech', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Technology'})});
      });

      myRouter.get('/tech/oop', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'OOP'})});
      });

      myRouter.get('/tech/design', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Design'})});
      });

      myRouter.get('/tech/async-sync', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Async vs Sync'})});
      });

      myRouter.get('/tech/fwks', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Frameworks'})});
      });

      myRouter.get('/tech/testing', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Testing'})});
      });

      myRouter.get('/tech/deployment', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Deployment'})});
      });

      myRouter.get('/soft', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Soft Skills'})});
      });

      myRouter.get('/soft/manifesto', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Agile Manifesto'})});
      });

      myRouter.get('/soft/practices', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'XP or Scrum'})});
      });

      myRouter.get('/soft/tt', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Techniques & Tools'})});
      });

      myRouter.get('/soft/job', function (req, res) {
        res.render('main', {article: _.find($articles, { 'title': 'Applying for a Job'})});
      });


      myRouter.get('/home', function(req, res) {
        res.render('main', {content: 'home'});
      });

      myRouter.get('/about', function(req, res) {
        res.render('main', {content: 'about'});
      });

      return myRouter;
    });
  };


})();
