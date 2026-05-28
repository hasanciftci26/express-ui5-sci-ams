@description: 'Policy for administrative operations on all resources for Germany'
POLICY regionalAdminDE {
    USE employee.employeeAdmin RESTRICT country = 'DE';
    USE department.departmentAdmin RESTRICT country = 'DE';
}

@description: 'Policy for administrative operations on all resources for Turkey'
POLICY regionalAdminTR {
    USE employee.employeeAdmin RESTRICT country = 'TR';
    USE department.departmentAdmin RESTRICT country = 'TR';
}