function updateViewVotePage(){
    document.getElementById('app').innerHTML = /*html*/ `
        <button onclick="goToOptionsPage()">Til alternative siden</button>
        <hr/>
        <ul>
            ${createVoteHtml()}
        </ul>
    `;

}

function createVoteHtml(){
   let html = '';
    for(let i = 0; i < model.options.length; i++) {
        let option = model.options[i];
        let widthCount = model.options[i].voteCount || 0;
        let width = (widthCount/100)*200;
        html += /*html*/`
        <li>
            <button 
            onclick="vote(${i})"
            style="width: 100px; background-color: ${option.color}"
            >
            ${option.text}
            </button><br/><br/>
            <div style="width: 200px; height: 10px; background-color: darkgoldenrod;">
            <div style="width: ${width}px; height: 10px; background-color: aqua;  font-size: xx-small; ">${model.options[i].voteCount || 0}</div>
            </div><br/>
            
        </li>
        `;
    }


   return html;
}