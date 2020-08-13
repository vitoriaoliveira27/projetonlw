//Procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField) //Quando clicar o botão
//Executar uma ação
function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    });

    //Colocar na página
    document.querySelector("#schedule-itens").appendChild(newFieldContainer)

}