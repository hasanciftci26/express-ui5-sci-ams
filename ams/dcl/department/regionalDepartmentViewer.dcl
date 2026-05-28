@description: 'Policy for readonly access on Departments resource for Germany'
POLICY regionalDepartmentViewerDE {
    GRANT read ON Departments WHERE country = 'DE';
}

@description: 'Policy for readonly access on Departments resource for Turkey'
POLICY regionalDepartmentViewerTR {
    GRANT read ON Departments WHERE country = 'TR';
}