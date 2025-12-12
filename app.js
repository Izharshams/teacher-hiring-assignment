function submit(){
    let name = document.getElementById('name').value;
    let education = document.getElementById('education').value;
    console.log(education)
    let address= document.getElementById('address').value;
    let age = document.getElementById('age').value;

    if(name == '' || education == '' || address == '' || age == '' ){
        alert('please kindly fill  the form')
    }
    else if(education == "master" && age >= 25 && age <= 40){
        document.getElementById('rname').innerText = `NAME: ` + name;
        document.getElementById('raddress').innerText = `ADDRESS: ` +  address;
        document.getElementById('rage').innerText =`AGE: ` +  age;
        document.getElementById('reducation').innerText =`EDUCATION:` +  education;
        document.getElementById('heading').innerHTML = `Congratulations! You are eligible for this position. Candidates with a Master’s degree are highly valued in our institute. We are pleased to offer you a monthly salary of <h1>$2500</h1>. Welcome to the team! Your advanced knowledge and experience will be a great asset to our organization.`;
    }
       else if(education == "bachelor" && age >= 25 && age <= 40){
        document.getElementById('rname').innerText = `NAME: ` + name;
        document.getElementById('raddress').innerText = `ADDRESS: ` +  address;
        document.getElementById('rage').innerText =`AGE: ` +  age;
        document.getElementById('reducation').innerText =`EDUCATION:` +  education;
        document.getElementById('heading').innerHTML = `Great news! You are selected for this job. Applicants with a Bachelor’s degree meet our company’s hiring requirements. We are happy to offer you a monthly salary of <h1> $1800 </h1>. Welcome aboard! We look forward to seeing your skills and growth with us.`;
    }
     else if(education == "intermediate" ){
       document.getElementById('rname').innerText = `NAME: ` + name;
        document.getElementById('raddress').innerText = `ADDRESS: ` +  address;
        document.getElementById('rage').innerText =`AGE: ` +  age;
        document.getElementById('reducation').innerText =`EDUCATION:` +  education;
        document.getElementById('heading').innerHTML = `We appreciate your interest in joining our team. However, applicants with an Intermediate qualification are not eligible for this position. We encourage you to continue your education and apply again in the future. Thank you for understanding.`;
    }
    else if(education == "matric" ){
        document.getElementById('rname').innerText = `NAME: ` + name;
        document.getElementById('raddress').innerText = `ADDRESS: ` +  address;
        document.getElementById('rage').innerText =`AGE: ` +  age;
        document.getElementById('reducation').innerText =`EDUCATION:` +  education;
        document.getElementById('heading').innerHTML = `Thank you for applying. Unfortunately, candidates with Matric-level education are not eligible for this job role. We recommend gaining higher qualifications to meet our hiring criteria. We wish you the best of luck in your future achievements.`;
    }
    else{
          document.getElementById('rage').innerHTML = ` Sorry, you are not eligible because your age is too low for this job.`
    }
    
}
