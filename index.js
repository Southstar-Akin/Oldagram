const like = document.getElementsByClassName('like')
const likeS = document.getElementsByClassName('likes')
let mainSection = document.getElementById("main")
const mage = document.getElementsByClassName('mage')
const heart = document.getElementsByClassName('lick')
const darkMode = document.getElementById("logo")
const body = document.getElementById('main')
const nav = document.getElementById('nav')

let dark = false
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

function render() {
    for (i = 0; i < posts.length; i++){
        mainSection.innerHTML += `<section class="post">
        <div class="profile">
            <img src="${posts[i].avatar}" alt="" class="profile-pic">
            <div class="det">
                <span class="name">${posts[i].name}</span>
                <span class="location">${posts[i].location}</span>
            </div>
        </div>
        <div class="main-pic">
            <img src="${posts[i].post}" alt="${posts[i].name}" class="mage">
            <svg width="75" height="75" viewBox="0 0 27 25" fill="white" xmlns="http://www.w3.org/2000/svg" class="lick none"><path d="M3.84587 13.5811L12.7963 23.2159C13.2572 23.712 14.0424 23.712 14.5033 23.2159L23.4537 13.5811C25.9149 10.9318 25.9149 6.63634 23.4537 3.987C20.9926 1.33767 17.0022 1.33767 14.5411 3.987L14.5033 4.02764C14.0424 4.52375 13.2572 4.52375 12.7963 4.02764L12.7585 3.987C10.2974 1.33767 6.30704 1.33767 3.84587 3.987C1.38471 6.63634 1.38471 10.9318 3.84587 13.5811Z" stroke-width="2.32996" stroke="white"/></svg>
        </div>
        <div class="bottom">
            <div class="icons">
                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="like"><path d="M3.84587 13.5811L12.7963 23.2159C13.2572 23.712 14.0424 23.712 14.5033 23.2159L23.4537 13.5811C25.9149 10.9318 25.9149 6.63634 23.4537 3.987C20.9926 1.33767 17.0022 1.33767 14.5411 3.987L14.5033 4.02764C14.0424 4.52375 13.2572 4.52375 12.7963 4.02764L12.7585 3.987C10.2974 1.33767 6.30704 1.33767 3.84587 3.987C1.38471 6.63634 1.38471 10.9318 3.84587 13.5811Z" stroke-width="2.32996"/></svg>
                <svg width="37" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:relative; top:-7; "><path d="M26.8411 27.9928C26.6693 27.9684 26.4929 27.9893 26.3355 28.0529C24.5272 28.7829 22.5463 29.1667 20.5 29.1667C12.9521 29.1667 6.83334 23.9433 6.83334 17.5C6.83334 11.0567 12.9521 5.83333 20.5 5.83333C28.0479 5.83333 34.1667 11.0567 34.1667 17.5C34.1667 19.9892 33.2522 22.359 31.5793 24.3322C31.399 24.5449 31.3665 24.824 31.4944 25.0628L33.5759 28.951L26.8411 27.9928ZM34.8804 30.6151C35.5556 30.7111 36.0822 30.1242 35.7977 29.5928L33.2511 24.8358C34.9501 22.6882 35.875 20.1527 35.875 17.5C35.875 10.2513 28.9914 4.375 20.5 4.375C12.0086 4.375 5.12501 10.2513 5.12501 17.5C5.12501 24.7487 12.0086 30.625 20.5 30.625C22.708 30.625 24.8514 30.227 26.8199 29.4683L34.8804 30.6151Z" fill="black"/></svg>
                <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.65797 9.54347L11.8283 19.3097C11.9424 19.8236 12.6255 19.9344 12.8964 19.4831L22.8075 2.96445C23.0405 2.57621 22.7608 2.08228 22.308 2.08228H2.52787C1.98708 2.08228 1.73819 2.75508 2.14879 3.10702L9.65797 9.54347ZM9.65797 9.54347L22.0933 2.70404"  stroke-width="2.32996"/></svg>
            </div>
            <span class="likes">
                ${posts[i].likes} likes
            </span>
            <div class="caption">
                <span class="username">
                    ${posts[i].username}
                </span>
                <span class="main-cap">
                    ${posts[i].comment}
                </span>
            </div>
        </div>
        </section>
        `;
    }
}
function normal(){
    if (dark){
        like[0].classList.add("unliked-dark")
        like[1].classList.add("unliked-dark")
        like[2].classList.add("unliked-dark")
        like[0].classList.remove("unliked")
        like[1].classList.remove("unliked")
        like[2].classList.remove("unliked")
        body.classList.add('body-dark')
        body.classList.remove('invertsvg')
    }else{
        like[0].classList.remove("unliked-dark")
        like[1].classList.remove("unliked-dark")
        like[2].classList.remove("unliked-dark")
        like[0].classList.add("unliked")
        like[1].classList.add("unliked")
        like[2].classList.add("unliked")
        body.classList.remove('body-dark')
        body.classList.add('invertsvg')
    }
     }

function add(){

    normal()

    like[0].addEventListener("click", () =>{liking(0)})

    like[1].addEventListener("click", () =>{liking(1)})

    like[2].addEventListener("click", () => {liking(2)})

    mage[0].addEventListener("dblclick", () => {likeimage(0)})

    mage[1].addEventListener("dblclick", () => {likeimage(1)})

    mage[2].addEventListener("dblclick", () => {likeimage(2)})

    darkMode.addEventListener("click", () => {
        if(dark){
            dark = false
        }else{
            dark = true
        }
        body.classList.toggle('body-dark')
        normal()
        darkMode.classList.toggle('body-dark')
        nav.classList.toggle('body-dark')
    })

}
function liking(i){

    if (!posts[i].liked) {
        like[i].classList.toggle("liked")
        posts[i].likes++
        likeS[i].textContent = `${posts[i].likes} likes`
        posts[i].liked = true
    }
    else{
        like[i].classList.toggle("liked")
        posts[i].likes--
        likeS[i].textContent = `${posts[i].likes} likes`
        posts[i].liked = false
    
}
}

function likeimage(i){
    heart[i].classList.toggle('none');
    setTimeout(() => {
    heart[i].classList.add('none')
    }, 1500);
    liking(i)
}

render()
add()
