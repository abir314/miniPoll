function goToVotePage(){
    model.app.currentPage = 'vote';
    updateView();
}
function addOption(){
    model.options.push({
        text: model.inputs.optionPage.newOption,
        color: 'darkgray',
    });
    model.inputs.optionPage.newOption = '';
    updateView();
}