import { Request, Response } from 'express'
import createScheduleService from '../services/schedule/createSchedules.service'
import { getSchedulesService } from '../services/schedule/getSchedule.service'


const createSchedulesController = async (req: Request, res: Response) => {
    
    const scheduleData = req.body
    const userId = res.locals.id

    const newSchedule = await createScheduleService(scheduleData, userId)

    return res.status(201).json({message:  "Schedule created"})
}

const listScheduleController = async (req: Request, res: Response) => {

    const realEstateId = parseInt(req.params.id);

    const listSchedule = await getSchedulesService(realEstateId)

    return res.status(200).json(listSchedule)
}

export {
    createSchedulesController,
    listScheduleController
}