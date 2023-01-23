let body = document.body
let container = document.createElement('div')
let section = document.createElement('section')
let prod = document.createElement('div')
let prod__btn = document.createElement('button')
let ptod__img = document.createElement('img')
let prod_type = document.createElementNS('p')
let prod__price__wrapper = document.createElement('div')
let prod__price = document.createElement('span')
let prod__sale__price = document.createElement('s')
let buy = document.createElement('div')
let buy_btn = document.createElement('button')
let prod__btn__img = document.createElement('img')


let products = [
    {
        img: './assets/img/phone.webp',
        type: 'Смартфон Xiaomi 12T 256Gb Black',
        price: '44 999 ₽',
        salePrice: '50 999 ₽',
    }
]

prod__btn.innerHTML = "Скидки и рассрочка"
prod_type.innerHTML = products.forEach(pr => {
    pr.type
})
ptod__img.innerHTML = products.forEach(pr => {
    pr.img
})
prod__price.innerHTML = products.forEach(pr => {
    pr.price
})
prod__sale__price.innerHTML = products.forEach(pr => {
    pr.salePrice
})


body.append(container)
container.append(section)
section.append(prod)
prod.append(prod__btn, ptod__img, prod_type, prod__price__wrapper, buy)
prod__price__wrapper.append(prod__price, prod__sale__price)
buy.append(buy_btn)
buy_btn.append(prod__btn__img)

section.classList.add('products')
prod.classList.add('prod')
prod__btn.classList('prod__btn')
prod__price__wrapper.classList.add(prod__price__wrapper)
prod__price.classList.add('prod__price')
prod__sale__price.classList.add('prod__sale-price')
buy.classList.add('buy')
buy_btn.classList.add('prod__buy')



