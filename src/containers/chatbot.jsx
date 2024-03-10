// ChatBot.js
import React, { useState } from 'react';
import { ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';

async function fetchGPT3Response(message) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer tu_clave_de_API`
      },
      body: JSON.stringify({
        prompt: message,
        max_tokens: 150,
        temperature: 0.7
      })
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data.choices[0].text.trim();
  }
  

export default function ChatBot() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const response = await fetchGPT3Response(message);
    setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }, { text: response, sender: 'bot' }]);
  };
  

  return (
    <ChatContainer>
      <MessageList>
        {messages.map((message, index) => (
          <Message key={index} model={{
            message: message.text,
            direction: message.sender === 'user' ? 'incoming' : 'outgoing',
            sender: message.sender,
          }} />
        ))}
      </MessageList>
      <MessageInput attachButton={false} onSend={handleSendMessage} />
    </ChatContainer>
  );
}

