var pageMod = require("sdk/page-mod"),
    self = require("sdk/self");

pageMod.PageMod({
  include: "*sofurry.com/chat",
  contentScriptFile: [self.data.url("cache_buster.js"), self.data.url("highlight_override.js")]
})
