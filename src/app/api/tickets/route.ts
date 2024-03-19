import connectToDb from "@/lib/db";
import TicketModel from "@/models/Ticket";

export const GET = async (req: Request) => {
  connectToDb();
  const tickets = await TicketModel.find({}).populate("user").lean();
  return Response.json(tickets);
};

export const POST = async (req: Request) => {
  const { title, body, dep, user, isAnswer } = await req.json();

  connectToDb();

  try {
    await TicketModel.create({
      title,
      body,
      dep,
      user,
      isAnswer,
    });

    return Response.json(
      { msg: "Ticket Created" },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
