// See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
var show_list = function() {
	$.getJSON("http://localhost:3000/contacts.json",function(data){
		var contacts = $('#table').empty();
		var row = $('<tr>').appendTo(contacts);
			$('<td>').text("contact id").appendTo(row);
      $('<td>').text("contact name").appendTo(row);
      $('<td>').text("contact email").appendTo(row);
		$.each(data, function(index, contact){
			var row = $('<tr>').appendTo(contacts);
			$('<td>').text(index + 1).appendTo(row);
      $('<td>').text(contact.firstname + contact.lastname).appendTo(row);
      $('<td>').text(contact.email).appendTo(row);
    });
	});
};

var show_search = function() {
	$.getJSON("http://localhost:3000/contacts.json",function(data){
		var search = $('#search').val();
		var contacts = $('#table').empty();
		var contact_check = false;
		$.each(data,function(index,contact){
			if( search == contact.email ){
				contact_check = true;
				var row = $('<tr>').appendTo(contacts);
				$('<td>').text(index + 1).appendTo(row);
	      $('<td>').text(contact.firstname + contact.lastname).appendTo(row);
	      $('<td>').text(contact.email).appendTo(row);
			};
		});
		if ( contact_check == false){
			var contacts = $('#table').empty();
			$('<h2>').text("Can't find the contact with this email:" + search).appendTo(contacts)
		};
	});
};




$(function(){
	$("#list").on('click',function(){
		$("#create_new").hide();
		show_list();
	});

	$("#show").on("click",function(){
		$("#create_new").hide();
		show_search();
	});

	$("#new").on('click',function(){
		$('#table').empty();
		$("#create_new").show();
	});
});



