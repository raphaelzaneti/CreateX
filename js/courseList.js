
let coursesArray

const image = document.createElement('img')
const link = document.createElement('a')

const coursesArea = document.getElementById('courses-area')

async function getDB(){

        let res = await fetch("https://my-json-server.typicode.com/VittorGuih/json-teste/db", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => data)
            .then(data =>{
                getCourses(data)
            })
}

function getCourses(data){
    coursesArray = data.Course
    console.log(coursesArray)
    createCoursesCards(coursesArray)
}

function createCoursesCards(array){

    let card = array.map(e => {
        let id = e.id+"-"+e.courseName
        
        drawCard(id)
        addImage(e.img[0], 'course-'+id)
        addCourse(e.courseName, 'course-'+id)
        addCourseDescription(e.description, 'course-'+id)
        addCourseData(id)
        addCoursePrice(e.price, 'course-'+id)
        addAuthorName(e.name, 'course-'+id)
    })
}

function drawCard(id){
    const div = document.createElement('div')
    div.id = 'course-'+id
    div.classList.add('card')
    div.classList.add('courses__carousel-item')
    coursesArea.appendChild(div)

}

function addImage(imgObj, id){
    let card = document.getElementById(id)

    const img = document.createElement('img')
    img.classList.add('img-fluid')
    img.src = imgObj.url
    img.alt = imgObj.title
    card.appendChild(img)
}

function addCourse(course, id){
    let card = document.getElementById(id)

    const span = document.createElement('span')
    span.innerText = course
    switch(course){
        case "Marketing":
            span.classList.add('courses__carousel-item--badge-mkt')
            break;
        case "HR & Recruting":
            span.classList.add('courses__carousel-item--badge-hr')
            break;
        case "Management":
            span.classList.add('courses__carousel-item--badge-manag')
            break;
        case "Design":
            span.classList.add('courses__carousel-item--badge-design')
            break;
    }
    span.classList.add('badge')
    span.classList.add('courses__carousel-item--badge')
    card.appendChild(span)
}

function addCourseDescription(course, id){
    let card = document.getElementById(id)

    const h5 = document.createElement('h5')
    h5.innerText = course
    h5.classList.add('courses__carousel-item--course')
    card.appendChild(h5)
}

function addCourseData(id){
    const div = document.createElement('div')
    let card = document.getElementById('course-'+id)
    div.id = 'course-'+id+'-description'
    div.classList.add('courses__carousel-item--description')
    card.appendChild(div)
}

function addCoursePrice(price, id){
    let description = document.getElementById(id+'-description')

    const span = document.createElement('span')
    span.innerText = "$ "+price
    span.classList.add('courses__carousel-item--price')
    description.appendChild(span)
}

function addAuthorName(name, id){
    let description = document.getElementById(id+'-description')

    const span = document.createElement('span')
    span.innerText = " | by "+ name
    span.classList.add('courses__carousel-item--author')
    description.appendChild(span)
}

getDB()