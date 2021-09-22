const addBalance = (employees, email) => employees.map(employee => {
    if (employee.email === email) {
        //fake example
        const balance = employee.balance
        console.log('addBalance', parseFloat(balance.slice(1),10));
    //    console.log((employee.balance).slice(1));
        // employee.balance= Number((employee.balance).slice(1))+100;
    }
    return employee;
});
  

export default addBalance;