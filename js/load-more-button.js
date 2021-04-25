$(document).ready(function(){
  $(".col-sm-6").slice(0, 3).show();
	if ($(".col-sm-6:hidden").length != 0) {
			$("#loadMore").show();
		}
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".col-sm-6:hidden").slice(0, 6).slideDown();
    if($(".col-sm-6:hidden").length == 0) {
      $("#loadMore").text("You caught up all the articles").addClass("noContent");
    }
  });

})
