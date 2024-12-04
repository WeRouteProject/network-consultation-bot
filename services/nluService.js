const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

const intents = {
    troubleshooting: ['error', 'issue', 'problem', 'fix', 'troubleshoot'],
    diagram: ['diagram', 'network', 'topology', 'layout'],
    configuration: ['configure', 'setup', 'settings', 'configuration'],
    concepts: ['explain', 'what is', 'definition', 'how does', 'help']
};

function classifyIntent(input) {
    const tokens = tokenizer.tokenize(input.toLowerCase());
    for (const [intent, keywords] of Object.entries(intents)) {
        if (keywords.some(keyword => tokens.includes(keyword))) {
            return intent;
        }
    }
    return 'unknown';
}

function extractEntities(input) {
    const ipRegex = /\b\d{1,3}(\.\d{1,3}){3}\b/;
    const protocolRegex = /\b(HTTP|HTTPS|FTP|TCP|UDP|DNS|SSH)\b/i;
    const entities = {};

    const ipMatch = input.match(ipRegex);
    if (ipMatch) entities.ipAddress = ipMatch[0];

    const protocolMatch = input.match(protocolRegex);
    if (protocolMatch) entities.protocol = protocolMatch[0];

    return entities;
}

module.exports = {
    classifyIntent,
    extractEntities
};
