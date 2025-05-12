import pizza1 from '/src/asset/pizza1.jpg'
import pizza2 from '/src/asset/pizza2.jpg'
import pizza3 from '/src/asset/pizza3.jpg'

const pizzas = [
    {
        id: "Pizza-1",
        name: "Pizza 1",
        price: 8,
        imgSrc: pizza1
    },
    {
        id: "Pizza-2",
        name: "Pizza 2",
        price: 9,
        imgSrc: pizza2
    },
    {
        id: "Pizza-3",
        name: "Pizza 3",
        price: 10,
        imgSrc: pizza3
    }
]

const sizes = [
    {
        id: "small-1",
        name: "Small",
        price: -1
    },
    {
        id: "medium-1",
        name: "Medium",
        price: 0
    },
    {
        id: "large-1",
        name: "Large",
        price: 2
    }   
]

const toppings = [
    {
        id: "avo-1",
        name: "Avocado",
        price: 2,
        for: [
            "Pizza-1",
            "Pizza-2",
        ]
    },
    {
        id: "oni-1",
        name: "Onions",
        price: 1,
        for: [
            "Pizza-1",
            "Pizza-3"
        ]
    },
    {
        id: "lob-1",
        name: "Lobster",
        price: 3,
        for: [
            "Pizza-2",
            "Pizza-3"
        ]
    },
    {
        id: "sal-1",
        name: "Salmon",
        price: 3,
        for: [
            "Pizza-1",
            "Pizza-2",
            "Pizza-3"
        ]
    },
    {
        id: "bac-1",
        name: "Bacon",
        price: 1,
        for: [
            "Pizza-1",
        ]
    },
    {
        id: "ham-1",
        name: "Ham",
        price: 1,
        for: [
            "Pizza-2",
        ]
    },
    {
        id: "bro-1",
        name: "Broccoli",
        price: 1,
        for: [
            "Pizza-3"
        ]
    },
    {
        id: "zuc-1",
        name: "Zuchini",
        price: 2,
        for: [
            "Pizza-1",
            "Pizza-2",
            "Pizza-3"
        ]
    },
    {
        id: "oys-1",
        name: "Oyster",
        price: 2,
        for: [
            "Pizza-1",
            "Pizza-2",
        ]
    },
    {
        id: "tun-1",
        name: "Tuna",
        price: 3,
        for: [
            "Pizza-1",
            "Pizza-3"
        ]
    },
    {
        id: "duc-1",
        name: "Duck",
        price: 2,
        for: [
            "Pizza-2",
            "Pizza-3"
        ]
    },
    {
        id: "sau-1",
        name: "Sausage",
        price: 1,
        for: [
            "Pizza-1",
            "Pizza-2",
            "Pizza-3"
        ]
    },
]

export default { pizzas, sizes, toppings }