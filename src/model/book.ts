import { SQLOutputValue, StatementSync } from 'node:sqlite'
import { database } from '../db.js'

interface releaseDate {
    "year": number,
    "month": number,
    "day": number
}

class Book {
    public static create(id: number, title: string, author: string, authorId: number, releaseDate: releaseDate): Record<string, SQLOutputValue>[] {
        const releaseDateStr: string = `${releaseDate.year}-${String(releaseDate.month).padStart(2, "0")}-${String(releaseDate.day).padStart(2, "0")}`

        const query: StatementSync = database.prepare(`
            INSERT INTO Books (Id, Title, Author, AuthorId, ReleaseDate) VALUES (?, ?, ?, ?, ?)
        `)

        return query.all(id, title, author, authorId, releaseDateStr)
    }
}
