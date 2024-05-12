
// so the problem was , we were not using the lococmotive and scrolltrigger tht why the cursor was making problem

// #cursor problem goooonnneeee

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


}

locomotiveAmination()



function cursorAnime() {
    document.addEventListener("mousemove", (dets) => {
        // console.log(dets)
        gsap.to(".cursor", {
            left: dets.x,
            top: dets.y,
            opacity: 1,
        })
    })
}
cursorAnime();




// jo image amination hai usko try kar raha hu 

function imageAmine() {
    let div = document.querySelectorAll(".div");
    div.forEach((dets) => {
        // console.log()
        dets.addEventListener("mouseenter", () => {
            dets.childNodes[5].style.opacity = 1;
            dets.childNodes[1].style.transform = "translateX(2.5vw)"  // for text motion
            dets.childNodes[1].style.opacity = 0.5;  // for date motion
            dets.childNodes[3].style.opacity = 0.5;

        })
        dets.addEventListener("mouseleave", () => {
            dets.childNodes[5].style.opacity = 0;
            dets.childNodes[1].style.transform = "translateX(0vw)" //for text motion
            dets.childNodes[1].style.opacity = 1; //for date motion
            dets.childNodes[3].style.opacity = 1;

        })
        dets.addEventListener("mousemove", (val) => {
            // dets.childNodes[5].style.left = val.x + "px"
            // dets.childNodes[5].style.top = val.y + "px"
            // console.log(val)
            gsap.to(dets.childNodes[5], {
                left: val.x,
                top: val.y - 400,
            })
        })
    })

}
imageAmine()


// #######################################    heading anime 

function headingAnime() {
    gsap.from(".h1", {
        y: 100,
        duration: 0.6,
        delay: 1.5,
        stagger: 0.3,
        opacity: 0,
    })

    gsap.from(".h2 h1", {
        y: 100,
        duration: 0.6,
        delay: 1.8,
        stagger: 0.3,
        opacity: 0,
    })
    gsap.from(".h2 h3", {
        y: -40,
        duration: 0.5,
        delay: 1.9,
        stagger: 0.3,
        opacity: 0,
    })


    gsap.from(".middle h3", {
        y: -40,
        duration: 0.6,
        delay: 2,
        stagger: 0.3,
        opacity: 0,
    })

    // #icons

    gsap.from("#bottom-icon h3", {
        x: 10,
        duration: 0.6,
        delay: 2.1,
        opacity: 0,
    })

    // footer ke upar jo subdcribe wala tag hai 


    // doubt : yaha par ye effect lagana hai ki tab m scroll karke page m pahuchu tab vo animate ho 
    gsap.from(".page3down h3", {
        x: 10,
        duration: 0.6,
        delay: 2.5,
        opacity: 0,
    })

    // #down arrow icon 
    gsap.from(".arrow i", {
        y: 5,
        duration: 0.5,
        delay: 2.2,
        opacity: 0,
    })



    //@@@@@@@@@@@ nav m logo and menu ko animation 


    gsap.from("#nav h3", {
        y: 30,
        duration: 0.5,
        delay: 1.7,
        opacity: 0,
    })
    gsap.from("#nav a", {
        y: 30,
        duration: 0.5,
        delay: 1.7,
        opacity: 0,
    })









}
headingAnime();


// ########################   LOADING PAGE   #############


function loadingPageAnime() {
    document.addEventListener("DOMContentLoaded", () => {
        let loadingPage = document.querySelector("#loading-page")
        let loader = document.querySelector(".loader")
        let loaderPercentage = document.querySelector(".percentage")
        let main = document.querySelector("#main")




        function updateLoader(percentage) {
            loader.style.width = `${percentage}%`
            loaderPercentage.innerHTML = `${percentage}%`

            if (percentage === 100) {

                loadingPage.style.transform = `translate(0 , -100%)`;
                // yahi se karna h main ki display ka issu hai 

            }
        }

        let percentage = 0;

        const percentageInterval = setInterval(() => {
            percentage += 5;
            updateLoader(percentage);

            if (percentage >= 100) {

                clearInterval(percentageInterval);

            }


        }, 50);


    })

}
loadingPageAnime();



// function loadingPageAnime() {
//     document.addEventListener("DOMContentLoaded", () => {
//         let loadingPage = document.querySelector("#loading-page")
//         let loader = document.querySelector(".loader")
//         let loaderPercentage = document.querySelector(".percentage")
//         let main = document.querySelector("#main")




//         function updateLoader(percentage) {
//             loader.style.width = `${percentage}%`
//             loaderPercentage.innerHTML = `${percentage}%`

//             if (percentage === 100) {

//                 loadingPage.style.transform = `translate(0 , -100%)`;
//                 // yahi se karna h main ki display ka issu hai 

//             }
//         }

//         let percentage = 0;

//         const percentageInterval = setInterval(() => {
//             percentage += 5;
//             updateLoader(percentage);

//             if (percentage >= 100) {

//                 clearInterval(percentageInterval);

//             }


//         }, 50);


//     })

// }
// loadingPageAnime();


// #########  TIME CHANGING ##########

function clockAtBottom() {

    function updateTime() {
        const time = new Date();
        let hours = time.getHours().toLocaleString();
        let min = time.getMinutes();

        let ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;
        hours = hours ? hours : 12;


        hours = hours < 10 ? "0" + hours : hours;
        min = min < 10 ? "0" + min : min;

        let timestring = hours + ":" + min + " " + ampm;

        document.querySelector(".time").innerHTML = timestring;

    }

    setInterval(updateTime, 1000);

}
clockAtBottom();


// @@@@@@@@@@@@@@     NAV-DETAILS ANIMATION  #  menu clicked



function menuClick() {

    let menu = document.querySelector("#menu");

    let navDets = document.querySelector(".nav-dets");
    menu.addEventListener("click", () => {

        event.preventDefault(); //this was important

        navDets.style.transform = "translateY(0)";
        menu.style.display = "none";

        gsap.from(".nav-dets a", {
            y: -20,
            duration: 0.2,
            stagger: 0.08,
            opacity: 0,
        })
    })


    gsap.to(".nav-dets", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })
    gsap.to("#menu", {
        display: "block",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })
}
menuClick()