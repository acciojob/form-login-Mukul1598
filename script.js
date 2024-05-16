function getFormvalue() {
    //Write your code here
	let first_name = document.getElementById("fname").value
	let last_name = document.getElementById("lname").value
	let fullName = first_name + " " + last_name;
	alert(fullName);
}
