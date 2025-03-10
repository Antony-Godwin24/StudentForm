var row=document.getElementById("one")

function deleterow(event)
{
    event.target.parentElement.parentElement.remove()
}

function save(){
    alert("Your Form is Submitted Successfully")
    document.querySelector(".disp").style.display="block"
}

function showtable(){
    document.querySelector(".disp").style.display="none";
    document.querySelector(".form-cont").style.display="none";
    document.querySelector(".tbl").style.display="block";
}