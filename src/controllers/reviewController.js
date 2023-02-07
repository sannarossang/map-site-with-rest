exports.getAllReviews = async (req, res) => {
  try {
    //if (!getAllReviews) return response.sendStatus(404) //om vi inte lyckas hämta
    //if (getAllReviews) return response.sendStatus(200)
    return res.send("Hello World");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    // const review = {
    // }
    //if (!reviewId) return response.sendStatus(404) //om vi inte lyckas hämta
    //if (!reviewId) return response.sendStatus(400) //om id:t är fel
    //if (getReviewById) return response.sendStatus(200)
    // return res.status(200).json.(review);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.createNewReview = async (req, res) => {
  try {
    //if (!createNewReview) return response.sendStatus(404) //lyckas inte skapa
    //if (!createNewReview) return response.sendStatus(400) //lyckas inte skapa pga skickat in fel data
    //if (!authorized) return response.sendStatus(401) //användaren får inte göra detta
    //if (userAlreadyReviewd) return response.sendStatus(429) //begränsa till X-antal reviews
    //if (createNewReview) return res.setHeader("Location", 'http://localhost:5000/api/v1/reviews/:reviewId').status(201).json({ data: 'newReview' })
    return res.send("Hello createNewReview");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateReviewById = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    //if (!reviewToUpdate) return response.sendStatus(404)
    //if (!reviewUpdated) return response.sendStatus(404) //kolla att informationen faktiskt uppdaterades
    //if (!authorized) return response.sendStatus(401)
    //if (updateReviewByid) return response.sendStatus(200)
    return res.status(200).json(updatedReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteReviewById = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    //if (!reviewToDelete) return response.sendStatus(404)
    //if (!authorized) return response.sendStatus(401)
    //if (deleteReviewById) return response.sendStatus(200)
    return res.send(reviewId);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
