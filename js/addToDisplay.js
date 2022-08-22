const playerArr = [];

function showSeletedPlayer(player){
    
    const tableBody = document.getElementById('player-list');
    tableBody.innerHTML = '';
    for(i=0; i<player.length; i++){
        // warning message selecting more than 5 players
        if(player.length>4){
            alert('Selection Limit exceeded!');
            return;
        }else{
            const playerName = player[i];
        
        // create tr and dispaly on table body
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${i+1}</td>
        <td>${playerName}</td>`;
        tableBody.appendChild(tr);
        }
    }
}

function addToCart(element){
    const playerName = element.parentNode.children[0].innerText;
    playerArr.push(playerName);
     
    // showing player
    showSeletedPlayer(playerArr); 
    // disable button after click
    element.disabled = true;
    // show selected player number
    document.getElementById('player-number').innerText = playerArr.length;
}