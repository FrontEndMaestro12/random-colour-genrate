

let random = ()=> {
    let color1 = Math.ceil( 0+  Math.random() * 255);
    let color2 = Math.ceil(0 + Math.random() * 255 );
    let color3 = Math.ceil(0 + Math.random() * 255);
    return ` rgb(${color1}, ${color2}, ${color3})`
}
 setInterval(() => {
document.getElementById("container").style.backgroundColor = random()
document.getElementById("container").style.color = random()
}, 500);

let timeline = gsap.timeline();

timeline.from("#container h1,#container h2",{
    duration:1,
    y:150,
    repeat:-1,
    yoyo:true
})