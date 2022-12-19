function creatGame(player1, hour, player2){
    return `
    <li>
       <img src="./assets/logo-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/logo-${player2}.svg" alt="Bandeira da ${player2}">    
    </li>
    `
}

function creatCard(date, day, games){
    return `
     <div class="card">
                    <h2>${date} <span>${day}</span></h2>
                    <ul>
                    ${games}                       
                    </ul>
                    </div> 
    `
}

document.querySelector("#app").innerHTML = `
 <header>
            <img src="./assets/logo.svg" alt="Logo NWL">
            </header>
            <main id="cards">  
            ${creatCard("18/12", "domingoo", creatGame("argentina", "12:00", "france") )}         
            </main>
` 

