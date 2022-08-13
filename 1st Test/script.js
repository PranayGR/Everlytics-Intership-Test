
function clearErrors(){
    let errors = document.getElementsByClassName('errorMessage');
    for(let item of errors){
        item.innerHTML = '';
    }
}

function setError(id, error) {
    let element = document.getElementById(id);
    element.getElementsByClassName("errorMessage")[0].innerHTML = error;
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()\=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

function startWithSpecialChars(str) {
    if(str.charAt(0) == '+' || str.charAt(0) == '-' || str.charAt(0) == '+'){
        return true;
    } else{
        return false;
    }
}

console.log(document.forms['f1']['pipelineName'].style);

function validateForm(){
    var returnValue = true;
    clearErrors();
    var pipelineName = document.forms['f1']['pipelineName'].value;
    if(pipelineName.length < 5 || containsSpecialChars(pipelineName)){
        document.forms['f1']['pipelineName'].style.border = '1px solid red';
        setError("pipelineName", "Min. 5 Characters required and No Special characters allowed except -, _ and +");
        returnValue = false;
    }
    if(startWithSpecialChars(pipelineName)){
        setError("pipelineName", "Cannot Start with -, _ and +");
        returnValue = false;
    }

    var projectName = document.forms['f1']['projectName'].value;
    if(projectName.length < 5 || containsSpecialChars(projectName)){
        document.forms['f1']['projectName'].style.border = '1px solid red';
        setError("projectName", "Min. 5 Characters required and No Special characters allowed except -, _ and +");
        returnValue = false;
    }
    if(startWithSpecialChars(projectName)){
        setError("pipelineName", "Cannot Start with -, _ and +");
        returnValue = false;
    }
    return returnValue;
}