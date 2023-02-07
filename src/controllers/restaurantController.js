exports.getAllRestaurants = async (req, res) => {
  try {
    //if (!getAllRestaurants) return response.sendStatus(404) //om vi inte lyckas hämta
    //if (getAllRestaurants) return response.sendStatus(200)
    return res.send("Hello World");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    //if (!restaurantId) return response.sendStatus(404) //om vi inte lyckas hämta
    //if (!restaurantId) return response.sendStatus(400) //om id:t är fel
    //if (getRestaurantById) return response.sendStatus(200)
    return res.send(restaurantId);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.createNewRestaurant = async (req, res) => {
  try {
    //if (!createNewRestaurant) return response.sendStatus(404) //lyckas inte skapa
    //if (!createNewRestaurant) return response.sendStatus(400) //lyckas inte skapa pga skickat in fel data
    //if (!authorized) return response.sendStatus(401) //användaren får inte göra detta
    //if (createUser) return res.setHeader("Location", 'http://localhost:5000/api/v1/restaurants/:restaurantId').status(201).json({ data: 'newRestaurant' })
    return res.send("Hello createNewRestaurant");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateRestaurantById = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    //if (!restaurantToUpdate) return response.sendStatus(404)
    //if (!authorized) return response.sendStatus(401)
    //if (updateRestaurantById) return response.sendStatus(201)
    return res.send(restaurantId);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteRestaurantById = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    //if (!restaurantToDelete) return response.sendStatus(404)
    //if (!authorized) return response.sendStatus(401)
    //if (deleteRestaurantById) return response.sendStatus(200)
    return res.send(restaurantId);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
