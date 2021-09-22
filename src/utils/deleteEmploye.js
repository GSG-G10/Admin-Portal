const deleteEmploye = (employees,email) => employees.filter(employee => employee.email !== email);
export default deleteEmploye;
