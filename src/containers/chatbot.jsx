import { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

const API_KEY = "";

const Chat = () => {
  const [showChat, setShowChat] = useState(true);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);
  };

  useEffect(() => {
    const processMessage = async () => {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.sender === 'user') {
        try {
          const response = await processMessageToChatGPT(messages);
          console.log("Response from ChatGPT:", response); // Verifica la respuesta de la API
          const content = response.choices[0]?.message?.content;
          if (content) {
            const chatGPTResponse = {
              message: content,
              sender: "ChatGPT",
            };
            console.log("ChatGPT Response:", chatGPTResponse); // Verifica el mensaje de ChatGPT
            setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
          }
        } catch (error) {
          console.error("Error processing message:", error);
        } finally {
          setIsTyping(false);
        }
      }
    };
  
    processMessage();
  }, [messages]);
  

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        { role: "system", content: "I'm a Student using ChatGPT for learning" },
        ...apiMessages,
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch response from API');
    }

    return response.json();
  }

  return (
    <div className="Chat">
      <button style={{ position: 'fixed', bottom: '10px', right: '10px' }} onClick={() => setShowChat(!showChat)}>
        {showChat ? 'Ocultar chat' : 'Mostrar chat'}
      </button>
      {showChat && (
        <div style={{ position:"fixed", right: "20px", bottom: "10px", height: "400px", width: "300px", zIndex: 1000 }}>
          <MainContainer>
            <ChatContainer>       
              <MessageList 
                scrollBehavior="smooth" 
                typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
              >
                {messages.map((message, i) => (
                  <Message key={i} model={message} />
                ))}
              </MessageList>
              <MessageInput placeholder="Send a Message" onSend={handleSendRequest} />        
            </ChatContainer>
          </MainContainer>
        </div>
      )}
    </div>
  );
  
  
};

export default Chat;
