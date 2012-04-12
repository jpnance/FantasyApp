// ==UserScript==
// @name           FantasyApp
// @namespace      http://coinflipper.org/
// @description    Help close the loop of having ESPN.com fantasy games function as self-contained web applications
// @include        http://games.espn.go.com/flb/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==

$(document).ready(function() {
	var espnLauncher = $('li.games-fancast-btn a');

	espnLauncher.attr('onclick', '').unbind('click');
	espnLauncher.click(function(e) {
		var $this = $(this);
		var modalDiv = $('<div id="modal">');
		var iframe = $('<iframe id="fantasyapp" class="fantasycast">');
		iframe.attr('src', $this.attr('href'));

		$('body').append(modalDiv).append(iframe).css('overflow', 'hidden');

		return false;
	});

	$('body').delegate('#modal', 'click', function(e) {
		$('#fantasyapp, #modal').remove();
		$('body').css('overflow', 'auto');
	});
});

GM_addStyle("div#modal { background-color: black; height: 100%; opacity: 0.8; position: fixed; top: 0; width: 100%; z-index: 1234566; } iframe#fantasyapp { background-color: white; border: 1px solid black; box-shadow: 3px 3px 12px #000000; height: 90%; left: 10%; top: 5%; position: fixed; width: 80%; z-index: 1234567; }");
