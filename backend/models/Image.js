exports.createImage = async (image) => {
  return db("images").insert(image);
};

exports.getImages = async () => {
  return db("images").select(
    "id",
    "user_id",
    "image_url",
    "tags",
    "style",
    "created_at"
  );
};
