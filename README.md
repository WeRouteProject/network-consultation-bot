# Network Consultation Bot

A conversational bot designed to assist users with network-related queries, including troubleshooting, network diagram creation, configuration guidance, and concept explanations. The bot uses Natural Language Understanding (NLU) to dynamically identify user intents and extract relevant entities. It integrates with OpenAI to generate detailed responses after gathering sufficient context.

---

## **Features**
- **Intent Classification**: Dynamically understands user queries (e.g., troubleshooting, configuration, etc.).
- **Entity Extraction**: Identifies key entities like IP addresses, protocols, and keywords to improve response accuracy.
- **Clarification Dialog**: Asks follow-up questions if the user's requirement is unclear.
- **OpenAI Integration**: Leverages OpenAI's GPT model to generate comprehensive and context-aware responses.
- **Session Tracking**: Tracks conversation history for personalized interactions.
- **Modular Codebase**: Clean separation of concerns between controllers, services, and routes.

---

## **Folder Structure**
```plaintext
.
├── controllers/
│   ├── networkController.js   # Handles general user input processing
│   ├── nluController.js       # Handles intent classification and response generation
├── services/
│   ├── nluService.js          # Handles intent classification and entity extraction
│   ├── openAIService.js       # Integrates with OpenAI for generating responses
├── routes/
│   ├── index.js               # Defines all the application routes
├── app.js                     # Main application entry point
├── server.js                  # Starts the server and connects routes
├── package.json               # Node.js project dependencies and scripts
├── README.md                  # Project documentation
