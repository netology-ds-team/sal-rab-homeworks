## Руководство по стилю кода
#### 1. Одна директива - одна строчка
Записывайте директивы отдельно на каждой строчке.

<span style="color: red; font-weight: bold">✗ Плохо:</span>
```javascript
let c = a + b; console.log(c);
```

<span style="color: green; font-weight: bold">✓ Хорошо:</span>
```javascript
let c = a + b;
console.log(c);
```
#### 2. Окончание директивы
В конце каждой директивы - точка с запятой.

<span style="color: red; font-weight: bold">✗ Плохо:</span>
```javascript
let c = a + b
console.log(c)
```

<span style="color: green; font-weight: bold">✓ Хорошо:</span>
```javascript
let c = a + b;
console.log(c);
```

#### 3. Отступы
Каждый вложенный логический блок отступает с левого края на 4 пробела дальше, чем блок, в который он вложен:

<span style="color: red; font-weight: bold">✗ Плохо:</span>
```javascript
function sum(a, b) {
let c = a + b;
return c;
}

function sum(a, b) {
           let c = a + b;
     return c;
}
```

<span style="color: green; font-weight: bold">✓ Хорошо:</span>
```javascript
function sum(a, b) {
    let c = a + b;
    return c;
}
```


#### 5. Пробелы вокруг операторов
Оставляйте вокруг операторов пробелы.

<span style="color: red; font-weight: bold">✗ Плохо:</span>
```javascript
let a=1;
let b=-4;
let c=3;

let d=b**2-4*a*c;

let x1=(-b-Math.sqrt(d))/2/a;
let x2=(-b+Math.sqrt(d))/2/a;

console.log(x1,x2);
```

<span style="color: green; font-weight: bold">✓ Хорошо:</span>
```javascript
let a = 1;
let b = -4;
let c = 3;

let d = b ** 2 - 4 * a * c;

let x1 = (-b - Math.sqrt(d)) / 2 / a;
let x2 = (-b + Math.sqrt(d)) / 2 / a;

console.log(x1, x2);
```

#### 6. Отступы между логическими блоками
Оставляйте между логическими блоками программы свободные строки

<span style="color: red; font-weight: bold">✗ Плохо:</span>
```javascript
let a = 1;
let b = -4;
let c = 3;
let d = b ** 2 - 4 * a * c;
let x1 = (-b - Math.sqrt(d)) / 2 / a;
let x2 = (-b + Math.sqrt(d)) / 2 / a;
console.log(x1, x2);
```

<span style="color: green; font-weight: bold">✓ Хорошо:</span>
```javascript
let a = 1;
let b = -4;
let c = 3;

let d = b ** 2 - 4 * a * c;

let x1 = (-b - Math.sqrt(d)) / 2 / a;
let x2 = (-b + Math.sqrt(d)) / 2 / a;

console.log(x1, x2);
```
