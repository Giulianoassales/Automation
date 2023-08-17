const { I, loginAdminPanel, homeAdminPanelPage } = inject();
const { CONFIG } = require("C:/Users/giuli/OneDrive/Desktop/Codeando/sarasa/config.js");

Feature('login');

Scenario('completing cashout',  () => {
    I.amOnPage('https://console.stg.directa24.net/login');
    loginAdminPanel.loginAdminPanel(CONFIG.admin_user, CONFIG.admin_password);
    homeAdminPanelPage.seeAllCashouts()
    homeAdminPanelPage.cashoutByFilter()

});
