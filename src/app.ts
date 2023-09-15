import express, { Application, Request, Response } from 'express'

const app: Application = express()

const port: number = 8083

app.get('/health', (req: Request, res: Response) => {
    res.sendStatus(200)
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})