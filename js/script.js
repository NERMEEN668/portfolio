const title = "Frontend Developer";
  const typingElement = document.querySelector(".typing");

  let charIndex = 0;

  function typeEffect() {
    if (charIndex < title.length) {
      typingElement.textContent += title.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();


 