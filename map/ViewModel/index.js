var nameInit = false;

$(function(){
	$(".selectPage").hide();
})
$("#SelectName").click(function(){
	showFliter();
	$(".origin").addClass("DarkBody");
});

$("#close").click(function(){
	$(".selectPage").hide();
	$(".origin").removeClass("DarkBody");
})

$("#check").click(function(){
	var nameArray = [];
	$("#NameForm").find("input").each(function(){
		console.log($(this).checked);
		if ($(this).is(":checked")) {
			console.log("yes");
			nameArray.push($(this).next().text());
		}
	});
	console.log(nameArray);
	//处理已选中的node（name标识，存在nameArray里）


}) 

$("#cancel").click(function(){
	$(".mycheckbox").attr("checked", false);
})

/*-------根据已有数据显示筛选框--------*/
function showFliter() {
	var count = 0;
	if (nameInit === false) {	
		$.getJSON("../Model/relation.json", function(data){
			$.each(data.nodes, function(infoIndex, info){
				addName(info["name"],count);
				count += 1;
			})

		})
		$(".selectPage").show();
		nameInit = true;
	}
	else {
		$(".selectPage").show();
	}

}

function addName(name,count) {
	var label = $("<label></label>");
	label.css('display','block');
	var input = $("<input></input>").attr('type','checkbox').attr('id',count).attr('class','mycheckbox');
	label.append(input);
	label.append("<span>" + name + "</span>");
	$("#NameForm").append(label);

}