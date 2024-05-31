import { useState, useEffect } from 'react';
import { Button, Box, ChakraProvider } from '@chakra-ui/react';
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
  const [showChat, setShowChat] = useState(false); 
  const [messages, setMessages] = useState([
    {
      message: "Hola, soy tu asistente virtual y estoy aquí para ayudarte: ¿Qué necesitas?",
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
          const content = response.choices[0]?.message?.content;
          if (content) {
            const chatGPTResponse = {
              message: content,
              sender: "ChatGPT",
            };
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
    <ChakraProvider>
      <Box position="fixed" right="20px" bottom="10px" zIndex="2000">
        {showChat ? (
          <Box bg="#333" w="300px" h="400px">
            <Button position="absolute" bottom="100%" right="0" colorScheme="blue" onClick={() => setShowChat(false)}>
              Ocultar chat
            </Button>
            <MainContainer>
              <ChatContainer>       
                <MessageList 
                  scrollBehavior="smooth" 
                  typingIndicator={isTyping ? <TypingIndicator content="ChatGPT está escribiendo..." /> : null}
                >
                  {messages.map((message, i) => (
                    <Message key={i} model={message} />
                  ))}
                </MessageList>
                <MessageInput placeholder="Enviar un mensaje" onSend={handleSendRequest} />        
              </ChatContainer>
            </MainContainer>
          </Box>
        ) : (
          <Button colorScheme="blue" onClick={() => setShowChat(true)}>
            Mostrar chat
          </Button>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default Chat;

