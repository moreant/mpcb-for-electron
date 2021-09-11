export interface Dir {
    id: number,
    dirName: string,
    icon: string,
    fileNum: number
}


export interface Album{
    id:number,
    fileName:string,
    dirId:string,
    dirName:string,
    url:string,
}

export interface DirList {
    time: number,
    count: number,
    dir: Array<Index>
}

export interface AlbumList {
    time: number,
    count: number,
    file: Array<Index>
}
