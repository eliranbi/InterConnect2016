ibmApp.factory("EmployeeService", function ($http) {
    console.log(">> in EmployeeService ...");
    var employees = [];
    var resourceRequest = new WLResourceRequest(
        "http://127.0.0.1:3000/api/employees", WLResourceRequest.GET
    );
    return {
        getEmployeeList: function () {
            return resourceRequest.send().then(function (response) {
                employees = response.responseJSON;
                return employees;
            }, function (response) {
                console.log("error:" + response);
                return null;
            });
        },
        getEmployee: function (index) {
            return employees[index];
        },
        getEmployeeById: function (id) {
            var _emp;
            angular.forEach(employees, function (emp) {
                console.log(">> getEmployeeById :" + id + " ==  " + emp._id);
                if (emp._id == id) {
                    _emp = emp;
                }
            });
            return _emp;
        }
    };
})