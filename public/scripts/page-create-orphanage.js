const map = L.map('mapid').setView([-23.504809, -47.5194263], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remover icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)
})

//fotos
function addPhotoField() {
    //pager o containee de fotos
    const container = document.querySelector('#images')

    //pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //duplicar
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo esta vazio, se sim, não adicionar ao campo de containers
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        console.log()
        return
    }

    //limpar campo antes de adicionar
    input.value = "";

    //adicionar o duplicado pro container
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()

}


//botões Sim e não
function toggleSelect(event) {
    //pegar o botão clicado

    

    //retirar a classe active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

    //colocar a class active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

     //atualizar o meu input hidden com o valkor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')

    input.value = button.dataset.value
}
