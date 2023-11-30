class _Array<T> {

    private elements: T[]
    private length: number;
    private currentIndex: number;

    constructor() {
        this.elements = [];
        this.length = 0;
        this.currentIndex = 0;
    }

    addElement(element: T): T {
        this.elements[this.currentIndex] = element;
        this.currentIndex++;
        this.length++;
        return element;
    }

    addElements(elements: T[]): T[] {
        let index = 0;
        while (elements[index]) {
            this.addElement(elements[index]);
            index++;
        }
        return elements;
    }

    toString() {
        return this.elements.toString();
    }

}

const array = new _Array<number>();
array.addElements([1,2,3,4,5]);
console.log(array);
const numbers = [1,2,3,4,5]
numbers.filter