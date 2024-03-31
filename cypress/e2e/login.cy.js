describe('Login del usuario con su cuenta creada', () => {
    it('Debería permitir a un usuario loguearse correctamente', () => {
      cy.visit('https://annihilation78.github.io/CryptoCasino/#/Login')
  
      cy.get('input[name="usuario"]').type('usuario')
      cy.get('input[name="password"]').type('password')
      
      cy.get('button[type="submit"]').click()
  
      cy.on('window:alert',function(alerttext){
        expect(alerttext).eq('Bienvenido!');
      })
    })
    it('Debería mostrar un mensaje de error si el formulario se envía con campos vacíos', () => {
      cy.visit('https://annihilation78.github.io/CryptoCasino/#/Login')
  
      cy.get('button[type="submit"]').click()
  
      cy.on('window:alert',function(alerttext){
        expect(alerttext).eq('Usuario y/o contraseña inválido');
      })
    })
  })