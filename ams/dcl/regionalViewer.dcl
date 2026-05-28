@description: 'Policy for readonly access on all resources for Germany'
POLICY regionalViewerDE {
    USE employee.employeeViewer RESTRICT country = 'DE';
    USE department.departmentViewer RESTRICT country = 'DE';
}

@description: 'Policy for readonly access on all resources for Turkey'
POLICY regionalViewerTR {
    USE employee.employeeViewer RESTRICT country = 'TR';
    USE department.departmentViewer RESTRICT country = 'TR';
}