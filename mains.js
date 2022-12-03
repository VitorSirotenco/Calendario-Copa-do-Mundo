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
            ${creatCard("03/12", "sabado", creatGame("unitedstates", "12:00", "netherlands") + creatGame("argentina", "16:00", "australia"))}
            ${creatCard("04/12", "domingo", creatGame("france", "12:00", "poland") + creatGame("senegal", "16:00", "england") )}
            ${creatCard("05/12", "segunda", creatGame("japan", "12:00", "croatia") + creatGame("brazil", "16:00", "south-korea"))}
            ${creatCard("06/12", "terça", creatGame("morocco", "12:00", "spain") + creatGame("portugal", "16:00", "switzerland"))}             
            </main>
` 

