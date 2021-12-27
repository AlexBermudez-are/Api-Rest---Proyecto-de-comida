const employeesData = [
    {
        "usuarios": [],
        "carrito_de_compras": {},
        "menu_Del_Dia": {
            "menu_adulto": {
                "menu_1": {
                    "id": 1,
                    "nombre": "Pollo a la Crema",
                    "img": "https://i.blogs.es/9f75ab/pollo-crema-1/1366_2000.jpg",
                    "descripcion": "Unas deliciosas pechugas de pollo bañadas con una rica guarnicion de crema, zanahorias, papas, cebollas y condimentada al punto, con papas al horno acompañado con un vino blanco",
                    "precio": 1300
                },
                "menu_2": {
                    "id": 2,
                    "nombre": "Wok de Verduras",
                    "img": "https://cdn.elcocinerocasero.com/imagen/receta/1000/2016-08-24-10-25-01/wok-de-verduras-con-soja.jpeg",
                    "descripcion": "Un rico wok de verduras con morron Rojo y Verde, Brocolí, Esparragos, Cebolla, Zanahoria y Champiñones, acompañado con un vino tinto",
                    "precio": 1300
                }
            },
            "menu_infantil": {
                "id": 1,
                "nombre": "Hamburguesa Infantil",
                "img": "https://www.conmishijos.com/thumbs/posts/11000/11319-receta-infantil-hamburguesas_460x345r.jpg",
                "descripcion": "Y para los mas peques tenemos una buena hamburguesa infantil con papas, gajos de manzana y un jugo de naranja o mutifrutas",
                "precio": 400
            }
        },
        "carta": {
            "postres": [
                {
                    "id": 1,
                    "nombre": "Tarta de Chocolate",
                    "precio": 800,
                    "img": "https://i.blogs.es/6bf0a0/y/1366_2000.jpg"
                },
                {
                    "id": 2,
                    "nombre": "Tarta de Oreo",
                    "precio": 900,
                    "img": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/12/recetas-de-postres-con-galletas-oreo-faciles.jpg"
                },
                {
                    "id": 3,
                    "nombre": "Flan",
                    "precio": 500,
                    "img": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/porque-no-me-sale-bien-el-flan-casero.jpg"
                },
                {
                    "id": 4,
                    "nombre": "Cheesecake",
                    "precio": 1000,
                    "img": "https://vinomanos.com/wp-content/uploads/2021/01/Chees-min.jpg"
                },
                {
                    "id": 5,
                    "nombre": "Lemon Pie",
                    "precio": 800,
                    "img": "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2020/10/07/5f7d904a1bce2.r_d.1182-787-0.jpeg"
                },
                {
                    "id": 6,
                    "nombre": "Tiramisú",
                    "precio": 700,
                    "img": "https://vinomanos.com/wp-content/uploads/2021/02/Tiramisu-min.jpg"
                },
                {
                    "id": 7,
                    "nombre": "MediaLunas",
                    "precio": 150,
                    "img": "https://www.parati.com.ar/wp-content/uploads/2021/02/DESTACADA-medialunas-marplatences-749x561.jpg"
                },
                {
                    "id": 8,
                    "nombre": "Galletas de avellanas",
                    "precio": 200,
                    "img": "https://placeralplato.com/files/2020/05/receta-de-galletas-de-avellanas.jpg"
                },
                {
                    "id": 9,
                    "nombre": "Muffins de arandanos",
                    "precio": 300,
                    "img": "https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/blueberry-muffins.jpg"
                },
                {
                    "id": 10,
                    "nombre": "Muffins de chocolate y oreo",
                    "precio": 350,
                    "img": "https://img-global.cpcdn.com/recipes/91ec03143277cae3/751x532cq70/muffins-de-chocolate-y-oreo-foto-principal.jpg"
                }
            ],
            "infusiones": [
                {
                    "id": 1,
                    "nombre": "Submarino",
                    "precio": 200,
                    "img": "https://http2.mlstatic.com/D_NQ_NP_644997-MLA27982427867_082018-O.jpg"
                },
                {
                    "id": 2,
                    "nombre": "Mocaccino",
                    "precio": 250,
                    "img": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/04/mocaccino.jpg"
                },
                {
                    "id": 3,
                    "nombre": "Licuado de Banana",
                    "precio": 150,
                    "img": "https://t1.uc.ltmcdn.com/images/4/2/9/img_como_hacer_licuado_de_banana_35924_orig.jpg"
                },
                {
                    "id": 4,
                    "nombre": "Jugo de Naranja",
                    "precio": 100,
                    "img": "https://img-global.cpcdn.com/recipes/6c86ca6e6d6978f7/751x532cq70/zumo-de-naranja-y-limon-con-jengibre-foto-principal.jpg"
                },
                {
                    "id": 5,
                    "nombre": "Cafe Americano",
                    "precio": 150,
                    "img": "https://todocafe.es/wp-content/uploads/2020/03/Caf%c3%a9_Americano_0-1024x698.jpg"
                },
                {
                    "id": 6,
                    "nombre": "Frappucino",
                    "precio": 200,
                    "img": "https://i.pinimg.com/originals/f4/c7/75/f4c775dd5c7be1a7e63aa3f0e4c45225.png"
                },
                {
                    "id": 7,
                    "nombre": "Té de frutos rojos",
                    "precio": 80,
                    "img": "https://img-global.cpcdn.com/recipes/88b5f5cbd69d9727/751x532cq70/infusion-de-te-rojo-y-frutos-del-bosque-foto-principal.jpg"
                },
                {
                    "id": 8,
                    "nombre": "Licuado de frutillas",
                    "precio": 130,
                    "img": "https://d37k6lxrz24y4c.cloudfront.net/v2/es-ar/e9dc924f238fa6cc29465942875fe8f0/3ecbcc4e-625e-4120-96f1-59480ac926b6-600.jpg"
                },
                {
                    "id": 9,
                    "nombre": "Smootie verde",
                    "precio": 150,
                    "img": "https://danzadefogones.com/wp-content/uploads/2020/03/Smoothie-Verde-2.jpg"
                },
                {
                    "id": 10,
                    "nombre": "Smootie rojo",
                    "precio": 150,
                    "img": "https://www.hazteveg.com/img/recipes/full/201906/R04-97347.jpg"
                }
            ]
        },
        "contacto": [
            {
                "nombre": "Edwin Alexis",
                "numero": "4646523517",
                "email": "challenge@alkemy.org",
                "datos": "son unos viejos putos",
                "id": 1
            },
            {
                "nombre": "Edwin Alexis",
                "numero": "4646523517",
                "email": "edbwinn@gmail.com",
                "datos": "simon mijo",
                "id": 2
            }
        ]
    }
];

module.exports = employeesData;