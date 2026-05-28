@description: 'Policy for readonly access on all resources'
POLICY viewer {
    USE employee.employeeViewer;
    USE department.departmentViewer;
}