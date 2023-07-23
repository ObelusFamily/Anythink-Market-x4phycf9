// var axios = require("axios");
// import { Configuration, OpenAIApi } from "openai";
const {Configuration, OpenAIApi} = require('openai')

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

async function generateImage(prompt) {
    return await openai.createImage({
        prompt: prompt,
        n: 1,
      size: "512x512",
    }).then(() => console.log('hurray')).catch((error) => {
        if (error.response) {
            console.log("Avatar error status: ", error.response.status);
            console.log("Avatar error data: ", error.response.data);
          } else {
            console.log("Avatar error message: ", error.message);
          }
    })
}

module.exports = generateImage;