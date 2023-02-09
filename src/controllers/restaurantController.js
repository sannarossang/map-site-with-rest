exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    //if (!getAllRestaurants) return response.sendStatus(404) //om vi inte lyckas hämta
    //if (getAllRestaurants) return response.sendStatus(200)
    return res.json({
      data: restaurants,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurant = await restaurant.findById(restaurantId);
    //if (!restaurantId) return response.sendStatus(404) //om vi inte lyckas hämta
    //if (getRestaurantById) return response.sendStatus(200)
    return res.json(restaurant);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.createNewRestaurant = async (req, res) => {
  try {
    const restaurantName = req.body.restaurantName;
    const description = req.body.description;
    const adress = req.body.adress;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const score = 0;
    const restaurantPicture = req.body.restaurantPicture;

    const newRestaurant = await Restaurant.create({
      restaurantName: restaurantName,
      description: description,
      adress: adress,
      phoneNumber: phoneNumber,
      email: email,
      score: score,
      restaurantPicture: restaurantPicture,
    });
    //if (!createNewRestaurant) return response.sendStatus(400) //lyckas inte skapa pga skickat in fel data
    //if (!authorized) return response.sendStatus(401) //användaren får inte göra detta
    //if (createUser) return res.setHeader("Location", 'http://localhost:5000/api/v1/restaurants/:restaurantId').status(201).json({ data: 'newRestaurant' })
    return res
      .setHeader(
        "Location",
        `http://localhost:${process.env.PORT}/api/v1/users/${newRestaurant._id}`
      )
      .status(201)
      .json(newRestaurant);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateRestaurantById = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantToUpdate = await Restaurant.findById(restaurantId);
    //if (!restaurantToUpdate) return response.sendStatus(404)
    //if (!authorized) return response.sendStatus(401)
    //if (updateRestaurantById) return response.sendStatus(201)
    const updatedRestaurant = await restaurantToUpdate.save();
    return res.json(updatedRestaurant);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteRestaurantById = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const deletedRestaurant = await Restaurant.findById(restaurantId);
    //if (!restaurantToDelete) return response.sendStatus(404)
    //if (!authorized) return response.sendStatus(401)
    //if (deleteRestaurantById) return response.sendStatus(200)
    await deletedRestaurant.delete();
    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
