function saveTask() 
{
    console.log("saving task");
    //get values
    const title = $("#inputTitle").val();
    const desc = $("#inputDescription").val();
    const color = $("#inputColor").val();
    const date = $("#inputDate").val();
    const status = $("#inputStatus").val();
    const budget = $("#inputBudget").val();
    console.log(title,desc,color,date,status,budget)
    //build an object
    let taskToSave = new Task(title, desc, color, date, status, budget);
    //console.log(taskToSave);
    //displayTask(taskToSave);

    //save to server
    $.ajax({
        type: "POST",
        url:"http://fsdiapi.azurewebsites.net/api/tasks",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function(response){
            console.log(response);
            displayTask(response);
        },
        error:function(error){
            console.log(error);
        }
    });



    //display the task
    function displayTask(task)
    {
        let syntax =`<div class="task" style="border-color:${task.color}">
        <div class="info">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        </div>
        <label class="status">${task.status}</label>
        <div class="date-budget">
            <label>${task.date}</label>
            <label>${task.budget}</label>
        </div>
        </div>
        `;
        $(".pending-task").append(syntax);
    }

}

function loadTask() {
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function(res)
        {
            let data = JSON.parse(res);
            console.log(data);
            for (let data = 0; i<data.length; i++) {
                let task = data[i];
                if(task.name == "Daisha")
                {
                    displayTask(task);
                }

                displayTask() 
            }
            displayTasks(data);
            console.log(res);
        },
        error: function(error)
        {
            console.log(error);
        }
    });
}
function testRequest()
{
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net",
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
    loadTask();
}

window.onload = init;//avoid the init()