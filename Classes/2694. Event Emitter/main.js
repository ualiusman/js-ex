class EventEmitter {

    constructor() {
        this.events = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {

        let event = this.events.get(eventName);
        if (event) {
            event.push(callback);
            this.events.set(eventName, event);
        } else {
            this.events.set(eventName, [callback]);
            console.log(this.events);
        }




        return {
            unsubscribe: () => {
                let event = this.events.get(eventName);
                event = event.filter(function (item) {
                    return item !== callback
                });
                this.events.set(eventName, event);
                if (event.length == 0)
                    this.events.delete(eventName);

            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        let results = [];
        let event = this.events.get(eventName);
        if (event) {
            event.forEach((x) => {
                let res = x(...args);
                results.push(res);
            })

        }
        return results;

    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */