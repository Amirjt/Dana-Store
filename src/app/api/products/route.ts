import authUser from "@/lib/authUser";
import connectToDb from "@/lib/db";
import ProductModel from "@/models/Product";

export const GET = async () => {
  try {
    connectToDb();
    const products = await ProductModel.find({}).sort({ _id: -1 }).lean();
    return Response.json(products);
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        msg: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: Request) => {
  const user = await authUser();
  if (!user || user.role !== "ADMIN") {
    return Response.json(
      { msg: "You are not allowed" },
      {
        status: 405,
      }
    );
  }

  connectToDb();
  const {
    images,
    name,
    price,
    shortDescription,
    category,
    off,
    colors,
    longDescription,
    brand,
    model,
    weight,
    size,
    storage,
    ram,
    cpu,
    gpu,
    specialOptions,
  } = await req.json();

  await ProductModel.create({
    name,
    price,
    shortdesc: shortDescription,
    cat: category,
    off,
    colors,
    images,
    rating: 0,
    comments: [],
    longdesc: longDescription,
    details: {
      brand,
      model,
      weight,
      size,
      storage,
      ram,
      cpu,
      gpu,
      specialOptions,
    },
  });

  return Response.json(
    { msg: "Product Successfully Created" },
    {
      status: 201,
    }
  );
};
