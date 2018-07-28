var square = x => x*x;
console.log(square(9));
var name = "Dimitry";
var user = {
    name: "Dimitry",
    sayHi: () =>{
        "use strict";
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    },
    sayHiAlt() {
        "use strict";
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    }
};
user.sayHiAlt();
user.sayHi();