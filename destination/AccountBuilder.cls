public with sharing class Account {

    public String name;
    public String phone;

    public Account() {
        // constructor
    }

    public Account setName(String name) {
        name = this.name;
        return this;
    }

    public Account setPhone(String phone) {
        phone = this.phone;
        return this;
    }

    // unit test
    static testMethod void TestAccountName(){
        String name = 'Raul Sharma';
        Account objAccount =
            new Account()
                .setName(name);
        System.assertEquals(name, objAccount.name);
        System.assertEquals(null, objAccount.phone);
    }

    // unit test
    static testMethod void TestAccountAllInputs(){
        String name = 'Raul Sharma';
        String phone = '987654321';
        Account objAccount =
            new Account()
                .setName(name)
                .setPhone(phone);
        System.assertEquals(name, objAccount.name);
        System.assertEquals(phone, objAccount.phone);
    }
}