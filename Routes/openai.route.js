// const openai = require('openai');
const express = require('express');
const OpenAIRouter = express.Router()



const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));



API_KEY="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"


OpenAIRouter.post("/get", async (req, res) => {
    const { message } = req.body
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `create shayari on ${message}` }],
            max_tokens: 100,
        })
    }

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options)

        const data = await response.json()
        console.log(data)
        let result = data.choices[0].message.content
        res.send(result)
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
})


module.exports=OpenAIRouter




