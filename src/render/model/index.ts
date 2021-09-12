export interface Sig {
    region: string,
    endpointImage: string,
    securityToken: string,
    bucket: string,
    expiredTime: string,
    accessKeyId: string,
    regionImage: string,
    endpoint: string,
    accessKeySecret: string
}

export interface Dir {
    id: number,
    dirName: string,
    icon: string,
    fileNum: number,
    downNum: number,
    downPath: string
}


export interface Album {
    id: number,
    fileName: string,
    dirId: string,
    dirName: string,
    url: string,
    download: string,
}

export interface DirList {
    time: number,
    count: number,
    dir: Array<Dir>
}

export interface AlbumList {
    time: number,
    count: number,
    file: Array<Album>
}
