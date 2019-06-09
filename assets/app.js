// id="todoText"
// button id="todoBtn"
$(document).ready(function(){
    $("#todoBtn").on("click", function(){
        var text = $("#todoText").val()
        console.log(text)
    })
})