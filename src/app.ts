import dotenv from 'dotenv'
import { sendCustomResponse, statusCode } from './config/http.config'
import express, { 
    Express, 
    Request, 
    Response, 
    NextFunction,
} from 'express'
import { testConnection } from './config/db.config'

dotenv.config()
 
const app: Express = express()
const port: string | undefined = process.env.PORT

/**
 * Handle CORS policy
 */
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
 
app.get('/', (req: Request, res: Response) => {
    return sendCustomResponse({
        response: res,
        status: statusCode.OK.code,
        error: false,
        message: 'Hello World!',
    })
})

app.get('/test-database-connection', (req: Request, res: Response) => {
    return testConnection(res)
})
 
app.listen(port, () => {
    return console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})