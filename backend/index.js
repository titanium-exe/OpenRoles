import express from express 
const app = express();

// middleware 
app.use(express.json());


const PORT = 3000;

app.listen(PORT, ()=>{
  console.log(`server running at port ${PORT}`);
});

