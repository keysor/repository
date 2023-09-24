const menu = document.getElementById("menu");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });
  document.querySelectorAll("a").forEach(link => {
    link.onmouseover = event => {  
      let iteration = 0;
      let interval;
  
      clearInterval(interval);
  
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
  
            return String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random letter
          })
          .join("");
  
        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);
        }
  
        iteration += 1 / 3;
      }, 30);
    };
  });
  
  