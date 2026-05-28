@description: 'Policy for administrative operations on Employees resource for Germany'
POLICY regionalEmployeeAdminDE {
    GRANT * ON Employees WHERE country = 'DE';
}

@description: 'Policy for administrative operations on Employees resource for Turkey'
POLICY regionalEmployeeAdminTR {
    GRANT * ON Employees WHERE country = 'TR';
}