// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('@angular-devkit/build-angular/plugins/karma'),
        require('karma-junit-reporter')
    ],
    junitReporter: {
      useBrowserName: true
    },
    reporters: ['progress','junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: true,
    restartOnFileChange: true,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless'],
    customLaunchers: {
      ChromeHeadless: {
        base: "Chrome",
        flags: [
          "--headless",
          "--disable-gpu",
          "--no-sandbox",
          "--remote-debugging-port=9222"
        ],
      },
    }
  });
};
