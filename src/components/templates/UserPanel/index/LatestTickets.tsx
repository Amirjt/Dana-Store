import { Button } from "@/components/ui/button";
import { ITicket } from "../../AdminPanel/Tickets/TicketsTable";

const LatestTickets = ({ tickets }: { tickets: ITicket[] }) => {
  return (
    <div className="relative rounded-lg shadow-lg  p-5 flex flex-col gap-3 w-1/2">
      <span className="absolute -top-3 -right-3 p-2 rounded-lg text-white bg-primary">
        <h3>آخرین تیکت ها</h3>
      </span>
      {tickets.map((ticket) => (
        <div
          key={ticket._id}
          className="flex flex-col gap-3 bg-slate-200 p-2 rounded-lg"
        >
          <div className="flex items-center justify-between mt-3">
            <h3 className="font-bold">{ticket.title}</h3>
            <span className="text-xs">
              {new Date(ticket.createdAt).toLocaleDateString("fa-IR")}
            </span>
          </div>
          <p className="text-sm">{ticket.body}</p>
          <span className="bg-green-500 text-green-800 p-2 rounded-lg self-end font-bold text-sm ">
            پاسخ داده شده
          </span>
        </div>
      ))}
      <Button>مشاهده همه</Button>
    </div>
  );
};

export default LatestTickets;
