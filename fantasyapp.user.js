// ==UserScript==
// @name           FantasyApp
// @namespace      http://coinflipper.org/
// @description    Help close the loop of having some prominent fantasy games (ESPN.com and Yahoo!) function as self-contained web applications
// @include        http://games.espn.go.com/flb/*
// @include        http://baseball.fantasysports.yahoo.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==

$(document).ready(function() {
	var launcher = $('li.games-fancast-btn a, li.statracker a, li.stattracker a');

	if (launcher.length > 0) {
		var modalDiv = $('<div id="fantasyAppModal">');
		var iframe = $('<iframe id="fantasyAppIframe">');

		iframe.attr('src', launcher.attr('href'));

		$('body').append(iframe).append(modalDiv);

		launcher.attr('onclick', '').unbind('click');
		launcher.click(function(e) {
			$('body').addClass('fantasyAppShown');
			return false;
		});

		$('body').delegate('#fantasyAppModal', 'click', function(e) {
			$('body').removeClass('fantasyAppShown');
		});
	}
});

GM_addStyle("body.fantasyAppShown { overflow: hidden; } div#fantasyAppModal, iframe#fantasyAppIframe { visibility: hidden; } body.fantasyAppShown div#fantasyAppModal, body.fantasyAppShown iframe#fantasyAppIframe { visibility: visible; } div#fantasyAppModal { background-color: black; height: 100%; opacity: 0.8; position: fixed; top: 0; width: 100%; z-index: 1234566; } iframe#fantasyAppIframe { background-color: white; border: 1px solid black; box-shadow: 3px 3px 12px #000000; height: 90%; left: 10%; top: 5%; position: fixed; width: 80%; z-index: 1234567; }");
