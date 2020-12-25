
class WordDictionary {
    constructor() {
        this.map = new Map();
    }
    
    addWord = function (word) {
        let index = word.length;
        if (!this.map.has(index)) {
            const list = [];
            list.push(word);
            this.map.set(index, list);
        } else {
            this.map.get(index).push(word);
        }
    };

    search = function (word) {
        let index = word.length;
        if (!this.map.has(index)) {
            return false;
        }
        const list = this.map.get(index);
        if (this.isWords(word)) {
            return list.includes(word);
        }
        list.forEach((s) => {
            if (this.isSame(s, word)) {
                return true;
            }
        });
        return false;
    }

    isWords = function(s) {
        const letters = /^[A-Za-z]+$/
        if (s.match(letters)) {
            return false;
        }
        return true;
    }

    isSame = function(a, search) {
        if (a.length != search.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (search.charAt(i) != '.' && search.charAt(i) != a.charAt(i)) {
                return false;
            }
        }
        return true;
    }
}
