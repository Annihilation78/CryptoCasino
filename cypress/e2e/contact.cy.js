describe('Envío de un formulario de contacto', () => {
    it('Debería permitir a un usuario enviar el formulario correctamente', () => {
      cy.visit('https://annihilation78.github.io/CryptoCasino/#/Contact')
  
      cy.get('input[name="nombre"]').type('usuario_prueba')
      cy.get('input[name="email"]').type('usuario_prueba@example.com')
      cy.get('textarea[name="mensaje"]').type('mensaje_prueba')
      
      cy.get('button[type="submit"]').click()
  
      cy.on('window:alert',function(alerttext){
        expect(alerttext).eq('¡Formulario enviado con éxito!');
      })
    })
    it('Debería mostrar un mensaje de error si el formulario se envía con campos vacíos', () => {
      cy.visit('https://annihilation78.github.io/CryptoCasino/#/Contact')
  
      cy.get('button[type="submit"]').click()
  
      cy.on('window:alert',function(alerttext){
        expect(alerttext).eq('Error al registrar usuario!');
      })
      cy.contains('Este campo es requerido')
    })
  })