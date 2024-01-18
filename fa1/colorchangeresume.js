function changecolor() {
    const colors = ["#C95A71", "#008080", "#081B41", "#000000", "#A8B2FC"];
    const textColors = ["#FFECF0", "#b3f7f7", "#FFFFFF", "#990000", "#EFEAFB"];
  
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    document.querySelectorAll('p').forEach(i=>i.style.color = textColors[randomIndex]);
    document.querySelectorAll('.skills-div').forEach(i=>i.style.backgroundColor = textColors[randomIndex]);
    document.querySelectorAll('.ccbutton').forEach(i=>i.style.color = colors[randomIndex]);
  }
  