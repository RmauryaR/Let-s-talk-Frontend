import { createClient } from "agora-rtm-react";

const appId = "9018a94d10f34248aa03f0d14a011fb9";
//-------------------------------------------------------------------
// const appId = "a31cdc3489504257ab2982717d9421ac";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useRTMClient = createClient(appId);
