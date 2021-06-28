// lesson-9

// Task

const paragraph = document.querySelectorAll('p');

const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        return this 
    },
    next() {
        if (this.currentColor === undefined) {
            this.currentColor = 0;
        }

        if (this.currentColor < this.data.length) {
            return { 
                done: false,
                value: this.data[this.currentColor++]
            }
        }

        if (this.currentColor === this.data.length) {
            this.currentColor = 0;
            return this.next()
        }
        
        return {
            done: true
        }
    }
};

const changeStyle = data => event => {
    event.target.style.color = data.next().value;
  };

for(let item of paragraph) {
    item.addEventListener('click', changeStyle({...colors}))
};