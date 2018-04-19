class customer {
   
    constructor(name, age, address, telephone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.telephone = telephone;
    }

    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    setAddress(address){
        this.address = address;
    }
    setTelephone(telephone){
        this.telephone = telephone;
    }

    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getAddress(){
        return this.address;
    }
    getTelephone(){
        return this.telephone;
    }

    displayContactDetails(){
        console.log("Name: ", this.name, ", Address: ", this.address, ", Telephone: ", this.telephone);
    }
}
var List = [];
class customerList {
    constructor(List){
        this.List = List
    }

    getList(){
        return this.List;
    }

    AddItem(item){
        this.List.push(item);
    }

    deleteItem(item){
        this.List.remove(item);
    }

    searchForItemByName(itemName){
        for(i=0;i<List.length();i++)
        {
            if(List[i].name === itemName)
            {
                return List[i];
            }
        }
    }
}

let newCustomer = new customer("Ben Mulligan", 23, "1 Malham close, Lincoln, LN6 0XE", "01522 689806");
let newCustomer1 = new customer("John Migan", 35, "1 Smith Street, Lincoln, LN6 0XE", "01522 345606");
let newCustomer2 = new customer("Shawn Smith", 56, "18 End close, Lincoln, LN6 0XE", "01522 634568");
let newCustomer3 = new customer("Sarah Jones", 18, "97 Begin close, Lincoln, LN6 0XE", "01522 623457");
let newCustomer4 = new customer("James Shoe", 67, "19 Smith Street, Lincoln, LN6 0XE", "01522 623465");

let newCustomerList = new customerList([newCustomer, newCustomer1, newCustomer2, newCustomer3, newCustomer4]);

console.log(newCustomerList.getList()[0].name);
console.log(newCustomerList.getList()[1].name);
console.log(newCustomerList.getList()[2].name);
console.log(newCustomerList.getList()[3].name);
console.log(newCustomerList.getList()[4].name);

