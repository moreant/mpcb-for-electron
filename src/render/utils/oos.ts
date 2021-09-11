// @ts-ignore
import OSS from "ali-oss";
import {Sig} from "@/render/model";
import * as url from "url";

class OOS {
    client: OSS

    constructor(token: Sig) {
        if (token) {
            this.client = new OSS({
                region: token.region,
                accessKeyId: token.accessKeyId,
                accessKeySecret: token.accessKeySecret,
                bucket: token.bucket,
                stsToken: token.securityToken
            });
        }
    }

    downImg = async (url: string, saveUrl: string) => {
        await this.client.get(url, saveUrl);
    }

    getUrl = (url: string) => this.client.signatureUrl(url)

}

export default OOS