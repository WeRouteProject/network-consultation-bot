// services/inputClassifier.js
const openai = require('../config/openai');

const classifyInput = async (input) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a network design assistant. Classify the following input as either 'design' or 'question'."
                },
                {
                    role: "user",
                    content: `Classify this input: "${input}". If it mentions creating, designing, or building a network, classify as 'design'. Otherwise, classify as 'question'. Reply with just one word: either 'design' or 'question'.`
                }
            ],
            model: "gpt-3.5-turbo",
        });

        return completion.choices[0].message.content.trim().toLowerCase();
    } catch (error) {
        console.error('Error classifying input:', error);
        throw error;
    }
};

module.exports = { classifyInput };