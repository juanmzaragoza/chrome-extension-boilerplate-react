export const openTab = (url) => {
  const newURL = url;
  chrome.tabs.create({ url: newURL });
}