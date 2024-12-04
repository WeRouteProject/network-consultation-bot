const nluService = require('../services/nluService');

exports.handleQuery = (req, res) => {
    const userQuery = req.body.query;

    // Step 1: Classify Intent
    const intent = nluService.classifyIntent(userQuery);

    // Step 2: Extract Entities
    const entities = nluService.extractEntities(userQuery);

    // Step 3: Respond Based on Intent
    let response;
    switch (intent) {
        case 'troubleshooting':
            response = `It seems like you're facing an issue. Can you provide more details?`;
            break;
        case 'diagram':
            response = `I can help you create a network diagram. Please describe your network setup.`;
            break;
        case 'configuration':
            response = `Let me guide you with the configuration. What exactly do you want to configure?`;
            break;
        case 'concepts':
            response = `Sure! I can explain networking concepts. What would you like to learn about?`;
            break;
        default:
            response = `I'm not sure how to help with that. Could you provide more details?`;
    }

    res.json({
        intent,
        entities,
        response
    });
};
