'use strict';

const 
    js0 = require('js0')
;

class abQRCodesGenerator_Class {
    constructor() {

    }

    async generateText_Async(elem, text) {
    js0.args(arguments, HTMLElement, 'string');
    
    return js0.rtn(null, (() => {
        return new Promise((resolve, reject) => {
            var qr = qrcode(4, 'L');
            qr.addData(text);
            qr.make();
            elem.innerHTML = qr.createImgTag(10);
        });
    })());}
}
export default abQRCodesGenerator = new abQRCodesGenerator_Class();