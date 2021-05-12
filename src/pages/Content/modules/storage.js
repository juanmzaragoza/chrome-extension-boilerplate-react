export const saveGlobally = (key, value) => {
  chrome.storage.sync.set({ [key]: value }, () => {
    //  A data saved callback omg so fancy
    console.log(`[storage] Value ${value} saved`);
  });
}

export const getGlobally = (key, callback) => {
  console.log("[storage] get globally");
  return chrome.storage.sync.get([key], function(items){
    //  items = [ { "yourBody": "myBody" } ]
    console.log(`[storage] Values ${items} recovered`);
    callback(items[key]);
  });
}

export const removeGlobally = (key, callback) => {
  console.log("[storage] remove globally");
  chrome.storage.sync.remove(['member'], (items) => {
    console.log(`[storage] Values ${items} removed`);
    callback(items);
  });
}