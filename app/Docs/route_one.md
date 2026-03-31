import NextResponse from "Next/Server"

let Data = [];

export async function GET() {
    return NextResponses.json(Data);
}

export async function POST(request) {
    const body = await request.json();

    // schema
    const NewData = {
        id: Date.now(),
        name: "body.name",
        age: "body.age",
        city: "body.city",
    },

    retuen NextResponse.json({
        message: "Data Added",
        UserData: NewData,
    })
}