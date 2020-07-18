
import store from "../store.js"
import imageService from "../services/image-service.js";


function drawImage() {
    let template = document.body.style.backgroundImage = `url(${store.State.image})`
    document.getElementById("bg-image").style.backgroundImage = template

}

export default class ImageController {

    constructor() {
        imageService.getImage()
        store.subscribe("image", drawImage)
    }


}
