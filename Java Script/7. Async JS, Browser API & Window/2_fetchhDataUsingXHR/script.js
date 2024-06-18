let nameButton = document.getElementById("btn");
console.log(nameButton);
let list = document.getElementById("nameList");
nameButton.addEventListener("click", getNames);

function getNames(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhr.send();
    xhr.onload = function (){
        let responseValue = JSON.parse(xhr.responseText);
        responseValue.forEach(element => {
            let html = `<li>${element.username}</li>`;
            list.insertAdjacentHTML("beforeend",html);
        
        });
    }
}