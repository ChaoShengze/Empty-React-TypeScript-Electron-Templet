import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow(): void {
  const url = path.join(app.getAppPath(), "./dist/index.html");
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false
    }
  })
  window.loadURL(url);
}

app.on("ready", () => {
  createWindow();
})