@description: 'Policy for readonly access on Employees resource for all countries'
POLICY employeeViewer {
    GRANT read ON Employees;
}