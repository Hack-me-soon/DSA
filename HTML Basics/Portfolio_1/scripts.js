document.getElementById('contactform').addEventListener('submit',function(event){event.preventDefault();

    const fname=document.getElementById('contactor_fname').value;
    console.log(fname)
    const lname=document.getElementById('contactor_lname').value;
    const message=document.getElementById('contactor_message').value;

    if(!fname||!lname||!message){
        alert("Please Fill all the fields in the Contact Form!!!");
        return;
    }
});
    let consolename=prompt("Enter your name:")
    console.log(consolename)
