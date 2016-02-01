
matchesHighlights = function(message) {
	for ( var i = 0; i < highlights.length; i++) {
		var highlight = highlights[i].trim();
		if (highlight.length > 0) {
      var re = new RegExp("\\b"+highlight+"\\b", 'i');
			if (message.match(re)) {
				return true;
			}
		}
	}
	// match additional character name currently in use
	if(userdataCache[myId] != null) {
		var entry = userdataCache[myId];
		var charID = entry[USER_INDEX_CURRENTCHARACTER];
		if(charID != 0) {
			var character = false;
			var len = userdataCache[myId][USER_INDEX_CHARACTERS].length;
			while(len--) {
				var c = userdataCache[myId][USER_INDEX_CHARACTERS][len];
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
