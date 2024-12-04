// controllers/networkController.js
const { classifyInput } = require('../services/inputClassifier');
const { extractNetworkComponents } = require('../services/networkExtractor');
const openai = require('../config/openai');

const processInput = async (req, res) => {
    try {
        const { input } = req.body;
        
        // First, classify the input
        const inputType = await classifyInput(input);
        
        if (inputType === 'design') {
            // Extract network components
            const components = await extractNetworkComponents(input);
            
            // Generate diagram data
            const diagramData = {
                type: 'diagram',
                components,
                explanation: `Network design created with ${components.routers.length} routers and ${components.switches.length} switches.`
            };
            
            res.json(diagramData);
        } else {
            // Handle general questions
            const completion = await openai.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: "You are a networking expert. Provide clear, concise answers to networking questions."
                    },
                    {
                        role: "user",
                        content: input
                    }
                ],
                model: "gpt-3.5-turbo",
            });
            
            res.json({
                type: 'text',
                text: completion.choices[0].message.content.trim()
            });
        }
    } catch (error) {
        console.error('Error processing input:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { processInput };