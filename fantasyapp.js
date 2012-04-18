$(document).ready(function() {
	var launcher = $('li.games-fancast-btn a, li.statracker a');

	launcher.attr('onclick', '').unbind('click');
	launcher.click(function(e) {
		var $this = $(this);
		var modalDiv = $('<div id="modal">');
		var iframe = $('<iframe id="fantasyapp">');
		iframe.attr('src', $this.attr('href'));

		$('body').append(modalDiv).append(iframe).css('overflow', 'hidden');

		return false;
	});

	$('body').delegate('#modal', 'click', function(e) {
		$('#fantasyapp, #modal').remove();
		$('body').css('overflow', 'auto');
	});
});
