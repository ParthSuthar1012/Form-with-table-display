function storeData() {
 var data = {
  firstName: document.getElementById("firstName").value,
  lastName: document.getElementById("lastName").value,
  age: document.getElementById("age").value
 }
 var dataList = localStorage.getItem("dataList") ? JSON.parse(localStorage.getItem("dataList")) : [];
 dataList.push(data);
 localStorage.setItem("dataList", JSON.stringify(dataList));
}

function displayData() {
 var dataList = JSON.parse(localStorage.getItem("dataList"));
 var dataTable = document.getElementById("dataTable");
 for (var i = 0; i < dataList.length; i++) {
  var row = dataTable.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = dataList[i].firstName;
  cell2.innerHTML = dataList[i].lastName;
  cell3.innerHTML = dataList[i].age;
  cell4.innerHTML = '<button onclick="editData(' + i + ')">Edit</button>';
  cell5.innerHTML = '<button onclick="deleteData(' + i + ')">Delete</button>';
 }
}

function editData(index) {
 var dataList = JSON.parse(localStorage.getItem("dataList"));
 var data = dataList[index];
 document.getElementById("firstName").value = data.firstName;
 document.getElementById("lastName").value = data.lastName;
 document.getElementById("age").value = data.age;
 localStorage.setItem("editIndex", index);
}

function updateData() {
 var dataList = JSON.parse(localStorage.getItem("dataList"));
 var index = localStorage.getItem("editIndex");
 dataList[index].firstName = document.getElementById("firstName").value;
 dataList[index].lastName = document.getElementById("lastName").value;
 dataList[index].age = document.getElementById("age").value;
 localStorage.setItem("dataList", JSON.stringify(dataList));
 location.reload();
}

function deleteData(index) {
 var dataList = JSON.parse(localStorage.getItem("dataList"));
 dataList.splice(index, 1);
 localStorage.setItem("dataList", JSON.stringify(dataList));
 location.reload();
}
function validateFirstName() {
 var x = document.getElementById("firstName").value;
 if (x == "") {
  document.getElementById("firstNameError").innerHTML = "First name is required.";
 } else {
  document.getElementById("firstNameError").innerHTML = "";
 }
}

function validateLastName() {
 var y = document.getElementById("lastName").value;
 if (y == "") {
  document.getElementById("lastNameError").innerHTML = "Last name is required.";
 } else {
  document.getElementById("lastNameError").innerHTML = "";
 }
}

function validateAge() {
 var z = document.getElementById("age").value;
 if (z == "") {
  document.getElementById("ageError").innerHTML = "Age is required.";
 } else {
  document.getElementById("ageError").innerHTML = "";
 }
}

function validateForm() {
 validateFirstName();
 validateLastName();
 validateAge();
}