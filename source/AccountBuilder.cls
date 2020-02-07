public with sharing class Account {

    public String name;
    public String phone;

    public Account(String name, String phone) {
        name = this.name;
        phone = this.phone;
    }

    public Account(String name) {
        name = this.name;
        phone = this.phone;
    }

    // unit test
    static testMethod void TestAccountName(){
        String name = 'Raul Sharma';
        Account objAccount = new Account('Raul Sharma');
        System.assertEquals(name, objAccount.name);
        System.assertEquals(null, objAccount.phone);
    }

    // unit test
    static testMethod void TestAccountAllInputs(){
        String name = 'Raul Sharma';
        String phone = '987654321';
        Account objAccount = new Account(name, phone);
        System.assertEquals(name, objAccount.name);
        System.assertEquals(phone, objAccount.phone);
    }
}