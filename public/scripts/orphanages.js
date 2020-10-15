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

//popup overlay
const popup = L.popup({
	closeButton: false,
	className: "map-popup",
	minWidth: 240,
	minHeight: 240,
}).setContent('Abrigo Reviver <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

//criar marcador

L.marker([-23.5630845, -46.6577704], {
		icon
	}).addTo(map)
	.bindPopup(popup)


//***EXPLICANDO O CÓDIGO***//
//função marker adiciona um marcador nas coordenadas especificadas no array
//.addTo(map): adiciona esse array ao mapa
//bindPopup: função que liga um popup com o texto usado às coordenadas declaradas no array
//openPopup faz com que o marcador abra o popup
