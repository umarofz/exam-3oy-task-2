let elList = document.querySelector(".list");
let newLi = document.createElement("li");
elList.appendChild(newLi);
let users = [
    {
        name: "Avazbek",
        age: "25"
    },
    {
        name: "Umid",
        age: "21"
    },
    {
        name: "O'ktam",
        age: "22"
    },
    {
        name: "Valijon",
        age: "19"
    },
    {
        name: "Sarvar",
        age: "27"
    },
    {
        name: "Sardor",
        age: "17"
    },
    {
        name: "Toxir",
        age: "16"
    }
]



function ageGreaterThan(array, minAge) {
    let newArray = [];

    for (const item of array) {
        if (item.age >= minAge) {
            newArray.push(item.name);
        }
    }

    return newArray;
}

newLi.textContent = ageGreaterThan(users, 22);


