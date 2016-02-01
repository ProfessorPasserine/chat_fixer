var pageMod = require("sdk/page-mod"),
    self = require("sdk/self");

pageMod.PageMod({
  include: "https://www.sofurry.com/chat",
  contentScriptFile: [self.data.url("cache_buster.js"), self.data.url("highlight_override.js")]
})
