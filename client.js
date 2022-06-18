$(onReady);

function onReady() {
    $('#submit-btn').on('click', addEmployee);
    $('.employeesOutput').on('click', '#delete-btn', deleteEmployee);
} //end onReady

// create employee arrary
let employeeArray = [];

function addEmployee() {
    // console function
    console.log('addEmployee');
    // get input variables
    let firstName=$('#firstName').val();
    let lastName=$('#lastName').val();
    let idNumber=$('#idNumber').val();
    let title=$('#jobTitle').val();
    let salary=$('#salary').val();
    // create employee object
    let employeeAdded={firstName, lastName, idNumber, title, salary};
    // console employee object
    console.log(employeeAdded);
    // append employee tableOutput
    $('.employessOutput').append(
        `<td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${title}</td>
        <td>${salary}</td>
        <td><button class="delete-btn">DELETE</button></td>`
    )
    // empty input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#salary').val('');
    // push employee object to employee array
    (employeeArray).push(employeeAdded);
    // console array
    console.log(employeeArray);

    // calculateMonthly();
}

function deleteEmployee() {
    console.log("in deleteEmployee", $(this).parent());
    $(this).parent().remove();
    // deleteEmployeeButton
    el.append(`
    <>
    ${thisEmployee.firstName} ${thisEmployee.lastName} ${thisEmployee.employeeId}
${thisEmployee.title} ${thisEmployee.salary} <button class="deleteEmployeeButton">Delete</button>
    </li>
    `);
  } // delete employees