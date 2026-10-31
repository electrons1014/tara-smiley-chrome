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
    const pages = ["popup-wayne.html", "popup-mogba.html", "popup-tara.html", "popup-dodds.html"];
    const URL = pages[Math.floor(Math.random() * pages.length)];
    chrome.tabs.create({ url: URL });
    chrome.alarms.create('startup-alarm', {
        delayInMinutes: 60,
        periodInMinutes: 60
    });
});