const user = require("../routes/user");

exports.addUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("This user already exists");
    }
    const newUser = new User({
      name,
      email,
      age,
    });
    await newUser.save();
    res.status(200).send({ msg: "User added successfully", newUser });
  } catch (error) {
    res.status(500).send({ msg: "Could not add contact", error });
  }
};

exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((error) =>
      res.status(400).send({ msg: "Could not get all users", error })
    );
};

exports.editUser = (req, res) => {
  const userID = req.params.userID;
  User.findByIdAndUpdate(userID, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ msg: "User updated " });
      }
      res.send(user);
    })
    .catch((error) =>
      res.status(400).send({ msg: "Could not update User", error })
    );
};

exports.removeUser = (req, res) => {
  const id = req.params.userID;
  User.findByIdAndDelete(id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ msg: "User Not Found " });
      }
      res.send(user);
    })
    .catch((error) =>
      res.status(400).send({ msg: "Could Not Remove User ", error })
    );
};
