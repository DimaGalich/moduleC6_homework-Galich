const btn = document.querySelector('.DS-btn');
//Размеры экрана девайса\монитора
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

//Размер окна браузера с учётом полосы прокрутки
const windowInnerWidthScroll = window.innerWidth;
const windowInnerHeightScroll = window.innerHeight;

//Размер окна браузера без учёта полосы прокрутки
const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;

btn.addEventListener('click', () => {

alert(`Разрешение Дисплея: ${screenWidth}px x ${screenHeight}px. 
Размер окна браузера с полосой прокрутки: ${windowInnerWidthScroll}px x ${windowInnerHeightScroll}px.
Размер окна браузера без полосы прокрутки: ${windowInnerWidth}px x ${windowInnerHeight}px.`);

});
