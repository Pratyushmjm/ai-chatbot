 Chat Application with Ollama and Gemma 3
A Next.js application that integrates with Ollama to run the Gemma 3 model locally, providing a seamless AI chat interface using Next.js API routes.
Features

🤖 Local AI chat using Ollama and Gemma 3 model
⚡ Next.js with API routes
🔄 Real-time AI responses
📱 Responsive chat interface
🚀 Next.js API routes for model communication
🔒 Runs completely locally - no external API calls

Prerequisites
Before running this project, make sure you have:

Node.js 18+ installed
Ollama installed on your system

Installation & Setup
1. Install Ollama
macOS:
bashbrew install ollama
Linux:
bashcurl -fsSL https://ollama.ai/install.sh | sh
Windows:
Download from https://ollama.ai/download
2. Download and Run Gemma 3 Model
bash# Download and run Gemma 3 model
ollama run gemma3
This command will:

Download the Gemma 3 model (if not already downloaded)
Start the model locally
You can exit the interactive mode with ctrl + D

3. Verify Installation
bash# List all downloaded models
ollama list
You should see gemma3 in the list of available models.
4. Clone and Setup the Project
bashgit clone <your-repo-url>
cd <your-project-name>
npm install
5. Run the Application
bash# Start the Next.js development server
npm run dev
Open http://localhost:3000 in your browser.
Usage

Start Ollama with Gemma 3:
bashollama run gemma3

In a new terminal, start the Next.js app:
bashnpm run dev

Open your browser and navigate to http://localhost:3000
Start chatting with the Gemma 3 model!

API Routes
POST /api/chat
The main API route that handles communication with the Gemma 3 model.
Request:
json{
  "message": "Your question here"
}
Response:
Returns the AI model's response as text.

Acknowledgments

Ollama for local AI model infrastructure
Google for the Gemma model
Next.js for the React framework

Quick Start Summary:

Install Ollama
Run ollama run gemma3
Run npm run dev
Open http://localhost:3000
Start chatting!

 Ngrok Setup for Local Ollama Integration
To connect the locally running Ollama model with the deployed Next.js frontend, Ngrok was used as a tunneling service.

Steps followed:

Install Ngrok (via Chocolatey on Windows):

bash
Copy
Edit
choco install ngrok
Start Ngrok on the Ollama backend port (e.g., 11434):

bash
Copy
Edit
ngrok http 11434
Use the generated public URL from Ngrok and forward it to the API route in Next.js.

Update environment variables in the deployed Next.js app (e.g., on Vercel) to point to the Ngrok URL:

ini
Copy
Edit
OLLAMA_API_URL=https://your-ngrok-url.ngrok.io
This allowed the deployed frontend (Vercel) to communicate with the locally running Ollama model for LLM inference.

![image](https://github.com/user-attachments/assets/9d6293f7-4d5a-4b0f-9377-eb06d3612852)

