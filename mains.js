function creatGame(player1, hour, player2){
    return `
    <li>
       <img src="./assets/Logo-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/Logo-${player2}.svg" alt="Bandeira da ${player2}">    
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
            ${creatCard("20/11", "domingo", creatGame("Qatar", "13:00", "Ecuador"))}
            ${creatCard("21/11", "segunda", creatGame("england", "10:00", "iran") + creatGame("senegal", "13:00", "Netherlands") + creatGame("UnitedStates", "16:00", "Wales"))}
            ${creatCard("22/11", "terça", creatGame("argentina", "7:00", "Saudi-Arabia") + creatGame("Denmark", "10:00", "Tunisia") + creatGame("Mexico", "13:00", "poland") + creatGame("france", "16:00", "Australia"))}
            ${creatCard("23/11", "quarta", creatGame("morocco", "7:00", "croatia") + creatGame("germany", "10:00", "japan") + creatGame("spain", "13:00", "costa-rica") + creatGame("belgium", "16:00", "canada"))}
            ${creatCard("24/11", "quinta", creatGame("switzerland", "7:00", "cameroon") + creatGame("Uruguay", "10:00", "South-Korea") + creatGame("Portugal", "13:00", "Ghana") + creatGame("brazil", "16:00", "serbia"))}
            ${creatCard("25/11", "sexta", creatGame("wales", "7:00", "iran") + creatGame("qatar", "10:00", "senegal") + creatGame("netherlands", "13:00", "ecuador") + creatGame("england", "16:00", "unitedstates"))}
            ${creatCard("26/11", "sabado", creatGame("tunisia", "7:00", "australia") + creatGame("poland", "10:00", "saudi-arabia") + creatGame("france", "13:00", "denmark") + creatGame("argentina", "16:00", "mexico"))}
            ${creatCard("27/11", "domingo", creatGame("japan", "7:00", "costa-rica") + creatGame("belgium", "10:00", "morocco") + creatGame("croatia", "13:00", "canada") + creatGame("spain", "16:00", "germany"))}
            ${creatCard("28/11", "segunda", creatGame("cameroon", "07:00", "serbia") + creatGame("South-Korea", "10:00", "ghana") +  creatGame("brazil", "13:00", "switzerland") + creatGame("Portugal", "16:00", "uruguay"))}
            ${creatCard("29/11", "terça", creatGame("ecuador", "7:00", "senegal") + creatGame("netherlands", "10:00", "qatar") + creatGame("iran", "13:00", "unitedstates") + creatGame("wales", "16:00", "england"))}
            ${creatCard("30/11", "quarta", creatGame("tunisia", "7:00", "france") + creatGame("australia", "10:00", "denmark") + creatGame("poland", "13:00", "argentina") + creatGame("saudi-arabia", "16:00", "mexico"))}
            ${creatCard("01/12", "quinta", creatGame("croatia", "07:00", "belgium") + creatGame("canada", "10:00", "morocco") + creatGame("japan", "13:00", "spain") + creatGame("costa-rica", "16:00", "germany"))}
            ${creatCard("02/12", "sexta", creatGame("South-Korea", "12:00", "Portugal") + creatGame("Ghana", "12:00", "Uruguay") + creatGame("Serbia", "16:00", "switzerland") + creatGame("brazil", "16:00", "cameroon"))}             
            </main>
` 

