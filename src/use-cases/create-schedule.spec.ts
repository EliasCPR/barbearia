import { describe, expect, it } from "vitest";
import { Schedule } from "../entities/schedule";
import { CreateSchedule } from "./create-schedule";

describe("Create Schedule", () => {
  it("should be able to create an Schedule", () => {
    const sut = new CreateSchedule();

    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() + 1)
    endsAt.setDate(endsAt.getDate() + 2);

    expect(sut.execute({
      costumer: "John Doe",
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Schedule);
  });
});
