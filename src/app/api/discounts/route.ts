import DiscountModel from "@/models/Discount";

export const GET = async () => {
  const data = await DiscountModel.find({}).sort({ _id: -1 });
  return Response.json(data);
};

export const POST = async (req: Request) => {
  const { name, percent, maxuse } = await req.json();

  await DiscountModel.create({
    name,
    percent,
    maxuse,
  });

  return Response.json(
    {
      msg: "Created",
    },
    {
      status: 201,
    }
  );
};
