module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      email: {type: String,unique: true},
      date: Date,
      password: String,
      gender: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};
