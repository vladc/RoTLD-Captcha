var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "https://epp.rotld.ro/*",
  contentScriptFile: "./captcha.js"
});