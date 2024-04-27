const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://127.0.0.1:27017/my_database', {useNewUrlParser: true});
// BlogPost.create({
//     title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
//     body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year.They go like this:'
//     }, (error, blogpost) =>{
//     console.log(error,blogpost)
// })
// BlogPost.create({
//   title: 'The Mythbuster’s Guide ',
//   body: 'I still dont know anything'
// })
// .then(blogpost => {
//   console.log(blogpost);
// })
// .catch(error => {
//   console.error(error);
// });
var id = "662ce19c0a13e706797c40b4";
// BlogPost.findByIdAndUpdate(id,{title:'This is the updated title third time'}, { new: true})
// .then(blogpost=>{
//   console.log(blogpost)
// }).
// catch(error=>{
//   console.log(error)
// })

BlogPost.findByIdAndDelete(id).
then(blogpost=>{
  console.log(blogpost)
}).
catch(error=>{
  console.log(error)
})

