//opções do mapa

const options = {
	dragging: false,
	touchZoom: false,
	doubleClickZoom: false,
	scrollWheelZoom: false,
	zoomControl: false
}
const map = L.map("mapid", options).setView([-23.5630845, -46.65777049], 17);



//cria camada com os gráficos do mapa

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criar ícone do marcador
const icon = L.icon({
	iconUrl: "./public/images/map-marker.svg",
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2],
});

//criar marcador

L.marker([-23.5630845, -46.6577704], {
	icon,
})
	.addTo(map)

	/*image gallery*/

	function selectImage(event){
		const clickedOn = event.currentTarget
		//remover todas as classes .active
		const buttons = document.querySelectorAll(".images button")
		buttons.forEach(removeActiveClass)
		function removeActiveClass(button){
			button.classList.remove("active")
		}	
		//selecionar a imagem clicada
		const image = clickedOn.children[0]
		const imageContainer = document.querySelector('.orphanage-details > img')
		//atualizar o container de imagem
		imageContainer.src = image.src
		//adicionar a classe active no botão que foi clicado
		clickedOn.classList.add('active')
	}
