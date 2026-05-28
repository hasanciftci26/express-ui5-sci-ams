@description: 'Policy for full admin access on all resources'
POLICY admin {
    USE employee.employeeAdmin;
    USE department.departmentAdmin;
}