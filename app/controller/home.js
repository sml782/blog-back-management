'use strict';

const fs = require('fs');
const path = require('path');

module.exports = app => {
  class HomeController extends app.Controller {
    async index(ctx) {
      const locations = await ctx.model.Location.findAll();

      // fs.writeFile(path.resolve(__dirname, "test.txt"), "hello world!", function(err) {
      //   if(err) {
      //       return console.log(err);
      //   }
      //   console.log("The file was saved!");
      // });
      console.log(JSON.stringify(ctx.query) === '{}' ? ctx.request.body : ctx.query)

      let location;

      ctx.set("Access-Control-Allow-Credentials", "true");

      ctx.query.location
        ? location = locations.find(({ id }) => id === Number(ctx.query.location))
        : location = {
          id: 290,
          name: '北京',
        };

      const hotPlayMovies = await app.curl('https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=' + location.id, {
        dataType: 'json',
      }).then(res => res.data);

      // ctx.body = ctx.query

      await ctx.render('page/home.tpl', { location, locations, hotPlayMovies });
    }
  }
  return HomeController;
};
