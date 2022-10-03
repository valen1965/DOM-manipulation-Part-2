// DOM Manipulation Part 2

let accordion = document.querySelectorAll(".content-container");

for(let i = 0; i < accordion.length; i++) {
 
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active');
  });
};

  // alternative function

  // accordion.forEach ((el) => {
  //   el.addEventListener("click", () => el.classList.toggle("active"));
  // });
  
  
