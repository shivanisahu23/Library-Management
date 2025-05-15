// Copyright (c) 2025, Shivani Sahu and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Library Member", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Library Member', {
    refresh: function(frm) {
    frm.add_custom_button('Create Membership', () => {
    frappe.new_doc('Library Membership', {
    library_member: frm.doc.name
    })
    })
    frm.add_custom_button('Create Transaction', () => {
    frappe.new_doc('Library Transaction', {
    library_member: frm.doc.name
    })
    })
    }
});
   


// for( let i =0; i < people.length; i++){
//     console.log("Person" + (i + 1) + ":", people[i]);
// }

// function printpeople(people){
//     for(let i = 0; i < people.length; i++){
//         console.log("Person" + (i+1) + ":", people[i]);
//     }
// }

// let people = [
//     {name: "Shivani", age: 20},
//     {name: "Komal", age:22}
// ]

// printpeople(people);

// const add = (a,b) => {
//     return a+ b;
// }

// function sayHello() {
//     alert("Hello");
// }

//event based function in js and frappe

