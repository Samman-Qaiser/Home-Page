function page1(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:"body",
            trigger:".page1",
            start:"top 50%",
            end: "top 100%",
            // toggleActions: "play none none reset" 
        }
    })
    tl.from(".nav-bar h2",{
        y:-100,
        duration:0.9,
        opacity:0
    })
    tl.from(".nav-bar nav a" ,{
        y:-100,
        duration:0.9,
        opacity:0,
        stagger:0.1
    })
    tl.from(".nav-bar button",{
        y:-100,
        duration:0.9,
        opacity:0,
    })
    tl.from(".left-content h1",{
        x:-100,
        duration:0.3,
        opacity:0,
       
    })
    tl.from(".left-content p",{
        x:-100,
        duration:0.3,
        opacity:0,
       
    })
   
    tl.from(".right-content",{
        x:100,
        duration:0.3,
        opacity:0,
       
    })
    tl.from(".sponsors img",{
        y:100,
        duration:0.3,
        opacity:0,
        stagger:0.3,
       
        
       
    })
}
function page2(){
    var tll=gsap.timeline({
        scrollTrigger:{
            scroller:"body",
            trigger:".page2",
            start:"top 50%",
            end:"top 0%",
            scrub:2
        }
    })
    tll.from(".page2-upper",{
        opacity:0,
        x:200,
        duration:0.3
    })
    tll.from(".box1",{
        opacity:0,
        x:-200,
        duration:0.5
    },"animi1")
    tll.from(".box2",{
        opacity:0,
        x:200,
        duration:0.5
    },"animi1")
    tll.from(".box3",{
        opacity:0,
        x:-200,
        duration:0.5
    },"animi2")
    tll.from(".box4",{
        opacity:0,
        x:200,
        duration:0.5
    },"animi2")
 
   

}
function page3(){
    var tl3=gsap.timeline({
        scrollTrigger:{
            scroller:"body",
            trigger:".page3",
            start:"top 50%",
            end:"top 10%",
            scrub:2
        }
    })
    var p= document.querySelector(".page3-upper p")
    var text=p.textContent.split(" ")
    var clutter=""
    text.forEach(function(dets){
        clutter+=`<span>${dets}</span>`
    })
    p.innerHTML=clutter
    tl3.from(".page3-upper ",{
          x:-300,
          opacity:0,
          duration:0.4
    })
    tl3.from(".page3-upper span",{
        color:"rgba(66, 56, 133, 0.548)",
     
        stagger:0.2
    })
  
    tl3.from(".div",{
        y:200,
        opacity:0,
        duration:0.4
    })
    
}




page2()
page3()
page1()