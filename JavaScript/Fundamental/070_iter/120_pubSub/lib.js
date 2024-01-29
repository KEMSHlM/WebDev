const events = (function () {
    const eventStack = new Map();
    
    return {
        on (type, fn) {
            const fnStack = eventStack.get(type) || new Set();
            fnstack.add(fn);
            eventStack.set(type, fnStack);
        },
        off(type, fn) {
            const fnStack = eventStack.get(type);
            if (fnStack && fnStack.has(fn)) {
                fnStack.delete(fn);
            }
        },
        emit(type) {
            const fnStack = eventStack.get(type); 
            if (fnStack) {
                for (const fn of fnStack) {
                    fn();
                }
            }
        }
    };
})();

class MyLibrary {
    constructor() {
        events.emit('beforeInit');
        console.log('Library: process');
        events.emit('afterInit');
    }
}