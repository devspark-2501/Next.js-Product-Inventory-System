'use server

import { connectDB, Note } from "@/models/db"

// GET
export async function GET() {
    await connectDB()

    return Response.json(Note);
}

// POST
export async function POST(request) {
    const body = await request.json();

    const NoteData = {
        id: Date.now(),
        NoteMessage: body.message,
    },

    const NewNote = await Note.create(NoteData);

    return Response.json(NewNote);
}