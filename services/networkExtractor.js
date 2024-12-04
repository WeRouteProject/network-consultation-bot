// services/networkExtractor.js
const openai = require('../config/openai');

const extractNetworkComponents = async (input) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a network component parser. Extract network components and return them in JSON format."
                },
                {
                    role: "user",
                    content: `Extract network components from: "${input}". Return a JSON object with arrays of 'routers', 'switches', and 'connections'. For example:
                    {
                        "routers": [{"id": "R1", "name": "Router1"}],
                        "switches": [{"id": "S1", "name": "Switch1"}],
                        "connections": [{"from": "R1", "to": "S1"}]
                    }`
                }
            ],
            model: "gpt-3.5-turbo",
            response_format: { type: "json_object" }
        });

        return JSON.parse(completion.choices[0].message.content);
    } catch (error) {
        if (error.response?.status === 429) {
            res.status(429).json({
                error: "Quota exceeded. Please check your OpenAI usage or try again later."
            });
        } else {
            res.status(500).json({ error: error.message });
        }        
        console.error('Error extracting network components:', error);
        throw error;
    }
};

module.exports = { extractNetworkComponents };