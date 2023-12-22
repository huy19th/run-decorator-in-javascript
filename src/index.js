const { timer } = require('execution-time-decorators');

class Test {
    @timer() // decorator to log execution time
    static run() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, (Math.random() * 1) * 1000, true);
        });
    }
}

Test.run();