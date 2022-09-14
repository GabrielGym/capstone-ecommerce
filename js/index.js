for (let i = 0; i <= data.length; i++) {
    document.querySelector(".principal").insertAdjacentHTML("afterbegin", `
    <div class="cards">
        <img src="${data[i].img}" alt="" class="imgcard">
        <h3 class="h3card">${data[i].tag}</h3>
        <h2 class="h2card"><strong>${data[i].nameItem}</strong></h2>
        <p class="pCard">${data[i].description}</p>
        <h2 class="h2ValueCard">R$${data[i].value}</h2>
            <form action="">
                <button class="buttonCard">${data[i].addCart}</button>
            </form>
    </div>`
    )
}

let adicionar = document.getElementsByClassName("buttonCard")

adicionar.addEventListener(`click`, function(event){

})