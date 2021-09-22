const addBalance = (employees, email) => employees.map(employee => {
    if (employee.email === email) {
        //fake example
        let bala = employee.balance
       const numBalance = parseFloat(bala.slice(1).replace(",", "."))
        const newBalance = numBalance + 100
        employee.balance = `$${newBalance}`
    }
    return employee;
});
  

export default addBalance;