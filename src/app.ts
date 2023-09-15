import express, { Application, Request, Response } from 'express'
import flightRouter from './routes/flight.routes'
import bookRouter from './routes/book.routes'
import userRouter from './routes/user.routes'

import bodyParser from 'body-parser';
import cors from 'cors'
import session from 'express-session';


declare module 'express-session' {
    export interface SessionData {
        userId: number;
    }
}

const app: Application = express()

const port: number = 8083
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(bodyParser.json())

app.use(userRouter)
app.use(flightRouter)
app.use(bookRouter)

app.get('/health', (req: Request, res: Response) => {
    res.sendStatus(200)
})

app.use(flightRouter)

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})