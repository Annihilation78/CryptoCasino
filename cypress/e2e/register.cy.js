describe('Registro de usuario en la página de registro', () => {
  it('Debería permitir a un usuario registrarse correctamente', () => {
    cy.visit('https://annihilation78.github.io/CryptoCasino/#/Register')

    cy.get('input[name="usuario"]').type('usuario_prueba')
    cy.get('input[name="email"]').type('usuario_prueba@example.com')
    cy.get('input[name="password"]').type('contraseña123')
    
    cy.get('button[type="submit"]').click()

    cy.on('window:alert',function(alerttext){
      expect(alerttext).eq('Usuario registrado con éxito!');
    })
  })
  it('Debería mostrar un mensaje de error si el formulario se envía con campos vacíos', () => {
    cy.visit('https://annihilation78.github.io/CryptoCasino/#/Register')

    cy.get('button[type="submit"]').click()

    cy.on('window:alert',function(alerttext){
      expect(alerttext).eq('Error al registrar usuario!');
    })
  })
})