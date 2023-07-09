"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const getSession = async () => {
  return getServerSession(authOptions);
};
export default getSession;
