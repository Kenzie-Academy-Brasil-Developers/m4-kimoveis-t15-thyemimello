import { z } from "zod";
import { createLoginSchema } from "../schemas/loginschemas";

type login = z.infer<typeof createLoginSchema>

export {
    login
}