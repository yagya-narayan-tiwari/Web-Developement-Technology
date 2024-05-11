// #>3.  to make animation on the images placed in page 2 we are going to use locomotive js   

// code directly mil jayega form github account of locomotive js // smooth ke niche likha code copy kiya hai


// note 1 : we are removing this code because the scrolltrigger and logogmotive can"nt run together 

// note 2 : to make the code more redable please seperate the code as good  as you can 



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
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })

    gsap.to(".navpart2 .links", {
        transform: "translateY(-300%)",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })
}
navAnimation();


// nav mai menu m click ka animation => self made///  DONATE M CLICK KA BHI ISI MAI HAI


function menuClickAnimation() {

//    CALLING 

    let menu = document.querySelector("#menu")
    let close = document.querySelector(".close")

    let nav2 = document.querySelector(".nav2");

    let svg = document.querySelectorAll(".svg");
    let link = document.querySelectorAll(".links a");
    let icon = document.querySelectorAll(".icons i");
    let icons = document.querySelector(".icons");
    // console.log(icons)

// APPLYING STYLING ON CLICK EVENT 

    link.forEach((elem) => {
        menu.addEventListener("click", () => {
            elem.style.color = "#f7f7f7"
        })
      
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


    // ### DONATE m click karne par jo animation bane =>

    function donate() {

        let insideNav1 = document.querySelector(".insidenav1")
        let donate = document.querySelector(".donate");
        let donateBtn = document.querySelector(".donatebtn");

        donateBtn.addEventListener("click", () => {
            nav2.style.transform = "translate(0,0)";
            close.style.display = "block";
            menu.style.display = "none";
            icons.style.backgroundColor = "black"

            insideNav1.style.opacity = 0;

// to move the donate page up 

            gsap.to(".donate", {
                transform: "translateY(0%)",
                opacity: 1,
                duration : 0.3,
                delay: 0.2,
            })

            // note : this is not working as i want because i have taken onlu on h3 attibute so stagger properrty in applied in all simutaniously , for good effects of stagger we have to put diferent h3 


            // gsap.from(".donate .donate-up h3", {
            //     y: 150,
            //     opacity: 0,
                // duration : 0.6,
            //     delay: 0.2,
            //     stagger : 0.3
            // })


            // another way 

            // donate.style.opacity = 1;
            // donate.style.transform = "translateY(0%)";

// to move the donate page down and hide it when click on the close icon
            close.addEventListener("click", () => {
               donate.style.opacity = 0;
               insideNav1.style.opacity = 1;
               nav2.style.transform = "translate(0,-100%)"
            })  


// changing the color of ALL when clicked on donate
            icon.forEach((elem) => {
                elem.style.color ="#f7f7f7";
            })
            svg.forEach((elem) => {
                    elem.style.color = "#f7f7f7";
            })
            link.forEach((elem) => {
                    elem.style.color = "#f7f7f7";
            })

        })
    }
    donate();   //calling donate function 


}
menuClickAnimation()




// #donate button m click karne se hone wale effect ki js 


// # bid circle motion animation on the products =>

function imgContainer() {
    let imgCon = document.querySelector('.img-container')

    let buy = document.querySelector("#buy")

    imgCon.addEventListener("mouseenter", () => {
        // console.log("buyyyyyyyy");

        // buy.style.opacity = 1;
        // buy.style.scale = 1;       // we are going to write this using gsap

        gsap.to(buy, {
            scale: 1,
            opacity: 1
        })
    })

    imgCon.addEventListener("mouseleave", () => {

        gsap.to(buy, {
            scale: 0,
            opacity: 0
        })
    })

    imgCon.addEventListener("mousemove", (dets) => {

        // console.log(dets.x)
        // console.log(dets.y)

        gsap.to(buy, {
            left: dets.x - 300,
            top: dets.y - 300
        })
    })
}
imgContainer()


// to make heading animated 

function headingAnimation() {

    gsap.from("#page1 h1", {
        y: 150,
        opacity: 0,
        delay: 0.4,
        duration: 0.6,
        stagger: 0.3
    })

    gsap.from("#page1 .img-container", {
        y: 200,
        opacity: 0,
        delay: 1.5,
        duration: 0.5,
    })


}
headingAnimation();



// cursor 

function cursorAnimation() {

    document.addEventListener("mousemove", (dets) => {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y,
        })
    })


    // putting curosr in page 3 

    // document.querySelectorAll(".child").addEventListener("mouseenter", ()=>{
    //     gsap.to("#cursor", {
    //         transform: "translate(-50%, -50%) scale(1)",
    //     })
    // })
    // document.querySelectorAll(".child").addEventListener("mouseleave", ()=>{
    //     gsap.to("#cursor", {
    //         transform: "translate(-50%, -50%) scale(0)",
    //     })
    // })

    // now to apply the cursir for all child ee have to do this

    let child = document.querySelectorAll(".child")
    // console.log(child)

    child.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            gsap.to("#cursor", {
                transform: "translate(-50%, -50%) scale(1)",
            })
        })
        elem.addEventListener("mouseleave", () => {
            gsap.to("#cursor", {
                transform: "translate(-50%, -50%) scale(0)",
            })
        })
    })

}
cursorAnimation();



















































