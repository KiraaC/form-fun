// id="todoText"
// button id="todoBtn"
$(document).ready(function(){
    $("#todoBtn").on("click", function(){
        event.preventDefault()
        var text = $("#todoText").val()
        $("#todoGroup").append(
            `<li class="list-group-item">${text}</li>`
        )
    })
})