const { I } = inject();

module.exports = {

  fields:{
    cashout_id_filter : '#idCashout-input'
  },
  
  menu_cashout: '//*[@id="root"]/main/header/nav/div[2]/div/ul/li[4]/a/span[2]',
  menu_cashout_all: '//*[@id="root"]/main/header/nav/div[2]/div/ul/li[4]/ul/li[1]/a/span[2]',
  open_filter: '//*[@id="root"]/main/div/div/div[1]/div/aside/div[2]/div/span',
  search_buttom : '//*[@id="-botton"]',

  seeAllCashouts(){
    I.click(this.menu_cashout),
    I.click(this.menu_cashout_all)
  },

  cashoutByFilter(){
    I.fillField(this.fields.cashout_id_filter, '239161'),
    I.click(this.search_buttom),
    I.wait(15)
  }

  // insert your locators and methods here
}
