
// TABS
const tabs = document.querySelectorAll('.tabheader__item');
const tabContent = document.querySelector('.tabcontent');
const tabParent = document.querySelector('.tabheader__items');


const obj = {
    img: ['img/tabs/vegy.jpg', 'img/tabs/elite.jpg', 'img/tabs/post.jpg', 'img/tabs/vegy.jpg'],
    decr: [
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',

        'Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',

        'Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!',

        'Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.'
    ]
};

let index = 0;
tabs.forEach((tab, i) => {
    tabs[i].addEventListener('click', () => {
        index = i;
        removeActiveClass();
        addActiveClass(tab);
        makeTabContent(tabContent);

    });
});

function addActiveClass(tab) {
    tab.classList.add('tabheader__item_active');
}

function removeActiveClass() {
    tabs.forEach(i => {
        i.classList.remove('tabheader__item_active');
    });
}

function makeTabContent(content) {
    content.innerHTML = '';
    content.innerHTML += ` 
    <img src="${obj.img[index]}" alt="vegy">
    <div class="tabcontent__descr">${obj.decr[index]}</div>
    `;
}
makeTabContent(tabContent);


