function saveTask(){
    console.log("saving task");
    //get values
    const title =$("#txtTitle").val();
    const desc =$("#txtDescription").val();
    const color =$("#selColor").val();
    const date =$("#selDate").val();
    const status =$("#selStatus").val();
    const budget =$("#numBudget").val();
    console.log(title,desc,color,date,status,budget)
    //build an object

    //save to server

    //display the task

}

function init()
{
    //load data

    //hook events
    $("#btnSave").click(saveTask)
}

window.onload = init;//avoid the init()