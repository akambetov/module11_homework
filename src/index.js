/**Напишите функцию countDown(n), которая получает число {n} в качестве аргумента и
 * возвращает строку с обртаным отсчетом начиная с этого числа. Например countDown(3)
 * вернет строку: "3 2 1"
 */
export function countDown(num) {
  let result = "";
  if (num <= 0) result = "Число не может быть меньше 0.";
  else if (typeof num != "number") result = "Введите данные в числовом формате";
  else {
    for (let i = num; i > 0; i--) {
      result += `${i} `;
    }
  }
  return result.replace(/\s*$/, "");
}

// console.log(countDown(31));
// console.log(countDown(0));
// console.log(countDown(-1));
// console.log(countDown("asd"));
