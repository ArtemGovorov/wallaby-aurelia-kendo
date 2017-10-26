var wallabyWebpack = require('wallaby-webpack');
var AureliaPlugin = require('aurelia-webpack-plugin').AureliaPlugin;
var DefinePlugin = require('webpack').DefinePlugin;
var wallabyPostprocessor = wallabyWebpack({
  entryPatterns: ['test/unit/setup.js', 'test/unit/**/*.spec.js'],
  resolve: {
    alias: {
      'kendo-ui/js': '@progress/kendo-ui/js',
      'kendo-ui': '/kendo-ui-core/js/kendo.core.js',
      'module': 'webpack/lib/Module.js'
    }
  },
  "node": {
    "fs": "empty"
    },

  plugins: [
    new DefinePlugin({AURELIA_WEBPACK_2_0: undefined}),
    new AureliaPlugin({
      aureliaApp: undefined
    })
  ]
});

module.exports = function () {
  return {
    files: [
      //{ pattern: 'jquery/dist/jquery.js', load: false },
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'test/unit/setup.ts', load: false},
      { pattern: 'test/unit/fake-mvc-service.ts', load: false},
      { pattern: 'test/unit/test-configuration.ts', load: false}
    ],

    //filesWithNoCoverageCalculated: ['src/**/*dal.ts'],

    tests: [{
      pattern: 'test/unit/**/*.spec.ts', load: false
    }],

    env: {
      kind: 'chrome'
    },

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};
