const Koa = require('koa');
const render = require('koa-art-template');
const path = require('path');
const fs = require('fs-extra');
const calcSolve = require("./utils/calc-solve.js");

const app = new Koa();

render(app, {
  root: path.join(__dirname, 'view')
});

app.use(async function (ctx) {
  const users = [{name: 'Dead Horse'}, {name: 'Jack'}, {name: 'Tom'}];
  let dir = await fs.readdir(`${path.resolve(process.cwd(), "src")}`)
  let count = calcSolve(dir)
  await ctx.render('index', {
    count
  });
});

if (process.env.NODE_ENV === 'test') {
  module.exports = app.callback();
} else {
  app.listen(7001);
  console.log('open http://localhost:7001');
}

app.on('error', function (err) {
  console.log(err.stack);
});
