// id="todoText"
// button id="todoBtn"
$(document).ready(function(){
    let todoArray = []

    $("#todoBtn").on("click", function(){
        event.preventDefault()
        var text = $("#todoText").val()
        todoArray.push("todoText")
        console.log(todoArray)
        $("#todoGroup").append(
            `<li class="list-group-item">${text}</li>`
        )
    })
})