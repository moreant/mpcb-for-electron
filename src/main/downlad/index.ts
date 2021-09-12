import {app, BrowserWindow, dialog, ipcMain} from 'electron'
import {GET_DOWNLOADS_PATH, OPEN_FILE_DIALOG} from "@/common/constant/event";

let win: BrowserWindow | null = null

const getDownloadsPath = () => app.getPath('downloads')

const openFileDialog = async (oldPath: string = app.getPath('downloads')) => {
    const {filePaths} = await dialog.showOpenDialog(win!, {
        title: '选择下载位置',
        properties: ['openDirectory', 'createDirectory'],
        defaultPath: oldPath
    })
    return filePaths
}


const listenerEvent = () => {
    ipcMain.handle(GET_DOWNLOADS_PATH, () => getDownloadsPath())

    ipcMain.handle(OPEN_FILE_DIALOG, async (event, ...args: any[]) => openFileDialog(...args))
}

export const registerDownloadService = (): void => {
    listenerEvent()
}