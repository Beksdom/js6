let arr = [];
while (true) {
  let command = prompt("Введите команду:");
  if (command === "stop") break;
  let [action, element] = command.split(" ");
  switch (action) {
    case "add":
      if (element == "") {
        console.log("Вы ничего не добавили.");
      } else {
        arr.push(element);
        console.log(`Элемент "${element}" добавлен в массив.`);
        console.log(arr);
      }
      break;
    case "del":
      let index = arr.indexOf(element);
      if (index !== -1) {
        arr.splice(index, 1);
        console.log(`Элемент "${element}" удален из массива.`);
        console.log(arr);
      } else {
        console.log(`Элемент "${element}" не найден в массиве.`);
      }
      break;
    default:
      console.log(`Неизвестная команда: "${command}".`);
  }
}
