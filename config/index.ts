const dev = process.env.NODE_ENV !== "production";

export const baseUrl = dev
  ? "http://localhost:3000"
  : "https://yn2011-next-prisma-vercel-sandbox.vercel.app/";
