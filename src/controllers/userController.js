exports.getAllUsers = async (req, res) => {
  try {
    return res.send("Hello getAllUsers");
    //if (!admin) return response.sendStatus(401) //bara admin får hämta
    //if (getAllUsers) return response.sendStatus(200)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    //if (!authorized) return response.sendStatus(401) //bara admin får hämta
    //if (!userId) return response.sendStatus(400) //om id:t är fel
    //if (getUserById) return response.sendStatus(200)
    return res.send(userId);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.createNewUser = async (req, res) => {
  try {
    //if (!createNewUser) return response.sendStatus(404) //lyckas inte skapa
    //if (!createNewUser) return response.sendStatus(400) //lyckas inte skapa pga skickat in fel data
    //if (userAlreadyExists) return response.sendStatus(403)
    //if (!authorized) return response.sendStatus(401) //användaren får inte göra detta
    //if (createUser) return res.setHeader("Location", 'http://localhost:5000/api/v1/users/:userId').status(201).json({ data: 'newUser' })
    return res.send("Hello createNewUser");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    //if (!userToUpdate) return response.sendStatus(404)
    //if (!authorized) return response.sendStatus(401)
    //if (updateUserById) return response.sendStatus(201)
    return res.send(userId);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    //if (!userToDelete) return response.sendStatus(404)
    //if (!authorized) return response.sendStatus(401)
    //if (deleteUserByID) return response.sendStatus(200)
    return res.send(userId);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
