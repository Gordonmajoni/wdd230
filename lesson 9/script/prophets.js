const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets(){
  let response = await fetch(URL);
  if(response.ok) {
    let data = await response.json();
    //console.log(data);
    buildProphetCards(data);
  } else{
    throw  error(response.statusText)
  }
}


function buildProphetCards(data){
  data.prophets.forEach(prophet => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let img = document.createElement('img');
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute .
    
    h2.innerHTML=`${prophet.name} ${prophet.lastname}`;
    //p.innerHTML= `birthplace:${prophet.birthplace}`;
   // img.setAttribute('src', prophet.imageurl);

  //  img.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.append(h2);
    //card.appendChild(p);
    //card.append(img);
    card.append(cards);

 });
}
getProphets();

