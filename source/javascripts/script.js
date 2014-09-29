$(document).ready(function() {
	var monkeyList = new List('test-list', { 
	  valueNames: ['name'], 
	  plugins: [ ListFuzzySearch() ] 
	});

	$('.add').click(function(){
	  $(this).toggleClass('selected');
	  if ($(this).hasClass('selected')) {
	  	$(this).html('&#x2713;');
	  } else {
	  	$(this).html('Add');
	  }
	});
});