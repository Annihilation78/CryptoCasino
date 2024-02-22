import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [model, setModel] = useState(null);
  const [input, setInput] = useState('');

  // Carga el modelo cuando se carga el componente
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await qna.load();
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  const sendMessage = async (message) => {
    setMessages([...messages, { sender: 'user', text: message }]);
    if (model) {
      const answers = await model.findAnswers(message, '');
      const botResponse = answers.length > 0 ? answers[0].text : 'Lo siento,pero yo solamente te aconsejo que metas más dinero porque estás perdiendo poco';
      setMessages([...messages, { sender: 'user', text: message }, { sender: 'bot', text: botResponse }]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
    setInput('');
  };

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}><strong>{message.sender}:</strong> {message.text}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}