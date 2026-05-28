@description: 'Policy for readonly access on Employees resource for Germany'
POLICY regionalEmployeeViewerDE {
    GRANT read ON Employees WHERE country = 'DE';
}

@description: 'Policy for readonly access on Employees resource for Turkey'
POLICY regionalEmployeeViewerTR {
    GRANT read ON Employees WHERE country = 'TR';
}