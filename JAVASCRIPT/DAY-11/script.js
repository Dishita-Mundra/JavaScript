const URL = "https://dogapi.dog/docs/api-v2";

let promise = fetch(URL);
console.log(promise);

const getFacts = async () => {
    let promise = await fetch(URL);
    console.log(promise);
}