chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason !== chrome.runtime.OnInstalledReason.INSTALL) {
    return;
  }

  chrome.alarms.create('startup-alarm', {
    delayInMinutes: 60,
    periodInMinutes: 60
  });
});

chrome.runtime.onStartup.addListener(function() {
  chrome.alarms.create('startup-alarm', {
    delayInMinutes: 60,
    periodInMinutes: 60
  });
})

browser.alarms.onAlarm.addListener(function(activeTab){
    var newURL = "popup-wayne.html";
    chrome.tabs.create({ url: newURL });
    chrome.alarms.create('startup-alarm', {
        delayInMinutes: 60,
        periodInMinutes: 60
    });
});