import TicketsTable from "@/components/templates/AdminPanel/Tickets/TicketsTable";
import TicketModel from "@/models/Ticket";

const TicketsPage = async () => {
  const tickets = await TicketModel.find({})
    .populate("user")
    .sort({ _id: -1 })
    .lean();
  return (
    <>
      <h2 className="font-bold text-primary text-lg p-3">لیست تیکت ها</h2>
      <TicketsTable tickets={JSON.parse(JSON.stringify(tickets))} />
    </>
  );
};

export default TicketsPage;
