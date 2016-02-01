
unsafeWindow.cache_buster = '&cb='+Math.random();

setInterval(function(){
  unsafeWindow.cache_buster='&cb='+Math.random();
}, 5*60*1000);


function drawMessage(messageData, autoScroll){
	var cont = document.getElementById("sf-chat-messages");

	var row = cont.insertRow(cont.rows.length);

	var cellNum = 0;

	var timestampCell = row.insertCell(cellNum++);
	if(messageData[0] != unsafeWindow.lastRenderedTimestamp){
		timestampCell.className = "sf-chat-timestamp";
		timestampCell.innerHTML = messageData[0];
		unsafeWindow.lastRenderedTimestamp = messageData[0];
	}

	if (unsafeWindow.chatMessageStyle == 0) {
		var avatarCell = row.insertCell(cellNum++);
		if (messageData[2] != '' && messageData[2] != undefined) {
			avatarCell.className = 'sf-chat-avatar';
			avatarCell.innerHTML = '<img class="sf-chat-avatar" src="'+messageData[2]+unsafeWindow.cache_buster+'">';
		}
	}
	var textCell = row.insertCell(cellNum++);

	var className = "sf-chat-message";
	if(unsafeWindow.alternateStatus){
		className += " sf-chat-message-alternate";
	}
	unsafeWindow.alternateStatus = !unsafeWindow.alternateStatus;
	textCell.className = className;

	textCell.innerHTML = unsafeWindow.linkify(messageData[1]);

	if(autoScroll){
		if(document.getElementById("sf-chat-autoscroll").checked){
			// Autoscroll!
			unsafeWindow.$("#sf-chat-messages-cont").scrollTop(unsafeWindow.$("#sf-chat-messages-cont")[0].scrollHeight);
		}
	}
}

unsafeWindow.drawMessage = exportFunction(drawMessage ,unsafeWindow);
