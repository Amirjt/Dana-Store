import connectToDb from "@/lib/db";
import TicketModel from "@/models/Ticket";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  connectToDb();
  const { id } = params;
  const ticket = await TicketModel.findById(id).populate("user");
  return Response.json(ticket);
};



