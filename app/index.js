// index.js
// created by Jake M. Rieger
//

const {app, BrowserWindow} = require('electron')
const {remote} = require('electron')

// set title bar text
document.getElementById("titlebar-title").innerHTML = `nCrypt (${process.env.npm_package_version})`

// get click input for close button and close the application
document.getElementById('close-btn').addEventListener("click", () => {
  var window = remote.getCurrentWindow()
  window.close()
})

// get click input for minimize button and minimize the application
document.getElementById('min-btn').addEventListener("click", () => {
  var window = remote.getCurrentWindow()
  window.minimize()
})
