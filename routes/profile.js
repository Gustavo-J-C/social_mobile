const routes = require('express').Router();

const profileController = require('../controllers/profile');
const authenticateToken = require('../middlewares/authMiddleware');

routes.get('/:userId', profileController.getProfile);

routes.patch('/:userId', authenticateToken, profileController.editProfile);
routes.get('/:userId/summary', profileController.getProfileSumary);

routes.get('/:userId/following', profileController.getFollowing);
routes.get('/:userId/followers', profileController.getFollowers);

routes.post('/follow', authenticateToken, profileController.follow)
routes.post('/unfollow', authenticateToken, profileController.unfollow)

module.exports = routes