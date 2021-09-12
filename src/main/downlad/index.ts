import {app, BrowserWindow, shell, dialog, ipcMain} from 'electron'
import {GET_DOWNLOADS_PATH, OPEN_FILE_DIALOG, OPEN_LINK} from "@/common/constant/event";

let win: BrowserWindow | null = null

const openExtraLink = async (link: string = '') => {
    await shell.openExternal(link)
}

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
    ipcMain.handle(OPEN_LINK, async (event, link: string) => openExtraLink(link))
    ipcMain.handle(GET_DOWNLOADS_PATH, () => getDownloadsPath())

    ipcMain.handle(OPEN_FILE_DIALOG, async (event, ...args: any[]) => openFileDialog(...args))
}

export const registerDownloadService = (): void => {
    listenerEvent()
}