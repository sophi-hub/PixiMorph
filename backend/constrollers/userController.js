exports.getUsers = async (req, res) => {
  try {
    const users = await db("users").select("id", "name", "email", "role");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.banUser = async (req, res) => {
  const { id } = req.params;
  try {
    await db("users").where({ id }).update({ role: "banned" });
    res.status(200).json({ message: "Usuário banido com sucesso." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
