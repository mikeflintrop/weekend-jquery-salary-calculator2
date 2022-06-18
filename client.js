$(onReady);

function onReady() {
    $('#submit-btn').on('click', addEmployee);
} //end onReady

// create employee arrary
let employeeArray = [];

function addEmployee() {
    // console function
    console.log('addEmployee button clicked');

    // get input variables
    let firstName=$('#firstName').val();
    let lastName=$('#lastName').val();
    let idNumber=$('#idNumber').val();
    let title=$('#jobTitle').val();
    let salary=$('#salary').val();

    // create employee object
    let newEmployee={firstName, lastName, idNumber, title, salary};

    // console employee object
    console.log(newEmployee);

    // push employee object to employee array
    (employeeArray).push(newEmployee);

    // append employee tableOutput
    $('.salary-table').append(
        `<tr class="employeesOutput">
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${title}</td>
        <td>${salary}</td>
        <td id="${idNumber}"></td>
        </tr>`
    )
    // add button to last cell
    $(`#${idNumber}`).append(
        `<button class="delete-btn">DELETE</button>`
    ).on('click', deleteEmployee)

    // empty input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#salary').val('');

    // console array
    console.log(employeeArray);
    // call calculate function
    calculateMonthly();
} // end addEmployee

function deleteEmployeeRow() {
    // console function
    console.log('deleteEmployee button clicked');

    // declare const
    const buttonCell = $(this)
    console.log(buttonCell)
    // declare const
    const cellId = buttonCell.attr("id")
    console.log(cellId)
    // remove employee from employeeArray
    removeEmployee();
    // remove row from UI
    buttonCell.closest('tr').remove();
    // calc monthly total
    calculateMonthly();
} // end deleteEmployee

function calculateMonthly() {
    // declare variable
    let totalSalary = 0;
    for(let i = 0; i < employeeArray.length; i ++) {
        totalSalary += Number(employeeArray[i].salary) 
    }
    totalSalary = (totalSalary/12);
    // empty and append id
    $('#totalMonthlyOutput').empty();
    $('#totalMonthlyOutput').append(totalSalary);
    turnRed();
    // creat function to turn red
    function turnRed() {
        if(totalSalary >= 20000){
            $('#totalMonthlyOutput').addClass(`turnRed`);
        }
    }
} // end calculateMonthly

function removeEmployee() {
    // console function
    console.log('removeEmployee done');
    

} // end removeEmployee