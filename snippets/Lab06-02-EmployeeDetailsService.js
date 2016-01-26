ibmApp.factory("EmployeeDetailsService", function ($http) {
    console.log(">> in EmployeeDetailsService ...");
    return {
        getEmployeeDetails: function (empId) {
            //using path param.
            var resourceRequest = new WLResourceRequest(
                "http://127.0.0.1:3000/api/employees/" + empId, WLResourceRequest.GET
            );
            return resourceRequest.send().then(function (response) {
                return response.responseJSON;
            }, function (response) {
                console.log("error:" + response);
                return null;
            });
        }
    };
})