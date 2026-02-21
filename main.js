// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Skill circular progress bars
const skillData=[{id:"skill1",percent:90},{id:"skill2",percent:85},{id:"skill3",percent:80}];
skillData.forEach(skill=>{
  const canvas=document.getElementById(skill.id),ctx=canvas.getContext("2d");let angle=0;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.arc(60,60,50,-0.5*Math.PI,angle-0.5*Math.PI);
    ctx.strokeStyle="#4ADE80";ctx.lineWidth=6;ctx.stroke();
    if(angle<(2*Math.PI*skill.percent/100))angle+=0.02;requestAnimationFrame(draw);
  }
  draw();
});
