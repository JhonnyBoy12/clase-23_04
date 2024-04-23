import { robots } from "./robots.js";

console.log(robots[0].series);
console.log(robots[0].id);
console.log(robots[0].name);


const{series, id, name}= robots[0];


console.log("-----------------");

console.log(`La serie es: ${series}`);
console.log(`El ides: ${id}`);
console.log(`El nombre es: ${name}`);

 

///funcion FIND/////-
const getRobotById =(id='013')=>{
    return robots.find((robot)=>{
        return robot.id === id;
    });

}
let robot=getRobotById("001")
console.log(robot);


//FUNCION FILTER trae mas de 1 dato///

const getRobotBySeries=(series=1)=>{
    return robots.filter((robot)=>{
        return robot.series===series;
    });
}

robot= getRobotBySeries(1);
console.table(robot);


//FUNCION map recorre el arreglo per devolver un arreglo nuevo

const createCard= (series,id,name,weapon,avatar,sprite1)=>{
    return`
    <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card">
        <img src="${avatar}" class="card-img-top" alt="${name}">
        <img src="${sprite1}" class="card-img-top" alt="${name}">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p>${series}</p>
        <p>${weapon}</p>
        </div>
    
    </div>
    </div>
    `;
}

const robotCardsRow=document.getElementById('robotCardsRow');
    robots.map ((robot)=>{
        const card=createCard(robot.series,robot.id,robot.name,robot.weapon,robot.avatar,robot.sprite1);
        robotCardsRow.innerHTML += card;
    });