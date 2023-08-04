const express =require("express")
const cors=require("cors")
const OpenAIRouter = require("./Routes/openai.route")

const app=express()
app.use(cors())
app.use(express.json())

app.use("/openai",OpenAIRouter)



app.listen(4001,async()=>{
    try {

        
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
})