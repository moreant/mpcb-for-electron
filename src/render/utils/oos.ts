// @ts-ignore
import OSS from "ali-oss";
import {Sig} from "@/render/model";

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

    downImg = (url: string, saveUrl: string) => this.client.get(url, saveUrl);

    getBuffer = (url: string) => this.client.get(url)


    getUrl = (url: string) => this.client.signatureUrl(url)

}

export default OOS