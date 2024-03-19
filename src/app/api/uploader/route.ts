import { writeFile } from "fs/promises";
import path from "path";

export const POST = async (req: Request) => {
  const data = await req.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return Response.json(
      { msg: "Nothing found" },
      {
        status: 404,
      }
    );
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const name = Date.now() + file.name;

  const uploadPath = path.join(process.cwd(), "public/uploads", name);

  await writeFile(uploadPath, buffer);

  return Response.json(`/uploads/${name}`, {
    status: 201,
  });
};
