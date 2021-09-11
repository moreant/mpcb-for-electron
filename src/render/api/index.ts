import request from "../utils/request";
import qs from 'qs';
import {Basic} from "@/render/model/basic";
import {AlbumList, DirList} from "@/render/model";


const api = {
    sig: 'https://mzstorage.meizu.com/file/get_sig',
    dirList: 'https://mzstorage.meizu.com/album/dir/list',
    albumList: 'https://mzstorage.meizu.com/album/list'
}

export const getInfo = (token: string) => {
    const params = {
        type: '2',
        token
    }
    return request.post<Basic<any>>(api.sig, qs.stringify(params))
}

export const getDir = (token: string) => {
    const params = {
        limit: 1000,
        order: 1,
        token
    }
    return request.post<void, Basic<DirList>>(api.dirList, qs.stringify(params))
}

export const getList = (token: string, dirId: string, fileNum: number = 10000) => {
    const params = {
        limit: 1000,
        order: 1,
        offset: 0,
        limit: fileNum,
        dirId,
        token
    }
    return request.post<void, Basic<AlbumList>>(api.albumList, qs.stringify(params))
}

export const downImg = () => {

}

export const getIconList = () => {

}
