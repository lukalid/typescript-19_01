class MyMap<T> {

    private map: { [key: string]: T } = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    print() {
        console.log("Map:");
        for (let key in this.map) {
            console.log(key + " -> " + this.map[key]);
        }
    }

}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 2);
console.log(numberMap.getItem("apples"));
numberMap.print();
numberMap.clear();
numberMap.print();