import {forEach} from 'lodash';

export const openTab = (url) => {
  const newURL = url;
  chrome.tabs.create({ url: newURL });
}

export const reloadAllTabsWithQuery = (query) => {
  chrome.tabs.query(query, function(tabs) {
    // reload all tabs with that url
    forEach(tabs, (tab) => {
      chrome.tabs.update(tab.id, {url: tab.url});
    })
  });
}