const express = require('express');
const router = express.Router();
const {createUser, updateUser, deleteUser, userLogin, getUserProfile} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware')

// router.route('/')
// .get(getUser)
// .post(createUser);

// router.route('/:id')
// .delete(deleteUser)
// .put(updateUser);

// router.get('/', getUser);

router.get("/profile", protect ,getUserProfile )

router.post('/register', createUser)

router.post('/login', userLogin);

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router;