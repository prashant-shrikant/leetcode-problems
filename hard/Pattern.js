let text = "abc"
let ptrn = "....     ..*"


let matcher = (text, ptrn) => {
    
    if (ptrn.startsWith(".*")) {
        if (ptrn.length == 2) {
            console.log("matched")
        }
    }
    if (ptrn.startsWith(".")) {
        console.log(text, ptrn)
        if (text.length === 1 && ptrn.length === 1) {
            console.log("matched")
        }
        else if(text.length === 1 && ptrn.length > 1){
            console.log("false");
        } else {
            text = text.substring(1, text.length)
            ptrn = ptrn.substring(1, ptrn.length)
            matcher(text, ptrn)
        }
    }
}  

matcher(text, ptrn)