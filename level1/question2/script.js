fetch('https://jsonplaceholder.typicode.com/todos?format=json')
    .then(result => result.json())
    .then((res) => {
        addElement(res);
    })
    .catch(err => console.log(err))

document.body.onload = addElement;

function addElement (result) {
    for (var i = 0; i < result.length; i++) {
        var showElements = result[i],
            newDiv = document.createElement("div"),
            currentDiv = document.getElementById("pasteBoard");
        if (result[i].completed === true) {
            newDiv.className = "tile done";
        } else {
            newDiv.className = "tile todo";
        }
        newDiv.innerHTML += "<span class='info userId'>User ID: " + result[i].userId + "</span>";
        newDiv.innerHTML += "<span class='info'>Task: " + result[i].id + "</span>";
        newDiv.innerHTML += "<span class='title'>" + result[i].title + "</span>";
        document.body.insertBefore(newDiv, currentDiv); 
    }
};


