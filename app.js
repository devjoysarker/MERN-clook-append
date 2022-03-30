

// const h1 = document.createElement('joy');

// console.log(h1);

const box         = document.querySelector('.box');

const ancrord     = document.createElement('a');
ancrord.classList.add('btn');
ancrord.classList.add('btn-primary');
ancrord.textContent ='sign Up';
ancrord.id = 'sss';
ancrord.setAttribute('href', '#');

console.log(ancrord);


const h1      = document.createElement('h1');

h1.innerText=`We love very much js`;
h1.classList='display-2'
h1.style.color='orange';
h1.style.backgroundColor='black';


const p = document.createElement('p');
p.innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit eaque dolore, corrupti accusantium autem est odio voluptatum at alias';



const a = document.createElement('a');

a.innerText='Read more';
a.classList.add('btn');
a.classList.add('btn-danger');


box.append(ancrord);
box.appendChild(h1);
box.appendChild(p);
box.appendChild(a);



box.removeChild(ancrord);


const h3 = document.createElement('h3');

h3.innerText='insertBefore mathood is help us element move freedom.';

box.insertBefore(h3, p)



const para = document.createElement('p');

const text = document.createTextNode('textNode is powerful methood in add text.');

para.appendChild(text);

console.log(para);