import Cities from "./model/sunlightModel.js";

export const getAllCities = async (req, res) => {
  try {
    const cities = await Cities.find();
    res.json(cities);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCity = async (req, res) => {
  try {
    const cities = new Cities(req.body);
    await cities.save()
    res.json(cities);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getByCountry = async (req, res) => {
  try {
    const cities = await Cities.findOne({Country: req.params.Country });
    res.json(cities);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};


export const getByCityName = async (req, res) => {
  try {
    const cities = await Cities.findOne({ City: req.params.City });
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


// export const getCityById = async (req, res) => {
//   try {
//     const cities = await Cities.findById(req.params.id);
//     res.json(cities);
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// };
export const updateCity = async (req, res) => {
  try {
    const cities = await Cities.findByIdAndUpdate(req.params.id, req.body);
    res.json(cities);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteCity = async (req, res) => {
  try {
    const cities = await Cities.findByIdAndDelete(req.params.id);
    res.json(cities);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

