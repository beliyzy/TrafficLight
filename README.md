Требуется разработать эмулятор светофора.
-
Приложение должно представлять из себя модель светофора и иметь 3 экрана:
Экран 1: горит красный (зеленый и желтый тусклые/полупрозрачные)
Экран 2: горит желтый (зеленый и
красный тусклые/полупрозрачные)
Экран 3: горит зеленый (красный и желтый тусклые/полупрозрачные)
Роутинг приложения должен быть настроен таким образом, чтобы при вводе адреса в
адресной строке можно было открыть любой из экранов

Запуск работы светофора должен происходить сразу после открытия приложения.
Светофор может начинать свою работу с любого сигнала, в зависимости от открытого
экрана, и должен работать циклически: красный('/red'), желтый('/yellow'), зеленый('/green'), желтый('/yellow'), красный('/red'), желтый('/yellow') и т.д.

При смене сигнала должен также меняться роут (адрес в адресной строке).
Красный горит 10 секунд.
Желтый горит 3 секунды.
Зеленый горит 15 секунд.

# traffic-light

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).