exports.getAllUsers = async (req, res) => {
  try {
    return res.send("Hello getAllUsers");
    //if (!admin) return response.sendStatus(401) //bara admin får hämta
    //if (getAllUsers) return response.sendStatus(200)
    const users = await User.find({}, { password: false }); //sätt ett att exkludera password
    return res.json({
      data: users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).select("-password"); //sätt två att exkludera password
    //if (!authorized) return response.sendStatus(401) //bara admin får hämta
    //if (!userId) return response.sendStatus(400) //om id:t är fel
    //if (getUserById) return response.sendStatus(200)
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.createNewUser = async (req, res) => {
  try {
    const UserName = UserName;
    const description = description;
    const password = password;
    const profilePicture = profilePicture;
    //if (!createNewUser) return response.sendStatus(404) //lyckas inte skapa
    //if (!createNewUser) return response.sendStatus(400) //lyckas inte skapa pga skickat in fel data
    //if (userAlreadyExists) return response.sendStatus(403)
    //if (createUser) return res.setHeader("Location", 'http://localhost:5000/api/v1/users/:userId').status(201).json({ data: 'newUser' })
    const newUser = await User.create({
      UserName: UserName,
      description: description,
      password: password,
      profilePicture: profilePicture,
    });
    return res
      .setHeader(
        "Location",
        `http://localhost:${process.env.PORT}/api/v1/users/${newUser._id}`
      )
      .status(201)
      .json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userToUpdate = await User.findById(userId);
    //if (!userToUpdate) return response.sendStatus(404)
    //if (!authorized) return response.sendStatus(401)
    //if (updateUserById) return response.sendStatus(201)
    const updatedUser = await userToUpdate.save();
    return res.json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userToDelete = await User.findById(userId);
    //if (!userToDelete) return response.sendStatus(404)
    //if (!authorized) return response.sendStatus(401)
    await userToDelete.delete();
    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
