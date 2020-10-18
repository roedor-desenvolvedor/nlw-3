//criar espaço onde será adicionado o mapa

const map = L.map('mapid').setView([-23.5630845, -46.65777049], 17);

//***EXPLICANDO O CÓDIGO***//
//Objeto L (leaflet), função map(cria mapa no espaço designado).visualização([lat, long], zoom)//


//criar camada do mapa

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//criar ícone do marcador
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

let marker;

//criar e adicionar marcador
map.on('click', function (event) {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    //remove previous icon
    marker && map.removeLayer(marker)
    //essa função checa se marker existe e, se existir, remove
    //add icon layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})

//adicionar campo de fotos

function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o campo a ser duplicado .new-upload
    const newUpload = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem adicionada
    const newUploadClone = newUpload[newUpload.length - 1].cloneNode(true)
    //verificar se o campo está vazio. se o input estiver vazio, não clonar o container
const input = newUploadClone.children[0]
if (input.value === ""){
    return
}
    //limpar o texto do campo antes de adicionar
    newUploadClone.children[0].value=""
    //adicionar o clone ao container de imagens
    container.appendChild(newUploadClone)
}

function deleteField(event){
    const span = event.currentTarget
    const photoUrl = document.querySelectorAll('.new-upload')
    if (photoUrl.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        //nodo pai: div new-upload; nodo filho na primeira posição: input
    } else {
    //deletar o campo inteiro
    span.parentNode.remove();
    }


}

//selecionar sim ou não

function toggleSelect(event){
    //pegar o botão clicado

    //verificar o valor

   

    //retirar classe active do botão que não foi clicado
    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active')
    })

    //adicionar classe .active ao botão clicado
    const button = event.currentTarget
    button.classList.add('active')

     //atualizar o input com o valor selecionado
     const input = document.querySelector('[id="opening_weekends"]')
     input.value = button.dataset.value
    
}


