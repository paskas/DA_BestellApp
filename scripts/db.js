let orderDishes = {
    "Vorspeisen": {
        "category": "Vorspeisen",
        "image": "./assets/img/Gyoza.jpg",
        "info": "Eine Auswahl an leckeren Vorspeisen, ideal für den Start Ihres Essens.",
        "items": [
            {
                "name": "Edamame",
                "info": "Gedämpfte grüne Sojabohnen, leicht gesalzen.",
                "price": 3.50
            },
            {
                "name": "Gyoza",
                "info": "Frittierte Teigtaschen gefüllt mit Gemüse und Huhn.",
                "price": 4.90
            },
            {
                "name": "Wakame Salat",
                "info": "Frischer Algensalat mit Sesam-Dressing.",
                "price": 4.20
            }
        ]
    },
    "Suppen": {
        "category": "Suppen",
        "image": "./assets/img/suppe.jpg",
        "info": "Wärmende Suppen, perfekt für eine wohltuende Mahlzeit.",
        "items": [
            {
                "name": "Miso Suppe",
                "info": "Traditionelle japanische Suppe mit Tofu, Seetang und Frühlingszwiebeln.",
                "price": 2.90
            },
            {
                "name": "Tom Yum Suppe",
                "info": "Scharfe und saure Suppe mit Garnelen und Zitronengras.",
                "price": 5.50
            },
            {
                "name": "Kürbis-Ingwer Suppe",
                "info": "Cremige Suppe aus frischem Kürbis und Ingwer.",
                "price": 4.80
            }
        ]
    },
    "Nigiri": {
        "category": "Sushi - Nigiri",
        "image": "./assets/img/Nigiri.jpg",
        "info": "Nigiri-Sushi: Handgeformter Reis belegt mit frischem Fisch oder Gemüse.",
        "items": [
            {
                "name": "Lachs Nigiri",
                "info": "Frischer Lachs auf handgeformtem Reis.",
                "price": 2.50
            },
            {
                "name": "Thunfisch Nigiri",
                "info": "Zarter Thunfisch auf Sushi-Reis.",
                "price": 2.80
            },
            {
                "name": "Ebi Nigiri",
                "info": "Gekochte Garnele auf Reis.",
                "price": 2.70
            }
        ]
    },
    "Maki": {
        "category": "Sushi - Maki",
        "image": "./assets/img/Maki.jpg",
        "info": "Maki-Sushi: Kleine gerollte Sushi mit verschiedenen Füllungen.",
        "items": [
            {
                "name": "Kappa Maki",
                "info": "Gurkenrolle umhüllt mit Nori-Algen.",
                "price": 3.20
            },
            {
                "name": "Tekka Maki",
                "info": "Thunfischrolle, umhüllt mit Nori.",
                "price": 3.80
            },
            {
                "name": "Avocado Maki",
                "info": "Cremige Avocado, gerollt in Reis und Nori.",
                "price": 3.50
            },
            {
                "name": "Sake Maki",
                "info": "Lachsrolle mit frischem Lachs und Nori.",
                "price": 3.90
            }
        ]
    },
    "Sashimi": {
        "category": "Sushi - Sashimi",
        "image": "./assets/img/sashimi.jpg",
        "info": "Sashimi: Dünn geschnittener, frischer Fisch, perfekt zum Genießen.",
        "items": [
            {
                "name": "Lachs Sashimi",
                "info": "Dünn geschnittener frischer Lachs.",
                "price": 6.50
            },
            {
                "name": "Thunfisch Sashimi",
                "info": "Zarter Thunfisch, in feine Scheiben geschnitten.",
                "price": 7.00
            },
            {
                "name": "Jakobsmuschel Sashimi",
                "info": "Frische Jakobsmuscheln, serviert als Sashimi.",
                "price": 8.50
            }
        ]
    },
    "Inside-Out": {
        "category": "Sushi - Inside-Out",
        "image": "./assets/img/inside-out.jpg",
        "info": "Inside-Out Sushi: Rollen, bei denen der Reis außen liegt und die Füllung innen ist.",
        "items": [
            {
                "name": "California Roll",
                "info": "Krabbenfleisch, Avocado und Gurke, umhüllt mit Sushi-Reis.",
                "price": 5.50
            },
            {
                "name": "Dragon Roll",
                "info": "Tempura-Garnele und Avocado, belegt mit dünnen Lachs- und Avocadoscheiben.",
                "price": 7.90
            },
            {
                "name": "Spicy Tuna Roll",
                "info": "Würziger Thunfisch mit Gurke, umhüllt von Reis und Sesam.",
                "price": 6.20
            }
        ]
    }
}

console.log(orderDishes[index]);
