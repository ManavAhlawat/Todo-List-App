//check off specific todos by clicking
$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(){
	if(event.which == 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$("input").val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});