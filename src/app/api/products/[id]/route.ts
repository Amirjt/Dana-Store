import authUser from "@/lib/authUser";
import connectToDb from "@/lib/db";
import ProductModel from "@/models/Product";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  connectToDb();
  const { id } = params;
  const product = await ProductModel.findById(id);
  return Response.json(product);
};

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const user = await authUser();

  if (!user || user.role !== "ADMIN") {
    return Response.json(
      { msg: "You are not allowed to delete this Product" },
      {
        status: 405,
      }
    );
  }

  connectToDb();

  const { id } = params;
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

  await ProductModel.findByIdAndUpdate(id, {
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

  return Response.json({ msg: "Product Updated" });
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const user = await authUser();

  if (!user || user.role !== "ADMIN") {
    return Response.json(
      { msg: "You are not allowed to delete this Product" },
      {
        status: 405,
      }
    );
  }

  connectToDb();

  const { id } = params;

  await ProductModel.findByIdAndDelete(id);

  return Response.json({ msg: "Product Deleted" });
};
