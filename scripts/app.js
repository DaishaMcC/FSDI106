function saveTask()
{
    console.log("saving task");
    //get values
    const title = $("#txtTitle").val();
    const desc = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();

    console.log(title,desc,color,date,status,budget);
    //build an object
    let taskToSave = new Task (title,desc,color,date,status,budget);
    console.log(taskToSave);
    displayTask(taskToSave);

    //save to server


    //display the task
    function displayTask(task)
    {
        let syntax =` <div class="task" style="border-color:${task.color}">
        <div class="info">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        </div>
        <label class="status">${task.status}</label>
        <div class="date-budget">
        <label>${task.date}</label>
        label>${task.budget}</label>
        </div>
        </div>
        `;
        $(".pending-task").append(syntax);
    }

}

function testRequest()
{
    $.ajax({
        type: "GET",
        url: "https://fsdiapi.azurewebsites.net",
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    })
}

    //load data

function init()
{
    //load data

    //retrieve data

    //hook events
    $("#btnSave").click(saveTask)
}

window.onload = init;//avoid the init()