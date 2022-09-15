import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion"




animate (
    ".staggeranimation div",
    { opacity: [0, 1] },
    { 
        delay: stagger(0.5, { start: 1 })
    }
)



inView (
    animate(
        ".overlay",
        
         {
            opacity: [0, 1, 0],
        }, 
        {
            duration: 0.5 },
            {
            target: document.querySelector(".overlaytrigger")}
        

        

        
    ),
    animate(
        ".exit", 
        {
            scaleY: [1, 0],
            translateY: [0, 300]

        },
        {
            duration: 0.5,
            delay: 1.5,
            
        },
        {
            target: document.querySelector(".overlaytrigger")}
    ),
    animate(
        ".picture",
        {
            opacity: [0, 1]
        },
        {
            duration: 0.5,
            delay: 0.5
            
        },
        {
            target: document.querySelector(".overlaytrigger")}

    ),
    animate(
        ".up_down",{
        translateY: [-500, 500, -500]}, {
        duration: 10,
        repeat: Infinity
    }),

  
     
   

)



const items = document.querySelectorAll("#horisontalliste li");
scroll(
   animate("#horisontalliste", {
     transform: ["none", `translateX(-${items.length - 1}00vw)`]
   }),
   { target: document.querySelector("#horisontalscrollsection") },
   animate(
        ".zoom", {
            scale: [0, 1], 
            
            
        },{
            duration: 0.2
        },

        
        
    )
     
    
  )
  scroll(
    animate(".scrollzoomimg", { 
        scale: [0.5, 1.5],
        translateY: [0, 5000],
        

        
        
        opacity: [0.5, 1]    
      }),
      { 
        target: document.querySelector(".scrollzoom"),
        
        
     })
  scroll (animate(".progress-bar", { scaleX: [0, 1] }))
  
  document
  .querySelectorAll(".intro_para")
  .forEach((intro_para) => {
    const header =
      intro_para.querySelector("p");
    scroll(
      animate(header, {
        y: [-500, 1000],
      }),
      {
        target: header,
      }
    );
  });

  const lillevideo = document.querySelector("#videofil");
  lillevideo.pause();
 
  scroll(
    ({ y }) => {
      if (!lillevideo.readyState) return;
      lillevideo.currentTime = lillevideo.duration * y.progress;
    },
    {
      target: document.querySelector(".videoarticle"),
      offset: ["-100vh", "end end"]
    }
  );





