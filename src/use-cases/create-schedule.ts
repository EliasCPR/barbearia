import { Schedule } from "../entities/schedule";

interface CreateScheduleInput {
  costumer: string;
  startsAt: Date;
  endsAt: Date;
}

type CreateScheduleOutput = Schedule;

export class CreateSchedule {
  async execute({
    costumer,
    endsAt,
    startsAt,
  }: CreateScheduleInput): Promise<CreateScheduleOutput> {
    const schedule = new Schedule({
      costumer,
      endsAt,
      startsAt,
    });

    return schedule;
  }
}
