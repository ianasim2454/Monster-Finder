import {monsters} from './monsters.js';

for(let monster of monsters){
   showMonsters(monster);
}


function showMonsters(monster){
  //Create elements with DOM:
  const monsterDiv = document.createElement('div');
  monsterDiv.className = "monster";

  //img
  const img = document.createElement('img');
  img.src = `https://robohash.org/${monster.id}?set=set2`;
  img.alt = monster.name;

  //name
  const name = document.createElement('p');
  name.className = "name";
  name.innerText = monster.name;

  //email
  const email = document.createElement('p');
  email.className = "email";
  email.innerText = monster.email;

  monsterDiv.append(img, name, email);
  console.log(monsterDiv);

  document.querySelector('.monsters').append(monsterDiv);
}


notFound();
function notFound(){
  const notFound = document.createElement('div');
  notFound.className = "p-5 not-found";
  notFound.style = "display: none";

  const span = document.createElement('span');
  span.innerText = "404";
  const h1 = document.createElement('h1');
  h1.innerText = "🧟‍♂️ No Monster Found 🧟‍♂️";

  notFound.append(span, h1);
  console.log(notFound);
  document.querySelector('.monsters').append(notFound);
}

//search monster:
document.querySelector('#search-monster').addEventListener('keyup',(e)=>{
    const keyWord = e.target.value.toLowerCase();
    // console.log(e);
    // console.log(keyWord);

    const monsters = document.querySelectorAll('.monster');
    let notFound = true;
    for(let monster of monsters){
      console.log(monster);
      const name = monster.children[1].innerText.toLowerCase();
      const email =  monster.children[2].innerText.toLowerCase();
      console.log(name, email);

      if(name.includes(keyWord) || email.includes(keyWord)){
        monster.style.display = 'block';
        notFound = false;
      }else{
        monster.style.display = 'none';
      }
    }

    if(notFound){
      document.querySelector('.not-found').style.display = 'block';
    }else{
      document.querySelector('.not-found').style.display = 'none';
    }
});


document.querySelector('#search-monster-form').addEventListener('submit',(e)=>{
  e.preventDefault();
});





