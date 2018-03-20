
//Click on task to strike a line through (add "completed" css class)
$("ul").on("click", "li" ,function()
{
$(this).toggleClass("completed");
});

//Click on [x] span to remove from ul 
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
e.stopPropagation();
});

//press enter key to append text to the html's ul 

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var todoText = $(this).val();

		$("ul").append("<li><span><i class='trash fas fa-trash-alt'></i></span> " + todoText + "</li>")

		$(this).val("");  //reset text in input to null string
	}
});

//Toggle fading effect for the text input when "plus" symbol is clicked
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
	$(".fa-plus").toggleClass("selected");
});