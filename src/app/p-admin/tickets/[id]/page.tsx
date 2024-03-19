"use client";
import { ITicket } from "@/components/templates/AdminPanel/Tickets/TicketsTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";

const SingleTicketPage = ({ params }: { params: { id: string } }) => {
  const [ticket, setTicket] = useState<ITicket | null>(null);

  useEffect(() => {
    fetch(`/api/tickets/${params.id}`)
      .then((res) => res.json())
      .then((data) => setTicket(data));
  }, []);

  return (
    <div className="">
      <h2 className="text-lg font-bold">پاسخ به تیکت کاربر</h2>
      <div className="bg-blue-100 mt-5 rounded-lg p-3 flex flex-col gap-4">
        <div className="self-start flex flex-col gap-5 bg-white p-3 rounded-lg w-1/2 shadow-lg">
          <div className="flex items-center gap-2">
            <Image
              height={30}
              width={30}
              src={
                ticket?.user.profilepic
                  ? ticket.user.profilepic
                  : "/images/noavatar.png"
              }
              alt="ticketavatar"
            />
            <span className="font-bold text-sm">{ticket?.user.name}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>{ticket?.body}</p>
          </div>
          <div className="self-end text-sm text-muted-foreground">
            {new Date(ticket?.createdAt).toLocaleDateString("fa-IR")}
          </div>
        </div>
        <div className="self-end flex flex-col gap-5 bg-green-100 p-3 rounded-lg w-1/2 shadow-lg">
          <div className="flex items-center gap-2">
            <Image
              height={30}
              width={30}
              src={"/images/noavatar.png"}
              alt="ticketavatar"
            />
            <span className="font-bold text-sm">ادمین</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>سلام و عرض ادب و احترام .</p>
          </div>
          <div className="self-end text-sm text-muted-foreground">
            1402,11,12
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Input className="border border-primary" placeholder="پاسخ" />
          <Button>ارسال</Button>
        </div>
      </div>
    </div>
  );
};

export default SingleTicketPage;
