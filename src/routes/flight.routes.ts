import express from 'express';
import { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/flights', async (req: Request, res: Response) => {
  const currency: string = req.query.currency as string;
  const date: string = req.query.date as string;

  if (currency === undefined) {
    res.status(400);
    res.send({
      'code': 'CURRENCY_IS_MANDATORY',
      'message': 'Currency must be specified in the query'
    });
    return;
  }

  if (date === undefined) {
    res.status(400);
    res.send({
      'code': 'DATE_IS_MANDATORY',
      'message': 'Date must be specified in the query'
    });
    return;
  }

  try {
    const response = await axios.get(global.FLIGHT_API + "/flights");
    res.send(response.data);
  } catch (e) {
    res.send({
      'code': 'ERROR',
      'message': e
    });
  }
});


router.get('/flights/currencies', async (req: Request, res: Response) => {
    const response = await axios.get(global.FLIGHT_API + "/flights/currencies");
    res.send(response.data);
  });

export default router;