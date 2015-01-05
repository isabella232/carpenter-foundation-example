
      config = requirejs.config({
        baseUrl: './',
        paths: {
          "jquery": "bower_components/jquery/dist/jquery",
          "jquery-resizable-columns": "bower_components/jquery-resizable-columns/dist/jquery.resizableColumns.min",
          "foundation": "js/foundation.min",
          "underscore": "bower_components/underscore/underscore",
          "underscore.string": "bower_components/underscore.string/dist/underscore.string.min",
          "backbone": "bower_components/backbone/backbone",
          "backbone.babysitter": "bower_components/backbone.babysitter/lib/backbone.babysitter",
          "backbone.radio": "bower_components/backbone.radio/src/backbone.radio",
          "backbone.wreqr": "bower_components/backbone.wreqr/lib/backbone.wreqr",
          "cocktail": "bower_components/cocktail/Cocktail",
          "marionette": "bower_components/backbone.marionette/lib/backbone.marionette",
          "carpenter": "bower_components/marionette.carpenter/dist/marionette.carpenter.require"
        },
        shim: {
          'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
          },
          'backbone.radio': {
            deps: ['backbone']
          },
          'cocktail': {
            deps: ['underscore'],
            exports: 'Cocktail'
          },
          'underscore': {
            exports: '_'
          },
          'jquery-resizable-columns': {
            deps:['jquery']
          },
          'undercore.string': {
            deps:['underscore']
          },
          'marionette': {
            deps: ['backbone', 'backbone.wreqr', 'backbone.babysitter'],
            exports: 'Marionette'
          },
          'carpenter': {
            deps: ['cocktail', 'backbone.radio', 'underscore.string', 'jquery-resizable-columns', 'marionette']
          }
        }
      });

      config(['js/woodworkers-table'],
      function($) {
        $(document).foundation();
      });