import mongoose from 'mongoose'

export async function ConnectDB() {
    await mongoose.connect(process.env.MONGO_URI);
}

const NoteSchema = new mongoose.schema({
    NoteMessage: String,
});

export const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);



import mongoose from 'mongoose'

export async fucntion ConnectDB() {
    await mongoose.connect(process.env.MONGO_URI);
}

const NOteSchema - new mongoose.schema({
    NoteMessage: String,
});

export const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);