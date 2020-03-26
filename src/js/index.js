const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');

item1.onclick = () => {
    item1.classList.toggle('box2');
};
item2.onclick = () => {
    item2.classList.toggle('box2');
};
item3.onclick = () => {
    item3.classList.toggle('box2');
};
