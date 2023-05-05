const {Router} = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const {postFav, deleteFav} = require("../controllers/favorites");

const router = Router();

//ruta http://localhost:3001/rickandmorty/login

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
