
cache_buster = '&cb='+Math.random();

setInterval(function(){
  cache_buster='&cb='+Math.random();
}, 5*60*1000);
drawMessage = function(messageData, autoScroll){
	var cont = document.getElementById("sf-chat-messages");

	var row = cont.insertRow(cont.rows.length);

	var cellNum = 0;

	var timestampCell = row.insertCell(cellNum++);
	if(messageData[0] != lastRenderedTimestamp){
		timestampCell.className = "sf-chat-timestamp";
		timestampCell.innerHTML = messageData[0];
		lastRenderedTimestamp = messageData[0];
	}

	if (chatMessageStyle == 0) {
		var avatarCell = row.insertCell(cellNum++);
		if (messageData[2] != '' && messageData[2] != undefined) {
			avatarCell.className = 'sf-chat-avatar';
			avatarCell.innerHTML = '<img class="sf-chat-avatar" src="'+messageData[2]+cache_buster+'">';
		}
	}
	var textCell = row.insertCell(cellNum++);

	var className = "sf-chat-message";
	if(alternateStatus){
		className += " sf-chat-message-alternate";
	}
	alternateStatus = !alternateStatus;
	textCell.className = className;

	textCell.innerHTML = linkify(messageData[1]);

	if(autoScroll){
		if(document.getElementById("sf-chat-autoscroll").checked){
			// Autoscroll!
			$("#sf-chat-messages-cont").scrollTop($("#sf-chat-messages-cont")[0].scrollHeight);
		}
	}
}
