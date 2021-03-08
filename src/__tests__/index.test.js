import { countDown } from "../index";

describe("Tests for countDown function", () => {
  const count = 3;
  it("Count down from positive (correct) number", () =>
    expect(countDown(count)).toBe("3 2 1"));
  it("Count down from 0", () =>
    expect(countDown(0)).toBe("Число не может быть меньше 0."));
  it("Count down from negative number", () =>
    expect(countDown(-1)).toBe("Число не может быть меньше 0."));
  it("Argument is not number type", () =>
    expect(countDown("sas")).toBe("Введите данные в числовом формате"));
});
