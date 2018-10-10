import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow(): void {
  const url = path.join(app.getAppPath(), "./dist/index.html");
  const window = new BrowserWindow({
    height: 600,
    webPreferences: {
      webSecurity: false
    },
    width: 800,
  })
  window.loadURL(url);
}

app.on("ready", () => {
  createWindow();
})