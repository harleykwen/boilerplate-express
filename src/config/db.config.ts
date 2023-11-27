import dotenv from 'dotenv'
import { Response } from 'express'
import { Sequelize } from 'sequelize'
import { sendCustomResponse, statusCode } from './http.config'

dotenv.config()

const DB_HOST = process.env.DB_HOST
const DB_USER: any = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE: any = process.env.DB_DATABASE

export const database = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
})

export async function testConnection(res: Response) {
    try {
        await database.authenticate()
        await database.close()
        console.log('Connection has been established successfully.')
        sendCustomResponse({
            response: res,
            status: statusCode.OK.code,
            error: false,
            message: statusCode.OK.name,
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error)
        sendCustomResponse({
            response: res,
            status: statusCode.INTERNAL_SERVER_ERROR.code,
            error: false,
            message: statusCode.INTERNAL_SERVER_ERROR.name,
            data: error,
        })
    }
}