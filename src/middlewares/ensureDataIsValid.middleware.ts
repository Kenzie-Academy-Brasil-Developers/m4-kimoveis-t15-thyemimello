import { Request, Response, NextFunction } from 'express'
import { ZodTypeAny } from 'zod'

const ensureDataIsValid = (sch: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validatedData = sch.parse(req.body)

    req.body = validatedData

    return next()
}

export default ensureDataIsValid