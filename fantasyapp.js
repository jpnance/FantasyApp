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
});
