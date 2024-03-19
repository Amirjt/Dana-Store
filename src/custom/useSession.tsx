"use client";

import { useEffect, useState } from "react";

type UserData = {
  address: string;
  profileimage: string;
  name: string;
  email: string;
  number: string;
  password: string;
  role: string;
  username: string;
  __v: number;
  _id: string;
};

const useSession = () => {
  const [session, setSession] = useState({
    status: "",
    data: null as UserData | null,
  });

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/auth/me");
      if (res.status === 200) {
        const data = await res.json();
        setSession({
          status: "authenticated",
          data,
        });
      } else {
        setSession({
          status: "unauthenticated",
          data: null,
        });
      }
    };
    getData();
  }, [setSession]);

  return { session };
};

export default useSession;
