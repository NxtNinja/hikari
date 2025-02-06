import ky from "ky";
import env from "@/lib/env";


const kyServer = ky.create({
    prefixUrl: env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
    mode: "cors",
    cache: "no-store",
});

export default kyServer;
