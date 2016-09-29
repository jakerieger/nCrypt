// index.js
// created by Jake M. Rieger
//

const {app, BrowserWindow, remote} = require('electron')
const {dialog} = require('electron').remote
var fs = require('fs')
var encryptor = require('file-encryptor')

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

// open file
document.getElementById('openf-btn').addEventListener("click", () => {
  dialog.showOpenDialog((fileNames) => {
    if (fileNames === undefined) {

    } else {
      document.getElementById('file-input').value = fileNames[0]
    }
  })
})

// encrypt file
document.getElementById('encrypt-btn').addEventListener("click", () => {
  var inputFile = document.getElementById('file-input').value
  var outputFile = `${document.getElementById('file-input').value}.bwright`
  var password = document.getElementById('password-input').value
  encryptor.encryptFile(inputFile, outputFile, password)
})

// decrypt file
document.getElementById('decrypt-btn').addEventListener("click", () => {
  var inputFile = document.getElementById('file-input').value
  var outputFile = inputFile.substr(0, inputFile.lastIndexOf('.'))
  var password = document.getElementById('password-input').value
  encryptor.decryptFile(inputFile, outputFile, password)
})
