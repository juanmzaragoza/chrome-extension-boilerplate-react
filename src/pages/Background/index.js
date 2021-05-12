import {getGlobally} from "../Content/modules/storage";

console.log('[BACKGROUND] This is the background page.');
console.log('[BACKGROUND] Put the background scripts here.');

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log("[BACKGROUND] Received %o from %o, frame", msg, sender.tab, sender.frameId);
  sendResponse("Gotcha!"); // to the content!
});

console.log(getGlobally('member'))