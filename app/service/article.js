'use strict'; // eslint-disable-line

const _ = require('lodash');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
	class Article extends app.Service {
	    constructor(ctx) {
		    super(ctx);
		    this.ctx = ctx;
		    this.model = ctx.model;
	    }

	    async write (txt) {
	    	let msg = await fs.writeFile(path.resolve(__dirname, "../test" + ".md"), txt, function(err) {
		        if(err) {
		            return err;
		        }
		        return true
		    });

		    return msg
	    }
	}
    return Article;
};
