
const item = new List(['one', 'two', 'three', 'four'])
item.render();

let cssClass2 = new List2(['one', 'two', 'three', 'four'], 'class-any')
cssClass2.render();
console.log(cssClass2);


let cssClass3 = new List3(['one', 'two', 'three', 'four'], ['text-center', 'bold', 'text-red'])
cssClass3.render();
console.log(cssClass3);
