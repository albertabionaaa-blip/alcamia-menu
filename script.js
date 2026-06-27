/* ==========================================
   ALCAMIA HOMEMADE GOODNESS
   Premium Restaurant Website
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Smooth Scroll Navigation
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* ==========================
       Fade Up Animation
    ========================== */

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.2

    });

    document.querySelectorAll(".fade-up").forEach(el=>{

        observer.observe(el);

    });

    /* ==========================
       Scroll To Top Button
    ========================== */

    const topBtn=document.getElementById("topBtn");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            topBtn.style.display="block";

        }else{

            topBtn.style.display="none";

        }

    });

    if(topBtn){

        topBtn.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /* ==========================
       Active Navigation
    ========================== */

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll("nav a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const sectionTop=section.offsetTop-150;

            if(window.scrollY>=sectionTop){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       Menu Card Hover Effect
    ========================== */

    document.querySelectorAll(".menu-card").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-10px) scale(1.02)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0) scale(1)";

        });

    });

});

/* ==========================================
   WHATSAPP ORDER BUTTONS
========================================== */

const phone="966507425408";

function orderItem(item){

    const text=`Hi Alcamia!

I'd like to order:

${item}

Quantity:

Thank you!`;

    window.open(

        `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,

        "_blank"

    );

}

/* ==========================================
   FLOATING WHATSAPP BUTTON
========================================== */

function openWhatsApp(){

    const text=`Hi Alcamia!

I'd like to place an order.

Thank you!`;

    window.open(

        `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,

        "_blank"

    );

}

/* ==========================================
   SIMPLE IMAGE LOADER EFFECT
========================================== */

window.addEventListener("load",()=>{

    document.querySelectorAll("img").forEach(img=>{

        img.style.opacity="1";

    });

});

/* ==========================================
   HEADER SHADOW
========================================== */

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(!header) return;

    if(window.scrollY>40){

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.20)";

    }else{

        header.style.boxShadow="none";

    }

});

/* ==========================================
   COPYRIGHT YEAR
========================================== */

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}