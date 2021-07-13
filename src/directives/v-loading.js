
import loadingUrl from "../assets/loading.svg"
import styles from "./loading.module.less"
function getLoadingImage(el){
    return el.querySelector("img[data-role=loading")
}
function createLoadingImg(){
    const img = document.createElement("img")
    img.dataset.role = "loading"
    img.src= loadingUrl
    img.className = styles.loading
}
export default function(el,binding){
    const curImg = getLoadingImage(el);
    if(binding.value){
        if(!curImg){
            const img = createLoadingImg();
        }
    }else{
        if(curimg){
            curImg.remove()
        }
    }
}