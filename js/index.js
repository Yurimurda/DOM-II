

// Your code goes here
// const funBus =
// document.querySelector(".intro");
// console.log(funBus);
// funBus.addEventListener("mouseenter", () => {
//     funBus.style.transform = "scale(0.5)";
//     funBus.style.transition = "all 0.3s"
//   })
//   funBus.addEventListener("mouseleave", () => {
//    funBus.style.transform = "scale(1.0)";
//    funBus.style.transition = "all 0.3s"
//   })


  let images = document.querySelectorAll("img");
  images.forEach(element =>{
      for (i= 1; i<5; i++) element.length
      Array.from(images).forEach(element2 =>{
console.log(element2.tagName)
      })
  images[0].addEventListener("mouseenter", () =>{           //1
images[0].style.transform = "scale(0.5)";
images[0].style.transition = "all 0.3s"

  })
  images[0].addEventListener("mouseleave", () =>{          //2
    images[0].style.transform = "scale(1.0)";
    images[0].style.transition = "all 0.3s"
  })
  images[1].addEventListener("dblclick", () =>{            //3
      images[1].style.transform ="scale(0.5)";
  })
  images[2].addEventListener("drag", () =>{             //5
      images[2].style.transform = "scale(0.0)";
      images[2].style.transition = "all 20.0s";
  })
  })

 

  let paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(element =>{
      for (i=1; i<10; i++) element.length
      Array.from(paragraphs).forEach(element2 =>{
          console.log(element2.tagName)
      })
      paragraphs[0].addEventListener("mouseover", () =>{           //4
         paragraphs[0].textContent = "NO TEXT FOR YOU";
         paragraphs[0].style.color = "red";
      })
      
  })

  