import express from 'express';
import { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

router.post('/book', async (req: Request, res: Response) => {

  try {
    console.log(global.BOOKING_API + "/book")
    const response = await axios.post(global.BOOKING_API + "/book", {book: req.body});
    console.log(response);
    res.send(response.data);
  } catch (e) {
    console.log(e)
    res.send({
      'code': 'ERROR',
      'message': 'BOOKING_API unreachable'
    });
  }
});

router.get('/booking-history', async (req: Request, res: Response) => {
  try {
    if (req.query.userId === undefined) {
      res.sendStatus(400)
      return
    }

    const response = await axios.get(global.BOOKING_API + "/booking-history", { params: { userId: req.query.userId } });
    res.send(response.data);
  } catch (e) {
    res.send({
      'code': 'ERROR',
      'message': 'BOOKING_API unreachable'
    });
  }
});

router.post('/cancel-book', async (req: Request, res: Response) => {
  try {
    const response = await axios.post(global.QUEUE_API + "/cancel-book", {bookingId: req.body});
    res.send(response.data);
  } catch (e) {
    res.send({
      'code': 'ERROR',
      'message': 'QUEUE_API unreachable'
    });
  }
});

export default router;