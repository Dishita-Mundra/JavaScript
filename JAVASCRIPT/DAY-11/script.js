const URL = "https://jsonplaceholder.typicode.com/todos/1";
const factPara = document.querySelector("#fact");

let promise = fetch(URL);
console.log(promise);

const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response);   //JSON format
    let data = await response.json();
    console.log(data);
}

console.log(getFacts());