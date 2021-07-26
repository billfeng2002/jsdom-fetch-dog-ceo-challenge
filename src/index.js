console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl).then(response=> response.json()).then(json=>{
    dogImages=document.querySelector('#dog-image-container')
    for(const img of json["message"]){
        let image=document.createElement('img')
        image.src=img
        dogImages.append(image)
    }
} )

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl).then(response=> response.json()).then(json=>{
    let dogBreeds=document.querySelector('#dog-breeds')
    for(const breed in json["message"]){
        let breedObj=document.createElement('li')
        breedObj.textContent=breed
        dogBreeds.append(breedObj)
    }
} )

document.addEventListener("click", (event)=>{
    if(event.target.matches("li")){
        event.target.style.color="blue"
    }
})

function filter(){
    let selectObj=document.querySelector('select')
    let letter=selectObj.value
    let dogBreeds=document.querySelector('#dog-breeds')
    for(const listItem of dogBreeds.children){
        if(listItem.textContent[0]==letter){
            listItem.style.display="block"
        }else{
            listItem.style.display="none"
        }
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    let dropdown = document.querySelector('select')
    dropdown.addEventListener("change", ()=>{
        filter()
    })
    filter()
})