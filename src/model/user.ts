import { database } from '../db.js'
import { SQLOutputValue, StatementSync } from 'node:sqlite'

export class User {
    public static create(id: number, firstName: string, lastName: string, username: string, email: string, role: string, hashedPassword: string): Record<string, SQLOutputValue>[] {
        const query: StatementSync = database.prepare(`
            INSERT INTO Users (Id, Username, FirstName, LastName, Email, HashedPassword, Role) VALUES (?, ?, ?, ?, ?, ?, ?)
        `)

        return query.all(id, username, firstName, lastName, email, hashedPassword, role)
    }

    public static read(id: number): Record<string, SQLOutputValue>[] {
        const query: StatementSync = database.prepare(`
            SELECT Id, FirstName, LastName, Username, Role FROM Users WHERE Id = ?
        `)

        return query.all(id)
    }

    public static update(id: number, column: string | number, row: string | number): Record<string, SQLOutputValue>[] {
        const query: StatementSync = database.prepare(`
            UPDATE Users
            SET ? = ?
            WHERE Id = ?
        `)

        return query.all(column, row, id)
    }

    public static delete(id: number): Record<string, SQLOutputValue>[] {
        const query: StatementSync = database.prepare(`
            DELETE FROM Users WHERE Id = ?
        `)

        return query.all(id)
    }
}
