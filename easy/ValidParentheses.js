const validParenthesis = str => {
    let i = 0; 
    let resultStack = [];
    const map = new Map();
    map.set('}', '{');
    map.set(')', '(');
    map.set(']', '[');
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        if (char == '{' || char == '(' || char == '[') {
            resultStack.push(char);
        } else {
            if (map.get(char) === resultStack[resultStack.length - 1]) {
                resultStack.pop();
            } else {
                return false;
            }
        }
    } return true;
}

console.log(validParenthesis("{[]}"))