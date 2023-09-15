import express from 'express';
import { Request, Response } from 'express';
import axios from 'axios';
import Global from '../types/index'

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
        const params = { params: {
            currency: currency,
            date: date
        }}
        const response = await axios.get(Global.FLIGHT_API + "/flights", params);
        res.send(response.data);
    } catch (exception) {
        res.send({
            'code': 'COULD_NOT_RETRIEVE_FLIGHTS',
            'message': 'Could not retrieve flights'
        });
    }
});


router.get('/flights/currencies', async (req: Request, res: Response) => {
    try {
        const response = await axios.get(Global.FLIGHT_API + "/flights/currencies");
        res.send(response.data);
    } catch (exception) {
        res.send({
            'code': 'COULD_NOT_RETRIEVE_CURRENCIES',
            'message': 'Could not retrieve currencies'
          });
    }
});

export default router;