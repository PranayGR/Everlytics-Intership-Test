function clearErrors() {
    let errors = document.getElementsByClassName('errorMessage');
    for (let item of errors) {
        item.innerHTML = '';
    }
}

function setError(id, error) {
    let element = document.getElementById(id);
    element.getElementsByClassName("errorMsg")[0].innerHTML = error;
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()\=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

function startWithSpecialChars(str) {
    if (str.charAt(0) == '+' || str.charAt(0) == '-' || str.charAt(0) == '+') {
        return true;
    } else {
        return false;
    }
}

function validateForm() {
    var returnValue = true;
    clearErrors();

    // Validation for Pipeline Name Input
    var pipelineName = document.forms['myForm']['pipelineName'].value;
    if (pipelineName.length < 5) {
        document.forms['myForm']['pipelineName'].style.border = '1px solid red';
        setError("pipelineName", "Min. 5 Characters required");
        returnValue = false;
    }
    if (containsSpecialChars(pipelineName)) {
        document.forms['myForm']['pipelineName'].style.border = '1px solid red';
        setError("pipelineName", "No Special characters allowed except -, _ and +");
        returnValue = false;
    }
    if (startWithSpecialChars(pipelineName)) {
        setError("pipelineName", "Cannot Start with -, _ and +");
        returnValue = false;
    }
    if (returnValue) {
        document.forms['myForm']['pipelineName'].style.border = '1px solid green';
        setError("pipelineName", "");
    }

    // Validation for Project Name Input
    var projectName = document.forms['myForm']['projectName'].value;
    if (projectName.length < 5) {
        document.forms['myForm']['projectName'].style.border = '1px solid red';
        setError("projectName", "Min. 5 Characters required");
        returnValue = false;
    }
    if (containsSpecialChars(projectName)) {
        document.forms['myForm']['projectName'].style.border = '1px solid red';
        setError("projectName", "No Special characters allowed except -, _ and +");
        returnValue = false;
    }
    if (startWithSpecialChars(projectName)) {
        setError("projectName", "Cannot Start with -, _ and +");
        returnValue = false;
    }
    if (returnValue) {
        document.forms['myForm']['projectName'].style.border = '1px solid green';
        setError("projectName", "");
    }

    // Validation for Bucket Name Input
    var bucketName = document.forms['myForm']['bucketName'].value;
    if (bucketName.length < 1) {
        document.forms['myForm']['bucketName'].style.border = '1px solid red';
        setError("bucketName", "This is a required Field");
    }
    if (returnValue) {
        document.forms['myForm']['bucketName'].style.border = '1px solid green';
        setError("bucketName", "");
    }

    // Validation for Cloud File Input
    var cloudFile = document.forms['myForm']['cloudFile'].value;
    if (cloudFile.length < 1) {
        document.forms['myForm']['cloudFile'].style.border = '1px solid red';
        setError("cloudFile", "This is a required field");
    }
    if (returnValue) {
        document.forms['myForm']['cloudFile'].style.border = '1px solid green';
        setError("cloudFile", "");

    }

    // Validation for Credentials
    var credentials = document.forms['myForm']['credentials'].value;
    if (credentials.length < 1) {
        document.forms['myForm']['credentials'].style.border = '1px solid red';
        setError("credentials", "This is a required Field");
    }
    if (returnValue) {
        document.forms['myForm']['credentials'].style.border = '1px solid green';
        setError("credentials", "");

    }

    // Validation for Runtime
    var runtime = document.forms['myForm']['runtime'].value;
    if (runtime.length < 1) {
        document.forms['myForm']['runtime'].style.border = '1px solid red';
        setError("runtime", "This is a required Field");
    }
    if (returnValue) {
        document.forms['myForm']['runtime'].style.border = '1px solid green';
        setError("runtime", "");
    }

    return returnValue;
}