const { I } = inject();

module.exports = {

  fields: {
    email: '#username-input',
    password: '#password-input',

  },
  
  submitButton: '#-botton',
  
  loginAdminPanel(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  },
  // insert your locators and methods here
}