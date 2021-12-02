
const carouselDiv = document.getElementById('team-carousel')
const firstItemDiv = document.getElementById('team-item-1')

async function getDB(){

    let res = await fetch("https://my-json-server.typicode.com/VittorGuih/json-teste/db", {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => data)
        .then(data => mapItems(data))
}

function mapItems(data){

    data.Course.map((e, i) => {
        getTeam(e, i)
    })

    slickGenerator()
}

function getTeam(e, i){
    const itemDiv = document.createElement('div')
    itemDiv.id = "team-item-"+(i+1)
    itemDiv.classList.add('team__carousel-item')

    carouselDiv.appendChild(itemDiv)

    renderImage(e.img[0].url, itemDiv.id)
    addName(e.name, itemDiv.id)
    addJob(e.job, itemDiv.id)

}

function renderImage(link, id){
    [img, destinationDiv] = elementGenerator('img', id)

    img.classList.add('img-fluid')
    img.src = link
    destinationDiv.appendChild(img)
}

function addName(name, id){
    [span, destinationDiv] = elementGenerator('span', id)
    
    span.classList.add('team__carousel-item--name')
    span.innerText = name
    
    destinationDiv.appendChild(span)
}

function addJob(job, id){
    [span, destinationDiv] = elementGenerator('span', id)
    
    span.innerText = job
    span.classList.add('team__carousel-item--job')

    destinationDiv.appendChild(span)
}

function elementGenerator(el, id){
    const element = document.createElement(el)
    const destinationDiv = document.getElementById(id)

    return [element, destinationDiv]
}

function slickGenerator(){
    $('.team__carousel').slick({
        //autoplay: true,
        infinite: true,
        arrows: true,
        autoplaySpeed: 500,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            {
            breakpoint: 1280,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            }
        ],
        
      
      //prevArrow: '<button type="button" class="test btn"></button>,'
    });

    $('.slick-dots').addClass("position-static")
    $('.team__carousel-item').addClass("slick-item-adjust")
    $('.slick-next').addClass('slick-next-arrow-adjust')
  }

getDB()