// Global list of Persons
let Users = [];

// Objects
function Person(name,email,bd,age){
    this.name = name;
    this.email = email;
    this.bd = bd;
    this.age = age;
}

function sort(e){

    Users.sort((a, b) => (a[e.id].toUpperCase() > b[e.id].toUpperCase()) ? 1 : -1)
    clearTable();
    updateTable();
}
function calc_age(bdString) {
    const today = new Date();
    const birthDate = new Date(bdString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();


    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function clearTable(){
    document.getElementById('table-body').innerHTML='';
}

function updateTable(){
    const table = document.getElementById('table-body');
    Users.map(user =>{
        let row = document.createElement('tr');

        // name
        let cell = document.createElement('td');
        cell.innerHTML = user.name;
        row.appendChild(cell);

        // email
        cell = document.createElement('td');
        cell.innerHTML = user.email;
        row.appendChild(cell);

        // birthday
        cell = document.createElement('td');
        cell.innerHTML = user.bd;
        row.appendChild(cell);

        // age
        cell = document.createElement('td');
        cell.innerHTML = user.age;
        row.appendChild(cell);
        
        table.appendChild(row);
    }); 
}

function newUser(){
    clearTable();

    const name = document.getElementById('InputName').value;
    const email = document.getElementById('InputEmail').value;
    const birthdayString = document.getElementById('InputBirthday').value;
    const age = calc_age(birthdayString);


    Users.push(new Person(name, email, birthdayString, age));
    updateTable();
    document.getElementById('main-form').reset();
}

