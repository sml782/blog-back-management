'use strict';

const fs = require('fs');
const path = require('path');

module.exports = app => {
	class HomeController extends app.Controller {
	    async index(ctx) {
		    // const locations = await ctx.model.Location.findAll();

		    // fs.writeFile(path.resolve(__dirname, "test.txt"), "hello world!", function(err) {
		    //   if(err) {
		    //       return console.log(err);
		    //   }
		    //   console.log("The file was saved!");
		    // });

		    let fileContent = await fs.readFileSync(path.join(__dirname, "../../test.md"), 'utf8', function(err, data) {
			    if(err) {
			        return err
			    }
			    return data
		    });

		    console.log(JSON.stringify(ctx.query) === '{}' ? ctx.request.body : ctx.query)

		    // ctx.set("Access-Control-Allow-Credentials", "true");


		    // ctx.body = ctx.query

		    await ctx.render('page/test.tpl', { fileContent });
	    }

	    async write(ctx) {

		    // console.log(JSON.stringify(ctx.query) === '{}' ? ctx.request.body : ctx.query)

	        // ctx.set("Access-Control-Allow-Credentials", "true");  // fetch 跨域专用
	        const msg = await ctx.service.article.write(ctx.request.body.mdCon)
	        // console.log(222222, ctx.service.article)

	        setTimeout(() => {
	        	console.log(222222, msg)
	        }, 3000)

	     	ctx.body = {
	     		msg,
	     		body: msg,
	     		status: 200
	     	}
	    }
	}
	return HomeController;
};
