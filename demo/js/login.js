/*Created by mohit on 22/10/16.*/
class FaderSignin {
    fadderAdd(){
        var loginButton = document.getElementById("signin");
        var signupButton = document.getElementById("signup");
        var obj = this;
        var fullScreenContainer = document.createElement('div');
        fullScreenContainer.className = "FullScreenContainer";
        //add the fedder
        loginButton.addEventListener('click', function () {
            document.body.appendChild(fullScreenContainer);

        });
            var loginform = document.createElement('div');
            loginform.className = "LoginContent";
            loginform.id = "loginform";
            fullScreenContainer.appendChild(loginform);
            loginform.innerHTML = '<div class="SigninHader"><div style="top: 2px;left: 117px;text-align: center;position: absolute;display: block;">Sign In</div></div>'+
                                  '<input type="text" name="" id="" placeholder="email" class="Email">' +
                                  '<label for=""></label>' +
                                  '<input type="password" name="" id="" placeholder="password" class="Password">' +
                                  '<button type="submit" class="Button">login</button>';
            obj.fadderRemove(fullScreenContainer);
    };
    fadderRemove(fullScreenContainer){
        //remove login fadder
            fullScreenContainer.addEventListener('click', function () {
                if (event.target === fullScreenContainer)
                    fullScreenContainer.parentNode.removeChild(fullScreenContainer);
            });

        //escape button
        window.document.onkeydown = function (ev) {
            if (ev.keyCode === 27 && fullScreenContainer != null) {
                fullScreenContainer.parentNode.removeChild(fullScreenContainer);
            }
        };
    };
}
class FaderSignup{
    fadderAdd(){
        var signupButton = document.getElementById("signup");
        var obj = this;
        var fullScreenContainer = document.createElement('div');
        fullScreenContainer.className = "FullScreenContainer";
        //add the fedder
        signupButton.addEventListener('click', function () {
            document.body.appendChild(fullScreenContainer);

        });
        var signupform = document.createElement('div');
        signupform.className = "SignupContent";
        signupform.id = "signupform";
        fullScreenContainer.appendChild(signupform);
        signupform.innerHTML =  '<div class="SignupHader"><div style="top: 2px;left: 200px;text-align: center;position: absolute;display: block;">Sign up</div></div>'+
                                '<input type="text" name="" id="" placeholder="Full name" class="Name">' +
                                '<input type="text" name="" id="" placeholder="Age" class="Age">' +
                                '<input type="radio" name="sex" id="" class="Male" value="Male"><male class="MaleText">Male</male>' +
                                '<input type="radio" name="sex" id="" class="Female" value="Female"><female class="FemaleText">Female</female>' +
                                '<select class="College">'+
                                    '<option>SKIT, Jaipur</option>'+
                                    '<option>JEC, Jaipur</option>'+
                                    '<option>JECRC, Jaipur</option>'+
                                    '<option>Poornima, Jaipur</option>'+
                                    '<option>GIT, Jaipur</option>'+
                                    '<option>VIT, Jaipur</option>'+
                                '</select>' +
                                '<input type="text" name="" id="" placeholder="Mobile" class="Mobile">' +
                                '<input type="email" name="" id="" placeholder="Email" class="EmailSignup">' +
                                '<label for=""></label>' +
                                '<input type="password" name="" id="" placeholder="password" class="PasswordSignup">' +
                                '<button type="submit" class="ButtonSignup">Signup</button>';
        obj.fadderRemove(fullScreenContainer);
    };
    fadderRemove(fullScreenContainer){
        //remove login fadder
        fullScreenContainer.addEventListener('click', function () {
            if (event.target === fullScreenContainer)
                fullScreenContainer.parentNode.removeChild(fullScreenContainer);
        });

        //escape button
        window.document.onkeydown = function (ev) {
            if (ev.keyCode === 27 && fullScreenContainer != null) {
                fullScreenContainer.parentNode.removeChild(fullScreenContainer);
            }
        };
    };
}
var one = new FaderSignin();
one.fadderAdd();
var two = new FaderSignup();
two.fadderAdd();
