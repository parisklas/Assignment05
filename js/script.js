let fID, fName, fExt, fEmail, fDepartment;
init = () => {
  fID = document.getElementById('id').value;
  fName = document.getElementById('name').value;
  fExt = document.getElementById('ext').value;
  fEmail = document.getElementById('email').value;
  fDepartment = document.getElementById('department').value;
}
window.addEventListener('load', init);
logSubmit = (e) => {
  e.preventDefault();
  console.log(`ID: ${fID}`);
  console.log(`Name: ${fName}`);
  console.log(`Extension: ${fExt}`);
  console.log(`Email: ${fEmail}`);
  console.log(`Department: ${fDepartment}`);
}
const empForm = document.getElementById("empform");
document.addEventListener("submit", logSubmit);