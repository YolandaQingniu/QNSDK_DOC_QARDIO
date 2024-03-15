var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
    branch: "main",
    repo: "https://github.com/YolandaQingniu/QNSDK_DOC_QARDIO.git"
  },
  function(err) {
    console.log("github更新" + err);
  }
);

