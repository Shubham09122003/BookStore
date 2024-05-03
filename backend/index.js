const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors')
require('dotenv').config();

//middlewares
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Book Store Server is running here ...😊')
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const bookCollections = client.db('Book-Heaven').collection('books');

    //insert book
    app.post('/upload-book', async(req,res)=>{
        const data = req.body; 
        const result = await bookCollections.insertOne(data);
        res.send(result);
    });


    //get all the books
    app.get('/all-books',async(req,res)=>{
        const books = bookCollections.find();
        const result= await books.toArray();
        res.send(result);
    })
    
    //update a book
    app.patch('/book/:id', async(req,res)=>{
        const id = req.params.id;
        // console.log(id);
        const updateBookData = req.body;

        const filter = {_id : new ObjectId(id)};
        const options = {upsert : true };

        const updateDoc = {
            $set : {
                ...updateBookData
            }
        }

        //update
        const result = await bookCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    })


    //delete a book
    app.delete('/book/:id' , async(req,res)=>{
        const id = req.params.id;
        const filter = {_id : new ObjectId(id)};

        const result = await bookCollections.deleteOne(filter);
        res.send(result);

    })



    //find by category
    app.get('/all-books', async(req,res)=>{
        let query =  {};
        if(req.query?.category){
            query = {category: req.query.category}
        }
        const result = await bookCollections.find(query).toArray();
        res.send(result);
    })


    //get single book data
    app.get('/book/:id' , async(req,res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await bookCollections.findOne(filter);
        res.send(result);
    })
    
    console.log("Book-store is now connected to database");
  } finally {
    //so that server donot crash if error occurs 
  }
}
run().catch(console.dir);

app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})
