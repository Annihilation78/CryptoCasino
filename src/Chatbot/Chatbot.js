import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [model, setModel] = useState(null);

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
      const botResponse = answers.length > 0 ? answers[0].text : 'Lo siento, no tengo una respuesta para eso.';
      setMessages([...messages, { sender: 'user', text: message }, { sender: 'bot', text: botResponse }]);
    }
  };
}