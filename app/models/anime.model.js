module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title: String,
            image: String,
            genre: [],
            rating: String,
            release: String
        },
        {
            timestamps: true
        }
    );

    const Anime = mongoose.model("anime", schema);
    return Anime;
};
