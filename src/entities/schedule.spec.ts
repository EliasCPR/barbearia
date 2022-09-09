import { expect, test } from "vitest";
import { Schedule } from "./schedule";

test("create an schedule", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() + 1)
  endsAt.setDate(endsAt.getDate() + 2)

  const schedule = new Schedule({
    costumer: "John Doe",
    startsAt,
    endsAt
  });

  expect(schedule).toBeInstanceOf(Schedule);
  expect(schedule.costumer).toEqual("John Doe");
});

test("cannot create schedule whose end date is greater than the start date", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() + 1)

  expect(() =>{
    return new Schedule({
      costumer: "John Doe",
      startsAt,
      endsAt
    });
  }).toThrow()

});

test("cannot create schedule with start date before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1)
  endsAt.setDate(endsAt.getDate() + 3)

  expect(() =>{
    return new Schedule({
      costumer: "John Doe",
      startsAt,
      endsAt
    });
  }).toThrow()

});
