$(document).ready(function() {
	var monkeyList = new List('test-list', { 
	  valueNames: ['name'], 
	  plugins: [ ListFuzzySearch() ] 
	});

	for (var j = 0; j < 100; j++) {
		$('.classes').append(localStorage.getItem('yourclass' + j));
		$('.classes').append('<br>');
	}

	$('.add').click(function(){
	  $(this).toggleClass('selected');
	  if ($(this).hasClass('selected')) {
	  	$(this).html('&#x2713;');
		localStorage.setItem('yourclass', $('.name'));
	  } else {
	  	$(this).html('Add');
	  }
	});

	$('.like').click(function(){
	  $(this).toggleClass('selected');
	  if ($(this).hasClass('selected')) {
	  	//If selected, display a list of friends
      $('.frdtext').append(', Frank Avino');
	  } else {
	  	$(this).html('');
	  }
	});
});