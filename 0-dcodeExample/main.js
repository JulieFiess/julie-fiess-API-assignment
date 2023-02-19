async function loadUsers() {//Return our array of users
    

    //1. Same function using .then instead of async/await
    // fetch("data/users.json").then(response => {

    // });

    //2. Same function using async/await the long version
    // const response = await fetch("data/users.json");
    
    // const users = await response.json();

    // return users;

    //3. Same function the short way
    return (await fetch("data/users.json")).json();
}

document.addEventListener("DOMContentLoaded", async () => {
    let users = [];

    try {
        users = await loadUsers();
    } catch (e) {
        console.log("Error!");
        console.log(e);
    }

    console.log(users);
});