function loaderanimation() {
    var tl = gsap.timeline();
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5

    });
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {

            var timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            setInterval(function () {
                if (grow < 100) {
                    timer.innerHTML = grow++
                }
                else {
                    timer.innerHTML = grow;
                }
            }, 33)
        }

    });
    tl.to(".line h2", {
        opacity: 1,
        animationName: "anime",
        delay: -0.5
    });
    tl.to("#loader", {
        opacity: 0,
        duration: 0.5,
        delay: 3.6
    });
    tl.from("#page1", {
        y: 1600,
        delay: 0.2,
        ease: Power4,
        duration: 0.6
    });
    tl.from("#nav",{
        opacity:0

    })
    tl.from("#hero h1,#hero2 h1,#hero3 h2,#hero4 h1", {
        y: 120,
        
        stagger:0.2,
    });

}
loaderanimation();

function crsr(){
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y
        })
    })
    Shery.makeMagnet("#nav-part2 h4 ,#nav svg", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}
crsr();