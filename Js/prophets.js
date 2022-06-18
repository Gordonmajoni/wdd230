const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
fetch(requestURL)
  .then(response=>response.json()) 
    
  .then(data => console.log(data));
    const prophets = jsonObject['prophets'];
    data.prophets.forEach(data);

  function displayProphets(data) {
    // Create elements to add to the document 
    data.prophets.forEach(prophet=>{
  

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    img.setAttribute('src',${prophet.imageurl});
    h2.innerHTML=`location of birth:${birthplace}`;
    p.innerHTML='alt', `Prophet  ${prophet.name} ${prophet.lastname}`;
    img.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.append(h2);
    card.appendChild(p);
    card.append(img);
    card.append(card);

  })}

getProphets();





