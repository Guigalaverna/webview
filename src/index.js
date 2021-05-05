const { app, BrowserWindow } = require('electron')

const settings = require('../settings.json')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    ...settings.window,
  })

  mainWindow.loadURL(settings.url)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})