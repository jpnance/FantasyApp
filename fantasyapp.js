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
