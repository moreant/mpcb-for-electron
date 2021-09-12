/**
 * Renderer and Main bridge
 */
import fs from 'fs'
import os from 'os'
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('fs', fs)
contextBridge.exposeInMainWorld('os', os)

contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer)
