let stars = document.getElementById('stars'); /*criando para animar todos os 'id'*/
let moon = document.getElementById('moon');
let vegetation_behind = document.getElementById('vegetation_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let vegetation_front3 = document.getElementById('vegetation_front3');
let firefly = document.getElementById('firefly');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px'; /*'* 0.25' velocidade em que as estrelas se movem */
    moon.style.top = value * 1.05 + 'px';
    vegetation_behind.style.top = value * 0.5 + 'px';
    vegetation_front3.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px'; /*pro titulo ir para esquerda quando desce com o mouse */
    /*text.style.marginTop = value * 1.5 + 'px';*/ /*pro titulo descer quando desce com o mouse */
    btn.style.marginTop = value * 1.5 + 'px'; /*pro botao descer quando desce com o mouse */
    firefly.style.marginLeft = value * 0.5 + 'px';
    header.style.marginTop = value * 0.5 + 'px';
})