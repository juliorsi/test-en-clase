import { Categoria } from "../categorias"

export const categorias: Categoria [] = [

    {
        nombre: 'Hamburguesas',
        id:0, 
        imgUrl:'https://www.fmdos.cl/wp-content/uploads/2017/06/Hamburguesa2.jpg',
        productos: [{
            id: 1, 
            nombre: "Hamburguesa",
            ingredientes: ["Cheddar, lechuga, tomate"],
            precio: 3200,
            imgUrl: "https://offloadmedia.feverup.com/bilbaosecreto.com/wp-content/uploads/2021/02/26045059/hamburguesas-1024x683.jpg"
        },
        {
            id: 2,
            nombre: "Hamburguesa2",
            ingredientes: ["Pan negro, cebolla, queso"],
            precio: 4500,
        imgUrl:"https://th.bing.com/th/id/OIP.TQI4AOwL6Qm4madG8plD8wHaEx?pid=ImgDet&rs=1"
        },
        {
            id: 3,
            nombre: "Hamburguesa3",
            ingredientes: ["Pan, huevo, queso"],
            precio: 2750,
        imgUrl:"https://www.pequerecetas.com/wp-content/uploads/2021/07/hamburguesa-con-huevo.jpg"
        },
        {
            id: 4,
            nombre: "Hamburguesa4",
            ingredientes: ["Pan, cheddar, bacon"],
            precio: 3000,
        imgUrl:"https://img.pystatic.com/products/120ecb78-689c-419d-9cd5-b1876c347145.jpg"
        },

    ]
    },

    {
        nombre: 'Pizzas',
        id:1, 
        imgUrl:'https://i.pinimg.com/736x/b3/20/4d/b3204d2c17926d21031681cfaaa93084.jpg',
        productos: [
            {
                id: 5,
                nombre: "Pizza 1",
                ingredientes: ["Aeitunas, queso, tomate"],
                precio: 3000,
            imgUrl:"https://th.bing.com/th/id/R.68d2238672948f2ff8a6944380bac8bc?rik=s%2b7rof%2fE%2fMU1qg&riu=http%3a%2f%2fmilrecetas.net%2fwp-content%2fuploads%2f2015%2f06%2fPizza-Napolitana-2.jpg&ehk=wIzwfQQ0LccYL6Vefii%2fY4U%2bW%2b%2fAwB3kXG9%2fFjtv2qY%3d&risl=&pid=ImgRaw&r=0"
            },
            {
                id: 6,
                nombre: "Pizza 2",
                ingredientes: ["Pepperoni, queso"],
                precio: 2900,
            imgUrl:"https://riotfest.org/wp-content/uploads/2016/10/151_1stuffed_crust_pizza.jpg"
            },


        ]
    },

    {
        nombre: 'Postres',
         id:2,
        imgUrl:'https://th.bing.com/th/id/R.f4cd8cd2f8cd977be6e63c63bd00e837?rik=foO9yc8oPxpxpg&riu=http%3a%2f%2fpostresrapidos.net%2fwp-content%2fuploads%2f2014%2f06%2fconsejos-para-preparar-postres.jpg&ehk=KmWFV2kr3AhKz4KvAQgTSXtqRm42ZrPxtyG0LNQIiZU%3d&risl=&pid=ImgRaw&r=0',
        productos: [ {
            id: 7,
            nombre: "Helado",
            ingredientes: ["Chocolate, frutilla, vainilla "],
            precio: 1000,
        imgUrl:"https://th.bing.com/th/id/R.093035116f2a60fe87005ecb94a623f0?rik=jW3OlZlZGVgrOQ&pid=ImgRaw&r=0"
        },
        {
            id: 8,
            nombre: "Torta",
            ingredientes: ["Chocolate, dulce de leche "],
            precio: 2300,
        imgUrl:"https://th.bing.com/th/id/R.a21a8e818a4428b1eb6a18f609863fb9?rik=9XF0eJsL48eGkg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-wAzr_JMoIrk%2fUcxM0xpzLLI%2fAAAAAAAAOeg%2f7EUfVSBHqSk%2fs1600%2ftorta-chocolate-especial.jpg&ehk=2y9UTM5r%2bwuEz2%2bIFqc8C973WVI1KO5XJCw4Lg2O7Sk%3d&risl=&pid=ImgRaw&r=0"
        },

        ]
    },

    {
        nombre: 'Bebidas',
        id:3,
        imgUrl:'https://th.bing.com/th/id/OIP.bDdCYzYD4or8gFizIVazTwHaFF?pid=ImgDet&rs=1',
        productos: [
            {
                id: 9,
                nombre: "Licuados",
                ingredientes: ["Frutilla, banana, kiwi "],
                precio: 1300,
            imgUrl:"https://www.gastrolabweb.com/u/fotografias/m/2020/8/11/f1280x720-2423_134098_5050.jpg"
            },
            {
                id: 10,
                nombre: "Cerveza",
                ingredientes: ["IPA, Honey"],
                precio: 900,
            imgUrl:"https://www.diarionorte.com/content/bucket/6/221916w620h450.jpg"
            },


        ]
    },
    ]
