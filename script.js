function regexChecker(){
          let firstName = document.getElementById("firstName").value;
          let lastName = document.getElementById("lastName").value;
         //let isFirstLetterUppercase = /^[A-Z]/;
          let moreThanOneCharacterFName = /^[A-Z||a-z]{2}/.test(firstName);
          let moreThanOneCharacterLName = /^[A-Z||a-z]{2}/.test(lastName);

         let checkSpecialCharsFName = /[!"#$%&'()*+,-.\/:;<=>?@[\\\]^_`{|}~]/.test(firstName);
         let checkSpecialCharsLName = /[!"#$%&'()*+,-.\/:;<=>?@[\\\]^_`{|}~]/.test(lastName);
         //if(isFirstLetterUppercase.test(firstName) && !checkSpecialChars){
        
         let firstLetterUpperCaseFName = /^[A-Z]/.test(firstName);
         let firstLetterUpperCaseLName = /^[A-Z]/.test(lastName);


        if(moreThanOneCharacterFName === true && moreThanOneCharacterLName == true && firstLetterUpperCaseFName == true && firstLetterUpperCaseLName == true){
        if((checkSpecialCharsFName === false) || (checkSpecialCharsLName === false))
        {
     
            alert("Yuy! Your inputs were all corect!");
         }
         else
        {
             alert("Oh no! Thats an invalid format");
        }
        }
         else
        {
             alert("Oh no! Thats an invalid format");
        }
        
     }