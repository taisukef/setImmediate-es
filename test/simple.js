import { setImmediate, clearImmediate } from "../setImmediate.js";

const expectedArgs = ["A", "D"];
const recordedArgs = [];
function handler(arg) {
    recordedArgs.push(arg);
}

setImmediate(handler, "A");
clearImmediate(setImmediate(handler, "B"));
const handle = setImmediate(handler, "C");
setImmediate(handler, "D");
clearImmediate(handle);

console.log(recordedArgs, expectedArgs);
setTimeout(function () {
    console.log(recordedArgs, expectedArgs);
}, 100);
