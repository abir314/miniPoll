function updateViewOptionPage(){
    
    document.getElementById('app').innerHTML = /*html*/ `
        <button onclick="goToVotePage()">Til stemme siden</button>
        <hr/>
        Nåværende alternativer:
        <ul>
            ${createOptionsHtml()}
        </ul>
        Nytt alternativ: <br/>
        <input 
            type="text" 
            oninput="model.inputs.optionPage.newOption = this.value"
            value="${model.inputs.optionPage.newOption}"
            />
        <button onclick="addOption()">Legg till</button>
    `;
    
}

function createOptionsHtml(){
    let html = '';
     for(let i = 0; i < model.options.length; i++) {
         let option = model.options[i];
         html += /*html*/`
         <li>
            ${option.text}
         </li>
         `;
     }
 
 
    return html;
 }