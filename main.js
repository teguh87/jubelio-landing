
// load all reqirement
const electron = require('electron');
const {app, BrowserWindow } = electron;


// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow

function  createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600})
    // load the index.html of the app.
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    // const startUrl = "http://localhost:3000/";

    mainWindow.loadURL(startUrl)
}

app.on('ready', () => {
    createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});

app.on('activate', () => {
if (mainWindow === null) {
    createWindow();
}
});