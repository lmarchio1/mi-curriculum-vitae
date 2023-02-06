$('#show-more-content').hide();

$('#show-more').click(function(){
	$('#show-more-content').show();
	$('#show-less').show();
	$(this).hide();
});

