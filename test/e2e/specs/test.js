// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.loginContainer')
      .assert.containsText('.login-title', '欢迎登录')
      .assert.elementCount('button', 1)
      .pause(3000)
      .setValue('#username', 'laoli123')
      .setValue('#password', 'open888888')
      .pause(3000)
      .click('.submit-button')
      .waitForElementVisible('.course-list', 8000)
      .pause(3000)
      .click('.course-list')
      .end()
  }
}
