console.log("Got content.js")

// 配置本地端口
let port = 8086
let localhost = `http://localhost:${port}`

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
  console.log("Got message from background page: " + msg);

  // http://192.168.59.36:8080/fssc/?v=1611037656610/#/expenseclaim?billDefineId=9c42072a221211eab9e171e1ca24ccef&billMainId=7166274d595e11eb8b74c3d4b29af590&taskId=d67f0b99595e11eb8b7423e7fbf87ac4&billDefineHistoryId=07aee39b595b11eb8b7415a465f1caea&scene=EXAMINE_APPROVAL&TOKEN=7275dbf85a1d11eba16759fb1a5b29a7&lang=zh_CN&menuId=e323921b602b11e98df4d1739114363d&task_id=d6dfa22e595e11eba99557dae6b376e6&origin=http%3A%2F%2F192.168.59.36%3A8080%2Fecs-console%2Findex.html&fromConsole=controlBoard
  // to
  // http://localhost:8086/#/expenseclaim?billDefineId=9c42072a221211eab9e171e1ca24ccef&billMainId=7166274d595e11eb8b74c3d4b29af590&taskId=d67f0b99595e11eb8b7423e7fbf87ac4&billDefineHistoryId=07aee39b595b11eb8b7415a465f1caea&scene=EXAMINE_APPROVAL&TOKEN=7275dbf85a1d11eba16759fb1a5b29a7&lang=zh_CN&menuId=e323921b602b11e98df4d1739114363d&task_id=d6dfa22e595e11eba99557dae6b376e6&origin=http%3A%2F%2F192.168.59.36%3A8080%2Fecs-console%2Findex.html&fromConsole=controlBoard
  
});

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.action == 'open_replaced_fssc_iframe') {
    // alert("Message recieved!");
    let oldHref = location.href;
    let hrefSplits = oldHref.split('/#/');
    if (hrefSplits[1]) {
      let newHref = localhost + '/#/' + hrefSplits[1];
      console.log(newHref);
      window.open(newHref, '_blank');
    }
  }
});