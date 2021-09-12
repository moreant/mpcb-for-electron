import {OPEN_LINK} from "@/common/constant/event";

const openExtraLink = async (link: string) => {
    await window.ipcRenderer.invoke(OPEN_LINK, link)
}

export {openExtraLink}
