(function _() {
    class CreateAccount extends HTMLElement {
      constructor() {
        // establish prototype chain
        super();
  
        // attaches shadow tree and returns shadow root reference
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
        const shadow = this.attachShadow({ mode: 'open' });
  
        // creating a container for the editable-list component
        const createAccountContainer = document.createElement('div');
  
        // get attribute values from getters
        const { title } = this;
  
        // adding a class to our container for the sake of clarity
        createAccountContainer.classList.add('create-account');
  
        // creating the inner HTML of the editable list element
        createAccountContainer.innerHTML = `
            <style>
                h1 {
                    margin-top: 0;
                    margin-bottom: 24px;
                }
  
                h2 {
                    margin-top: 0;
                    margin-bottom: 22px;
                    font-size: 22px;
                    line-height: 31px;
                    font-weight: 500;
                    color: #312F4F;
                }
  
                label {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                            flex-direction: column;
                    padding: 20px 0 0;
                    width: 100%;
                }
  
                label:first-of-type {
                    padding-top: 0;
                }
  
                label span {
                    line-height: 26px;
                    font-size: 16px;
                    color: #696D8C;
                }
  
                .password_confirmation {
                  padding-top: 12px;
                }
  
                input {
                    font-size: 100%;
                    line-height: 1.15;
                    margin: 0;
                    padding: 12px;
                    color: #312F4F;
                    outline: 0;
                    -webkit-appearance: none;
                    border: 1px solid #B6B9D0;
                    -webkit-box-shadow: inset 0 3px 10px rgba(0,0,0,0.05);
                            box-shadow: inset 0 3px 10px rgba(0,0,0,0.05);
                    -webkit-transition: 0.25s;
                    -o-transition: 0.25s;
                    transition: 0.25s;
                }
  
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    line-height: 26px;
                    font-size: 16px;
                    color: #696D8C;
                }
                .flex-column {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                            flex-direction: column;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                }
  
                .wrapper {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                    -webkit-box-pack: center;
                        -ms-flex-pack: center;
                            justify-content: center;
                    min-height: 100vh;
                }
  
                /**
                * Form Component
                */
  
                #register {
                    background: #fff;
                    border: 3px solid #F2F2F2;
                    padding: 60px 70px 48px;
                    width: 100%;
                    max-width: 515px;
                    -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                }
  
                .sign-up {
                    -webkit-transition: 0.5s;
                    -o-transition: 0.5s;
                    transition: 0.5s;
                    max-height: 800px;
                }
  
                .valid {
                    border-color: #17D499;
                }
  
                .invalid {
                    border-color: #F79682;
                }
  
                .btn {
                    margin-top: 30px;
                    background: #17D499;
                    color: #fff;
                    display: block;
                    border: none;
                    font-weight: 700;
                    padding: 18px;
                    width: 100%;
                    position: relative;
                    cursor: pointer;
                    outline: 0;
                    font-size: 100%;
                }
  
                .btn[disabled] {
                    cursor: default;
                }
  
                .btn span {
                    -webkit-transition-duration: 0.5s;
                        -o-transition-duration: 0.5s;
                            transition-duration: 0.5s;
                }
  
                .circle {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                    -webkit-box-pack: center;
                        -ms-flex-pack: center;
                            justify-content: center;
                }
  
                .circle__elem {
                    width: 10px;
                    height: 10px;
                    background: #FFFFFF;
                    border-radius: 50%;
                    display: block;
                    margin: 5px;
                    opacity: 0;
                    visibility: hidden;
                    -webkit-transition-delay: 0.25s;
                        -o-transition-delay: 0.25s;
                            transition-delay: 0.25s;
                }
  
                .btn.animating .circle__elem {
                    opacity: 1;
                    visibility: visible;
                    -webkit-animation: animateSize 0.5s alternate infinite ease-out;
                            animation: animateSize 0.5s alternate infinite ease-out;
                }
  
                .btn.animating .circle__elem:nth-child(2) {
                    -webkit-animation-delay: 0.25s;
                            animation-delay: 0.25s;
                }
  
                .btn.animating .circle__elem:nth-child(3) {
                    -webkit-animation-delay: 0.5s;
                            animation-delay: 0.5s;
                }
  
                @-webkit-keyframes animateSize {
                    100% {
                        -webkit-transform: scale(0.4);
                                transform: scale(0.4);
                    }
                }
  
                @keyframes animateSize {
                    100% {
                        -webkit-transform: scale(0.4);
                                transform: scale(0.4);
                    }
                }
  
                .btn.animating .text {
                    visibility: hidden;
                    opacity: 0;
                }
  
                #password-steps li:before {
                    content: "";
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #EAEAF4;
                    margin-right: 8px;
                    -webkit-transition: 0.25s;
                    -o-transition: 0.25s;
                    transition: 0.25s;
                }
  
                #password-indicators {
                    height: 8px;
                    margin-top: 8px;
                    margin-bottom: 12px;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: justify;
                        -ms-flex-pack: justify;
                            justify-content: space-between;
                }
  
                #password-indicators li {
                    width: 32%;
                    height: 8px;
                    background: #EAEAF4;
                    border-radius: 10px;
                    -webkit-transition: 0.25s;
                    -o-transition: 0.25s;
                    transition: 0.25s;
                }
  
                #password-indicators.step-1 .active {
                    background: #F79682;
                }
  
                #password-indicators.step-2 .active {
                    background: #F7BC1C;
                }
  
                #password-indicators.step-3 .active {
                    background: #1FE6A8;
                }
  
                #password-steps.init li:before {
                    background: #F79682;
                }
  
                #password-steps.init li.valid:before {
                    background: #1FE6A8;
                }
  
                #password.step-2 {
                    border-color: #F7BC1C;
                }
  
                .form-confirmation {
                    text-align: center;
                    -webkit-transition: 0.5s;
                    -o-transition: 0.5s;
                    transition: 0.5s;
                    opacity: 0;
                    visibility: hidden;
                    max-height: 0;
                }
  
                .form-confirmation h2 {
                    margin-top: 17px;
                    margin-bottom: 6px;
                    font-weight: 400;
                }
  
                .form-confirmation p {
                    margin-top: 0;
                    max-width: 231px;
                    font-size: 16px;
                    line-height: 26px;
                    margin-bottom: 55px;
                }
  
                .confirm .sign-up {
                    opacity: 0;
                    visibility: hidden;
                    max-height: 0;
                    -webkit-transform: scale(0);
                        -ms-transform: scale(0);
                            transform: scale(0);
                }
  
                .confirm .form-confirmation {
                    -webkit-transition-delay: 0.5s;
                        -o-transition-delay: 0.5s;
                            transition-delay: 0.5s;
                    opacity: 1;
                    visibility: visible;
                    max-height: 500px;
                    margin-top: 75px;
                }
            </style>
            <form class="flex-column sign-up">
                <h2>${title}</h2>
                <label>
                    <span>Nome completo</span>
                    <input type="text" id="name" name="name">
                </label>
                <label>
                    <span>E-mail</span>
                    <input type="text" id="email" name="email">
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" id="password" name="password">
                </label>
                <ul id="password-indicators">
                    <li data-indicator="1"></li>
                    <li data-indicator="2"></li>
                    <li data-indicator="3"></li>
                </ul>
                <ul id="password-steps">
                    <li data-list="1">Pelo menos 6 caracteres</li>
                    <li data-list="2">Pelo menos 1 letra maiúscula</li>
                    <li data-list="3">Pelo menos 1 número</li>
                </ul>
                <label class="password_confirmation">
                    <span>Confirme sua senha</span>
                    <input type="password" id="passwordConfirmation" name="passwordConfirmation">
                </label>
                <button type="submit" id="submit" class="btn" disabled>
                    <span class="text">Criar conta</span>
                    <span class="circle">
                        <span class="circle__elem"></span>
                        <span class="circle__elem"></span>
                        <span class="circle__elem"></span>
                    </span>
                </button>
            </form>
            <div class="form-confirmation flex-column">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.18 21.16L2.84 12.82L1.71661e-07 15.64L11.18 26.82L35.18 2.82L32.36 3.05176e-07L11.18 21.16Z" transform="translate(24.8201 29.1799)" fill="#17D499"/>
                <circle cx="42" cy="42" r="40.5" stroke="#17D499" stroke-width="3"/></svg>
                <h2>Tudo certo</h2>
                <p>Verifique sua caixa de entrada para confirmar seu e-mail.</p>
            </div>
        `;
  
        // appending the container to the shadow DOM
        shadow.appendChild(createAccountContainer);
      }
  
      // gathering data from element attributes
      get title() {
        return this.getAttribute('title') || '';
      }
 
    }
    
    // let the browser know about the custom element
    customElements.define('create-account', CreateAccount);
  }());
  