

// locomotive + scrolltigger ek sath =>

function locomotiveAmination() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotiveAmination();


// # nav animation =>


function navAnimation() {
    gsap.to(".navpart1 svg", {
        transform: "translateY(-215%)",
        scrollTrigger: {
            trigger: "#shoppage1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })

    gsap.to(".navpart2 .links", {
        transform: "translateY(-300%)",
        scrollTrigger: {
            trigger: "#shoppage1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })
}
navAnimation();


// nav mai menu m click ka animation => self made
function menuClickAnimation() {

    let menu = document.querySelector("#menu")
    let close = document.querySelector(".close")

    let nav2 = document.querySelector(".nav2");

    let svg = document.querySelectorAll(".svg");
    let link = document.querySelectorAll(".links a");
    let icon = document.querySelectorAll(".icons i");
    let icons = document.querySelector(".icons");
    // console.log(icons)

    link.forEach((elem) => {
        menu.addEventListener("click", () => {
            elem.style.color = "#f7f7f7"
        })
        // for hover effect in nav insisde time 
        // elem.addEventListener("mouseenter",()=>{
        //     elem.style.color ="#5b5b5b"
        // })
        // elem.addEventListener("mouseout",()=>{
        //     elem.style.color ="#f7f7f7"
        // })
    })
    icon.forEach((elem) => {
        menu.addEventListener("click", () => {
            elem.style.color = "#f7f7f7"
        })
    })
    svg.forEach((elem) => {
        menu.addEventListener("click", () => {
            elem.style.color = "#f7f7f7"
        })
    })

    link.forEach((elem) => {
        close.addEventListener("click", () => {
            elem.style.color = "black"
        })
    })
    icon.forEach((elem) => {
        close.addEventListener("click", () => {
            elem.style.color = "black"
        })
    })
    svg.forEach((elem) => {
        close.addEventListener("click", () => {
            elem.style.color = "black"
        })
    })


    // console.log(menu)
    menu.addEventListener("click", () => {
        close.style.display = "block";
        menu.style.display = "none";
        nav2.style.transform = "translate(0,0)";
        icons.style.backgroundColor = "black"
    })

    close.addEventListener("click", () => {
        close.style.display = "none";
        menu.style.display = "block"
        nav2.style.transform = "translate(0,-100%)";
        icons.style.backgroundColor = "#f7f7f7"
    })
}
menuClickAnimation()


// shop heading animation 

gsap.from("#shoppage1 h1", {
    y: 150,
    opacity: 0,
    delay: 0.3,
    duration: 0.4,
    stagger: 0.3
})
gsap.from("#shoppage1 p", {
    y: 150,
    opacity: 0,
    delay: 0.8,
    duration: 0.4,
    stagger: 0.3
})


// down arrow m click se extra details aane ke liye 

let downArrow = document.querySelector(".downarrow");
let downDets = document.querySelector(".downDets");
let shopPage1 = document.querySelector("#shoppage1");
let rPage1 = document.querySelector(".r-page1")
let shopPage2 = document.querySelector("#shoppage2")

// note: when we are going use toggle() property we have tp mention the css with class according to the effect that we want 

downArrow.addEventListener("click",()=>{
   downArrow.classList.toggle("rotated");  //kuchh naya sikhaaaaaa
   downDets.classList.toggle("displayDownDets");
   rPage1.classList.toggle("blur")
   shopPage2.classList.toggle("blur")

})