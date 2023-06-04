class Login {
    // click to login
    getBtnLogIn = () => cy.get("#wg_loginBtn");
    getFormLogIn = () => cy.get("#l_overlay > .form-container-white");

    // header name
    getHeaderNameLogIn = () => cy.get("[class='form-container-small-header'] > .h1");
    getSignUpLinkForm = () => cy.get(".form-container-white > .form-container-small-header > p > .l_btn_signup")
    getCloseLoginFormBtn = () => cy.get('#l_overlay .form-container-white .button-cleared')

    // register buttons
    getEmail = () => cy.get("#l_f_email > .field__control");
    getPassword = () => cy.get("#l_f_pass > .field__control");

    // enter email
    enterEmail(value) {
        this.getEmail().clear().type(value);
    }

    // enter password
    enterPassword(value) {
        this.getPassword().clear().type(value);
    }

    getForgotPasswordLink = () => cy.get('[class="l_btn_forgot"]')

    getLogMeAfter = () => cy.get("input[name=l_rem]").closest("label");

    getBtnContinue = () =>
        cy.get(".form-container-white > .form-container-small-content > form > .btn");

    // methods
    clickLogMeAfter() {
        this.getLogMeAfter().click();
    }

    clickBtnLogIn() {
        this.getBtnLogIn().click();
    }

    clickBtnContinue() {
        this.getBtnContinue().dblclick();
    }

    clickCloseLoginFormBtn() {
        this.getCloseLoginFormBtn().click()
        return this;
    }
}

export default Login;
