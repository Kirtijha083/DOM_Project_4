// this is only for 1st img...or 1st div...for try purpose

// let elem1 = document.querySelector("#elem1");

// let elemImg = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", (dets) => {
//     elemImg.style.left = dets.x+"px";
//     elemImg.style.top = dets.y+"px";
// });

// elem1.addEventListener("mouseenter", (dets) => {
//     elemImg.style.opacity = 1;
// });

// elem1.addEventListener("mouseleave", (dets) => {
//     elemImg.style.opacity = 0;
// });

// this is the final for all img...and all div...but img overflow from div
// let elem = document.querySelectorAll(".elem");

// elem.forEach((value) => {
//   value.addEventListener("mouseenter", () => {
//     value.childNodes[3].style.opacity = 1;
//   });

//   value.addEventListener("mouseleave", () => {
//     value.childNodes[3].style.opacity = 0;
//   });

//   value.addEventListener("mousemove", (dets) => {
//     value.childNodes[3].style.left = dets.x + "px";
//     value.childNodes[3].style.top = dets.y + "px";
//   });
// });



// this is the final for all img...and all div...here everything work properly
let elem = document.querySelectorAll(".elem");

elem.forEach((value) => {
  let img = value.querySelector("img");

  value.addEventListener("mouseenter", () => {
    img.style.opacity = 1;
  });

  value.addEventListener("mouseleave", () => {
    img.style.opacity = 0;
  });

  value.addEventListener("mousemove", (dets) => {
    let rect = value.getBoundingClientRect(); // Parent element ka position
    let x = dets.clientX - rect.left; // Element ke andar ka X position
    let y = dets.clientY - rect.top;  // Element ke andar ka Y position

    img.style.left = x + "px";
    img.style.top = y + "px";
  });
});


// value.querySelector("img") se direct <img> ko target kiya.
// getBoundingClientRect() se mouse position ko element ke relative calculate kiya, jo accurate result deta hai.
// Aapka image ab har <div class="elem"> ke andar hi centered move karega.