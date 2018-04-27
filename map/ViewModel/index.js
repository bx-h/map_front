$("#SelectName").click(function(){
	showFliter();
	$(".origin").addClass("DarkBody");
});

$("#close").click(function(){
	$(".selectPage").hide();
	$(".origin").removeClass("DarkBody");
})

$("#check").click(function(){

}) 

$("#cancel").click(function(){
	$(".mycheckbox").attr("checked", false);
})

function showFliter() {
	
}