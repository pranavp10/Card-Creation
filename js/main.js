var myDataBase = [
    {name:"SAM",email:"sam@gmail.com",age:23},
    {name:"LUCY",email:"lucy@gmail.com",age:29},
    {name:"PAUL",email:"paul@gmail.com",age:30}
];

(function myAvtar(db){
    var inti = function(){
        generateList();
        enterUser();
    }
    var generateList = function(){
        var parent = document.querySelector('#parent-avatars')
        var template = '';

        for(var i = 0; i<db.length; i++){
            
            
            template +=    '<div class="col-sm-4">';
            template +=        '<div class="card">';
            template +=            '<div class="card-delete" data-card="'+ i +'">X</div>';
            template +=            '<div class="card-block">';
            template +=                '<h3 class="card-title">'+ db[i].name +'</h3>';
            template +=                '<p class="card-text">';
            template +=                    '<strong>Email</strong>:<span>'+ db[i].email +'</span>';
            template +=                '</p>';
            template +=                '<p class="card-text">';
            template +=                    '<strong>Age</strong>:<span>'+ db[i].age +'</span>';
            template +=                '</p>';
            template +=            '</div>';
            template +=        '</div>';
            template +=    '</div>';
            
        }
        parent.innerHTML = '';
        parent.insertAdjacentHTML("afterbegin",template);
        deleteCard();
    }
        function grabUser(){
            var name = document.querySelector('#user_name').value.toUpperCase();
            var email = document.querySelector('#user_email').value;
            var age = document.querySelector('#user_age').value;
            var elements = [name,email,age];
            if(validateUser(elements)){
                document.querySelector('#myForm').reset();
                db.push({name:name, email:email, age:age});
                console.log(db);
                generateList();
            }else{
                document.querySelector('#error').style.display = 'block';
                setTimeout(function(){
                    ocument.querySelector('#error').style.display = 'none';
                },2000)
            }
            
        }
    var enterUser = function(){
        document.querySelector('#myForm').addEventListener("submit", function(event){
            event.preventDefault();
            grabUser();
        })
    }
    var validateUser = function (elements){
        for (var i = 0; i < elements.length; i++){
            if(elements[i] == ""){
                return false;
            }
        }
        return true;
    }

    function deleteThis(element){
        var obj = parseInt(element.getAttribute('data-card'))
        db.splice(obj,1);
        generateList();
    }
    var deleteCard = function(){
        var button = document.querySelectorAll('.card-delete');
        for (var i = 0 ; i<button.length; i++){
            button[i].addEventListener('click',function(event){
                deleteThis(this);
            })
        }
    }
    inti();
}(myDataBase));