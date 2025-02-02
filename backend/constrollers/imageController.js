exports.reportImage = async (req, res) => {
  const { image_id, user_id, reason } = req.body;
  try {
    await db("reports").insert({ image_id, user_id, reason });
    res.status(200).json({ message: "Imagem denunciada com sucesso." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
