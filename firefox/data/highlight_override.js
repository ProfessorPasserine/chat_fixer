
function matchesHighlights(message) {
	for ( var i = 0; i < unsafeWindow.highlights.length; i++) {
		var highlight = unsafeWindow.highlights[i].trim();
		if (highlight.length > 0) {
      var re = new RegExp("\\b"+highlight+"\\b", 'i');
			if (message.match(re)) {
				return true;
			}
		}
	}
	// match additional character name currently in use
	if(unsafeWindow.userdataCache[unsafeWindow.myId] != null) {
		var entry = unsafeWindow.userdataCache[unsafeWindow.myId];
		var charID = entry[unsafeWindow.USER_INDEX_CURRENTCHARACTER];
		if(charID != 0) {
			var character = false;
			var len = unsafeWindow.userdataCache[unsafeWindow.myId][unsafeWindow.USER_INDEX_CHARACTERS].length;
			while(len--) {
				var c = unsafeWindow.unsafeWindow.userdataCache[unsafeWindow.myId][unsafeWindow.USER_INDEX_CHARACTERS][len];
				if(c.id == charID) {
					character = c;
				}
			}
			if(character){
        var re = new RegExp("\\b"+character.name+"\\b", 'i');
        if(message.match(re)){
				      return true;
        }
			}
		}
	}
	return false;
}

unsafeWindow.matchesHighlights = exportFunction(matchesHighlights, unsafeWindow);
