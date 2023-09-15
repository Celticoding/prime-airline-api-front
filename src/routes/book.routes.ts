import express from 'express';
import { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

router.post('/book', async (req: Request, res: Response) => {

  try {
    const response = await axios.post(global.BOOKING_API + "/book", {book: req.body});
    res.send(response.data);
  } catch (e) {
    res.send({
      'code': 'ERROR',
      'message': 'BOOKING_API unreachable'
    });
  }
});

router.get('/booking-history', async (req: Request, res: Response) => {
  try {
    const response = await axios.post(global.BOOKING_API + "/booking-history");
    res.send(response.data);
  } catch (e) {
    res.send({
      'code': 'ERROR',
      'message': 'BOOKING_API unreachable'
    });
  }
});


export default router;