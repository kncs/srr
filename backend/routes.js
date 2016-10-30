'use strict';

/*
 * export routes
*/
module.exports = function(app) {
  /*
   * serve application
   */
  app.get('/*', function (req, res) {
    res.render('index', {
      title: 'Simple React Redux'
    });
  });
}
