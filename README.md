Задание состоит в том, чтобы создать несколько функций. Весь код нужно написать в файле **/src/index.js**

1. `min` - принимает в качестве аргумента массив и возвращает минимальное значение числа из всех его значений. Если аргумент не передан или в массиве нет чисел, то не возвращает ничего. Если в массиве попадаются не числовые значения, то они игнорируются
2. `max` - всё так же как и `min`, только возвращает максимальное числовое значение из массива
3. `sum` принимает не определённое количество аргументов и возвращает их сумму. Нечисловые значения аргументов интерпретируются как 0.

### Примеры: 
    min([7, 8, 9, 5, 1]); // 1
    min([]); // undefined
    max([7, 8, 9, 5, 1]); // 9
    max(); // undefined
    sum(7, 8, 9, 5, 1); // 30
    sum(); // 0

### Что нужно знать:

- локальные переменные функций
- оператор определения типа значения `typeof`
- цикличесеие операторы `while`, `for`
- условный оператор `if`, `else`
- орператоры сравнения `===`, `<`, `>`, `<=`, `>=`
- логические операторы `&&`, `||`
- методы массивов `.forEach()`, `.filter()`, `.map()`
- переменная `arguments` в функции

Проверку правиольности решения можно осуществить с помощью автотестов в **/test/index.html**. Больше подробностье об инфраструктуре проекта в [HELP.md]('./HELP.md')