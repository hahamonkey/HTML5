/**
 * Created by Administrator on 2018/4/21.
 */
var worker = new Worker('task.js');
worker.onmessage = function(){

};
worker.postMessage('asaa');

console.log('bbbb');