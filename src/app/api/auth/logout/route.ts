import { cookies } from "next/headers";

export const GET = async () => {
  try {
    const token = cookies().get("token")?.value;
    if (token) {
      cookies().delete("token");
    }

    return Response.json({ msg: "User loged out Successfully" });
  } catch (error) {
    return Response.json(
      { msg: "Server Error " + error },
      {
        status: 500,
      }
    );
  }
};
