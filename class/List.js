class List {
    constructor(arr) {
        this.arr = arr;
    }
    render() {
        const arrChangedElement = [];
        this.arr.forEach(element => {
            let createdElement = document.createElement('li');
            createdElement.textContent = element;
            document.body.append(createdElement)
            arrChangedElement.push(createdElement)
        });

        return arrChangedElement;
    }
}

// Task 1
//  <p>В данной работе мы используем шаблон. Создайте класс List. Добавьте в него конструктор, который принимает в качестве параметра массив строк (пример приведен ниже). Данный массив присваивается свойству класса item. </p>
//  <pre><code>
//  ['one', 'two', 'three', 'four']
//  </code></pre>

//  Task 2
//  <p>Добавьте в класс List метод render() который создает с помощью createElement элемент ul, и циклом перебирая this.item добавляет в ul элементы li, которые содержат текст из this.item. </p>
//  <p>Метод должен возвращать созданный элемент ul.</p>

//  Task 3
//  <p>Создайте экземпляр класса List, передайте ему массив строк. Выведите полученный с помощью render список на страницу.</p>


// Task 4.