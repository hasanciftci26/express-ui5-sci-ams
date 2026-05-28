@description: 'Policy for administrative operations on Departments resource for Germany'
POLICY regionalDepartmentAdminDE {
    GRANT * ON Departments WHERE country = 'DE';
}

@description: 'Policy for administrative operations on Departments resource for Turkey'
POLICY regionalDepartmentAdminTR {
    GRANT * ON Departments WHERE country = 'TR';
}