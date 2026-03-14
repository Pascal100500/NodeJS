const fs = require("fs");

let text = "";

try {
  text = fs.readFileSync("data.txt", "utf-8");
  console.log("Синхронное чтение:");
  console.log("Содержимое файла data.txt:");
  console.log(text);

} catch (error) {
  console.log("Ошибка: файл не найден или не удалось прочитать.");
}

const lines = text.split("\n");
console.log("Количество строк:", lines.length);

const words = text.trim().split(/\s+/);
console.log("Количество слов:", words.length);

console.log("Количество символов:", text.length, "\n");


// АСИНХРОННЫЙ ВАРИАНТ ЧТЕНИЯ ФАЙЛА
fs.readFile("data_async.txt", "utf-8", (error, text) => {

  if (error) {
    console.log("Ошибка чтения файла:", error.message);
    return;
  }

  console.log("Асинхронное чтение:");
  console.log("Содержимое файла data_async.txt:");
  console.log(text);

  const lines_async = text.split("\n");
  const words_async = text.trim().split(/\s+/);
  const characters_async = text.length;

  console.log("Количество строк:", lines_async.length);
  console.log("Количество слов:", words_async.length);
  console.log("Количество символов:", characters_async);

});

console.log("Эта команда синхронная и выполнится раньше чем...");
console.log("Асинхронаая задача, которая сейчас в очереди CallBack \n");