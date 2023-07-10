let hamburger = document.getElementsByClassName('hamburger')[0];
let sidebar = document.getElementsByClassName('sidebar')[0];
let cut = document.getElementsByClassName('cut')[0];
function openSidebar() {
   sidebar.style.display = "flex";
}

function closeSidebar(){
    sidebar.style.display = "none";
}
hamburger.addEventListener('click',openSidebar);
cut.addEventListener('click',closeSidebar);

let minorProject = document.getElementById('minor');
let majorProject = document.getElementById('major');
let allProject = document.getElementById('all');
let minor_projects_div = document.getElementById('minor-projects')
let major_projects_div = document.getElementById('major-projects');
let all_projects_div = document.getElementById('all-projects');
minorProject.addEventListener('click' , () => {
    minorProject.style.backgroundColor="green"
    majorProject.style.backgroundColor="transparent"
    allProject.style.backgroundColor="transparent"
    minor_projects_div.style.display = 'flex';
    all_projects_div.style.display = 'none';
    major_projects_div.style.display = 'none';

})

majorProject.addEventListener('click',() => {
    majorProject.style.backgroundColor="green"
    minorProject.style.backgroundColor="transparent"
    allProject.style.backgroundColor="transparent"
    major_projects_div.style.display = 'flex';
    minor_projects_div.style.display = 'none';
    all_projects_div.style.display = 'none';
})

allProject.addEventListener('click', () => {
    allProject.style.backgroundColor="green"
    minorProject.style.backgroundColor="transparent"
    majorProject.style.backgroundColor="transparent"
    all_projects_div.style.display = 'flex';
    major_projects_div.style.display = 'none';
    minor_projects_div.style.display = 'none';
})



// form submission implementation

let form = document.getElementById('form');
let submitButton = document.getElementById('submitbtn')
function submitForm(event) {
    event.preventDefault();
    form.reset();
    sendEmail();

}

function sendEmail() {
  let params  = {
    from_name : document.getElementById('name').value,
    email_id : document.getElementById('email').value,
    message : document.getElementById('message').value
  }
  emailjs.send("service_h1kpfxq","template_v597zso",params).then((res) => {
              alert("Congrats! Message sent successfully")
             
  })
}

submitButton.addEventListener('click',submitForm)