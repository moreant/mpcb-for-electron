
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly PORT: string
  }
}

interface Window {
  /** 关闭预加载动画 */
  removeLoading: () => void
  /** NodeJs fs */
  fs: typeof import('fs')
  os: typeof import('os')
  /** Electron ipcRenderer */
  ipcRenderer: import('electron').IpcRenderer
}
