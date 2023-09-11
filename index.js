const express = require('express');
const port = 1000;
const app = express();
const path = require('path');
const db = require('./config/mongoose');
const List = require('./models/list');

app.use(express.urlencoded());
app.use(express.static('assets'));

let list = [
    {
        description : "Clean the house",
        category : "cleaning",
        due : "12/10/2023",
    },
    {
        description : "Complete project",
        category : "work",
        due : "12/10/2023"
    }

]


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    // return res.render('home',{
    //     list : list
    // });
    List.find({})
        .then((data)=>{
            return res.render('home',{
                'list' : data,
            });
        }).catch((err)=>{
            console.log("Error occured in extracing data");
        });
});

app.get('/delete-task',function(req,res){
    let id = req.query.id;
    List.findByIdAndDelete(id)
        .then((data)=>{
            return res.redirect('back');
        }).catch((err)=>{
            console.log("Error Occured");
            return;
        })
});

app.post('/get-data', function(req,res){
    // console.log(req.body);
    // return res.redirect('back');
    List.create({
        description : req.body.description,
        category : req.body.category,
        checked : false,
        due : req.body.due
    }).then((data)=>{
        console.log(data);
        return res.redirect('back');
    }).catch((err)=>{
        console.log("Error Occured");
        return;
    })
});
// app.post('/ticked/:id',function(req,res){
//     List.findByIdAndUpdate(req.params.id)
//         .then((data)=>{
//             if(data.checked==true){
//                 data.checked = flase;
//             }else{
//                 data.checked = true;
//             }
            
//             console.log(data);
//             return res.redirect('back');
//         }).catch((err)=>{
//             console.log("Error Occured in patch")
//             return;
//         });
// })

app.listen(port,function(err){
    if(err){
        console.log(`Error in app listen, ${err}`);
        return;
    }
    console.log(`Server is running fine in the port : ${port}`);
});
