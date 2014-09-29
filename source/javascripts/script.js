$(document).ready(function() {
	var monkeyList = new List('test-list', { 
	  valueNames: ['name'], 
	  plugins: [ ListFuzzySearch() ] 
	});

	$('.add').click(function(){
	  $(this).toggleClass('selected');
	  $(this).parent('li').toggleClass('added');
	  if ($(this).hasClass('selected')) {
	  	$(this).html('&#x2713;');
	  } else {
	  	$(this).html('Add');
	  }
	});

	$('#classes').click(function() {
		console.log('classes');
		$('.list').children().each(function() {
			if (!($(this).hasClass('added'))) {
				$(this).hide();
				console.log('hidden');
			} else {
				$(this).show();
			}
		});
	});

	$('#test-class').click(function() {
		$('#test-description').slideToggle();
	});
});