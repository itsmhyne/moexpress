module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            username: String,
            password: String,
            email: String
        },
        {
            timestamps: true
        }
    );

    const Auth = mongoose.model("users", schema);
    return Auth;
};
