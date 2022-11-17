var imgee = document.querySelector('body')

imgee.addEventListener("click",event=>{
  const audio = document.querySelector("audio");
  audio.volume = 1;
  audio.play();
})

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 1;
    audio.play();
  });

  window.addEventListener("click", event => {
    const audio = document.querySelector("audio");
    audio.volume = 1;
    audio.play();
  });

  function runOnScroll(element) {
    // not the most exciting thing, but a thing nonetheless
    const audio = document.querySelector("audio");
    audio.volume = 1;
    audio.play();
  };
  
  // grab elements as array, rather than as NodeList
  
  
  // and then make each element do something on scroll
  elements.forEach(element => {
    window.addEventListener(
      "scroll",
      () => runOnScroll(element),
      { passive: true }
    );
  });