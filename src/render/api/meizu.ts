import request from "../utils/request";

const getSig = (token: string) => {
    const params = {
        type: '2',
        token
    }
    return request.post('https://mzstorage.meizu.com/file/get_sig', {params})
}

export {getSig}