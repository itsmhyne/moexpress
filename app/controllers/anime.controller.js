const db = require('../models')

const Anime = db.anime

exports.animeList = (req, res) => {
    Anime.aggregate(
        [
            {
                $lookup: {
                    from: "genres",
                    localField: "genre",
                    foreignField: "_id",
                    as: "genre_data"
                }
            }
        ]
    )
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error while retriving data"
            });
        })
}

exports.animeAdded = (req, res) => {

    const dataAnime = [
        {
            "title": "Kimetsu no Yaiba Season 3 Katanakaji no Sato-hen",
            "image": "https://samehadaku.bio/wp-content/uploads/2023/04/134058l.jpg",
            "genre": [
                ObjectId("64926e7db9bf610a4fb07576"),
                ObjectId("64926e7db9bf610a4fb0757c"),
                ObjectId("64926e7db9bf610a4fb0757f"),
                ObjectId("64926e7db9bf610a4fb07592"),
            ],
            "rating": "9.9",
            "release": "2023"
        },
        {
            "title": "Otonari ni Ginga",
            "image": "https://samehadaku.bio/wp-content/uploads/2023/04/135041l.jpg",
            "genre": [
                ObjectId("64927a7d985dbf87e382efff"),
                ObjectId("64926e7db9bf610a4fb07578"),
                ObjectId("64926e7db9bf610a4fb0758b"),
                ObjectId("64926e7db9bf610a4fb0758f"),
                ObjectId("64926e7db9bf610a4fb07597"),
            ],
            "release": "2023"
        },
        {
            "title": "Boku no Kokoro no Yabai Yatsu",
            "image": "https://samehadaku.bio/wp-content/uploads/2023/04/126433l.jpg",
            "genre": [
                ObjectId("64926e7db9bf610a4fb07578"),
                ObjectId("64926e7db9bf610a4fb0758b"),
                ObjectId("64926e7db9bf610a4fb0758d"),
                ObjectId("64926e7db9bf610a4fb07592"),
            ],
            "release": "2023"
        },
        {
            "title": "Isekai Shoukan wa Nidome desu",
            "image": "https://samehadaku.bio/wp-content/uploads/2023/04/134151l.jpg",
            "genre": [
                ObjectId("64926e7db9bf610a4fb07577"),
                ObjectId("64926e7db9bf610a4fb07578"),
                ObjectId("64926e7db9bf610a4fb0757c"),
                ObjectId("64926e7db9bf610a4fb0757e"),
                ObjectId("64927be3985dbf87e382f001"),
                ObjectId("64926e7db9bf610a4fb0758b"),
            ],
            "release": "2023"
        },
        {
            "title": "Jigokuraku",
            "image": "https://samehadaku.bio/wp-content/uploads/2023/04/134936l.jpg",
            "genre": [
                ObjectId("64926e7db9bf610a4fb07576"),
                ObjectId("64926e7db9bf610a4fb07577"),
                ObjectId("64926e7db9bf610a4fb0757c"),
                ObjectId("64927c67985dbf87e382f003"),
                ObjectId("64926e7db9bf610a4fb0757f"),
                ObjectId("64926e7db9bf610a4fb07592"),
            ],
            "release": "2023"
        },
    ]

    Anime.insertMany(dataAnime)

}

// exports.animeAdded = (req, res) => {

//     const { title, image, rating } = req.body

//     const addData = new Anime({ title, image, rating })

//     addData.save()
//         .then((result) => {
//             res.send({
//                 message: "Successfully add anime"
//             });
//         }).catch((err) => {
//             res.status(409).send({
//                 message: err.message || "Some error while add anime"
//             });
//         });
// }

exports.animeDetail = (req, res) => {
    const id = req.params.id;

    Anime.findById(id)
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(409).send({
                message: err.message || "Some error while show anime details"
            });
        });
}