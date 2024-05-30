import React from 'react';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';
import MapComponent from './Map.jsx';
import { FaTwitter, FaFacebook,FaInstagram } from 'react-icons/fa';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';
import '../css/Support.css';

function Support() {

    return (
        <div className="support-container">
            <Header title="Soporte" />
            <main className="support-main">
                <section className="support-intro">
                    <p className="support-text">Bienvenido a nuestra página de soporte. Aquí puedes encontrar ayuda y recursos relacionados con nuestros productos y servicios.</p>
                </section>

                <section className="support-faq">
                    <h1 className="support-title">Preguntas Frecuentes (FAQ)</h1>
                    <Accordion allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton _expanded={{ bg: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', color: '#ff69b4' }} padding="20px">
                                    <Box flex="1" textAlign="left" fontSize="2xl" fontWeight="bold">
                                        Cuenta y Registro
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontSize="lg">
                                <ul>
                                    <li className="support-list-item">¿Cómo creo una cuenta?</li>
                                    <li className="support-list-item">¿Cómo restablezco mi contraseña?</li>
                                    <li className="support-list-item">¿Qué hago si olvido mi nombre de usuario?</li>
                                </ul>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton _expanded={{ bg: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', color: '#ff69b4' }} padding="20px">
                                    <Box flex="1" textAlign="left" fontSize="2xl" fontWeight="bold">
                                        Depósitos y Retiros
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontSize="lg">
                                <ul>
                                    <li className="support-list-item">¿Cuáles son los métodos de pago disponibles?</li>
                                    <li className="support-list-item">¿Cómo realizo un depósito?</li>
                                    <li className="support-list-item">¿Cómo solicito un retiro?</li>
                                </ul>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton _expanded={{ bg: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', color: '#ff69b4' }} padding="20px">
                                    <Box flex="1" textAlign="left" fontSize="2xl" fontWeight="bold">
                                        Bonos y Promociones
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} fontSize="lg">
                                <ul>
                                    <li className="support-list-item">¿Cómo reclamo un bono?</li>
                                    <li className="support-list-item">¿Cuáles son los términos y condiciones de los bonos?</li>
                                </ul>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </section>

                <section className="support-contact">
                    <h1 className="support-title">Contacto Directo</h1>
                    <article className="support-contact-method">
                        <h2 className="support-subtitle">Chat en Vivo</h2>
                        <p className="support-contact-detail">Habla en tiempo real con uno de nuestros agentes. Disponible 24/7.</p>
                    </article>
                    <article className="support-contact-method">
                        <h2 className="support-subtitle">Correo Electrónico</h2>
                        <p className="support-contact-detail">Envíanos un correo a info@quantumbetbot.com y responderemos en menos de 24 horas.</p>
                    </article>
                    <article className="support-contact-method">
                        <h2 className="support-subtitle">Teléfono</h2>
                        <p className="support-contact-detail">Llámanos al +34 911 21 00 90. Atención disponible de 8 AM a 10 PM (horario local).</p>
                    </article>
                </section>
                
                <section className="support-map">
                    <MapComponent />
                </section>

                <section className="support-social">
                    <div className="social-icons">
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Support;

