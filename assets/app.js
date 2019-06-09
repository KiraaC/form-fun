// id="todoText"
// button id="todoBtn"
$(document).ready(function(){
    let todoArray = []

    $("#todoBtn").on("click", function(){
        event.preventDefault()
        var text = $("#todoText").val()
        todoArray.push("todoText")
        console.log(todoArray)
        $("#todoGroup").empty()
        for (let i=0; i < todoArray.length; i++){

        }
        $("#todoGroup").append(
            `<li class="list-group-item">${todoArray[i]}</li>`
        )
    })
})