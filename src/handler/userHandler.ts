import { Request, Response } from 'express'
import { database } from '../db.js'
import { StatementSync } from 'node:sqlite'
import { StatusCodes } from 'http-status-codes'
import bcrypt from 'bcrypt'

export const registerUser = async (req: Request, res: Response) => {
    const { id, username, firstname, lastname, email, password, role } = req.body
    let hashedPassword: string = await bcrypt.hash(password, 10)

    const query: StatementSync = database.prepare(`
        INSERT INTO Users (Id, Username, FirstName, LastName, Email, HashedPassword, Role) VALUES (?, ?, ?, ?, ?, ?, ?)
    `)

    query.all(id, username, firstname, lastname, email, hashedPassword, role)

    res.json({ id, username, firstname, lastname, email, hashedPassword, role })
}
