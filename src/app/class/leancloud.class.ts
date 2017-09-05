// var APP_ID = 'qGOBof4CmqXzgG91fjM6d1TJ-gzGzoHsz';
// var APP_KEY = '8JzRYWYugrTDC4phdOPCqhB3';
// var AV = require('leancloud-storage');

// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });

// module.exports = AV;

import * as AV from "leancloud-storage";

export class leancloud{
    private APP_ID: string = "qGOBof4CmqXzgG91fjM6d1TJ-gzGzoHsz";
    private APP_KEY: string = "8JzRYWYugrTDC4phdOPCqhB3";

    public obj = AV.init({
        appId: this.APP_ID,
        appKey: this.APP_KEY
    });
}