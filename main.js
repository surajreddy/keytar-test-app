const {app, BrowserWindow} = require('electron');
const keytar = require('keytar');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 600,
      width: 800
  });

  keytar.replacePassword('electron-test','username','password');
  password = keytar.findPassword('electron-test');
  console.log('Password coming right up');
  console.log(password);
  
  if (password) {
    mainWindow.loadURL('file://' + __dirname + '/keytar-worked.html');
  } else {
    mainWindow.loadURL('file://' + __dirname + '/keytar-failed.html');
  }
});
