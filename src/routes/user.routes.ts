import express from 'express';
import { Request, Response } from 'express';
import mustBeAuthenticated from '../middlewares/mustBeAuthenticated';
import UserService from '../services/user.service';
import mustNotBeAuthenticated from '../middlewares/mustNotBeAuthenticated';
import { UserRequest } from '../request/user.request';
import UserDto from '../dtos/user.dto';

const router = express.Router();

router.get('/me',mustBeAuthenticated, async (req: Request, res: Response) => {
  const user = await UserService.getMe(+req.session.userId!)
  if (!user) {
    res.status(401)
    res.send('error when fetching current user')
    return;
  }
  const {email,id, name} = user
  const userDto = {id, email, name} as UserDto
  res.send(userDto);
});


router.post('/login', mustNotBeAuthenticated, async (req: Request, res: Response) => {
  const {email, password} = req.body;
  if (!email || !password) {
    res.status(400);
    res.json('invalid payload');
    return;
    
  }
  const userRequest = UserService.getUserByEmailAndPassword(email, password);
  if (!userRequest) {
    res.status(400);
    res.json('user not found');
    return;
  }
  const createdUser: UserRequest = {id: userRequest.id, email, password, name: userRequest.name}; 
  if (!createdUser) {
    res.json('error');
    return;

  }
  req.session.userId = createdUser?.id;

  res.send(createdUser);
});


router.post('/signin', mustNotBeAuthenticated, async (req: Request, res: Response) => {
  const {name, email, password} = req.body;
  if (!email || !password) {
    res.json('invalid payload');
    return;
    
  }
  const userRequest = UserService.getUserByEmail(email);
  if (userRequest) {
    res.json('this email is already used');
    return;
  }
  const createdUser = UserService.create(email,name, password);
  if (!createdUser) {
    res.json('error');

  }
  //req.session.userId = createdUser?.id;
  res.send(createdUser);
});

router.post('/logout',mustBeAuthenticated, async (req: Request, res: Response) => {
  delete req.session.userId;
  res.send('disconnected');
});

export default router;