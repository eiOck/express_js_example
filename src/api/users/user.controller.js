import express from 'express';
import userService from './user.service';
/**
 * User controller for create, get one or all, delete functionalities
 */
const router = express.Router();

router.get('/', userService.getAll);

router.get('/:id', userService.getById);

router.post('/', userService.create);

router.delete('/:id', userService.deleteById);

export default router;
