$(document).ready(function() {
	var espnLauncher = $('li.games-fancast-btn a');

	espnLauncher.attr('onclick', '').unbind('click');
	espnLauncher.click(function(e) {
		var $this = $(this);
		var iframe = $('<iframe id="fantasyapp" class="fantasycast">');
		iframe.attr('src', $this.attr('href'));

		$('body').append(iframe);

		return false;
	});
});
