import { expect } from 'chai';
import CreateAccount from '../assets/js/CreateAccount';

describe('CreateAccount', () => {
  let createAccount;

  const createField = () => ({
    value: '',
    steps: {},
    isValid: false,
  });
  before(() => {
    createAccount = new CreateAccount();
  });

  describe('Smoke Tests', () => {
    describe('createAccount', () => {
      it ('should be an object', () => {
        expect(createAccount).to.be.an('object');
      });
      it ('should exist method validate full name', () => {
        expect(createAccount.validateFullName).to.exist.and.be.a('function');
      });
      it ('should exist method validate email', () => {
        expect(createAccount.validateEmail).to.exist.and.be.a('function');
      });
      it ('should exist method validate password', () => {
        expect(createAccount.validatePassword).to.exist.and.be.a('function');
      });
      it ('should exist method validate password confirmation', () => {
        expect(createAccount.validatePasswordConfirmation).to.exist.and.be.a('function');
      });
      it ('should exist method validate form', () => {
        expect(createAccount.validateForm).to.exist.and.be.a('function');
      });
    });
  });
  describe('validateFullName', () => {
    beforeEach(() => {
      createAccount.name = createField();
    });

    it ('should return true when name value is `João Antonio` and has space', () => {
      createAccount.name.value = 'João Antonio';
      createAccount.validateFullName();
      expect(createAccount.name.isValid).to.be.true;
    });

    it ('should return true when name value is `Miguel d\'Angelo` and has \'', () => {
      createAccount.name.value = `Miguel d\'Angelo`;
      createAccount.validateFullName();
      expect(createAccount.name.isValid).to.be.true;
    });

    it ('should return false when name value is `João` and has no space', () => {
      createAccount.name.value = 'João';
      createAccount.validateFullName();
      expect(createAccount.name.isValid).to.be.false;
    });

    it ('should return false when string contains special caracter', () => {
      createAccount.name.value = 'Joao % Pedro';
      createAccount.validateFullName();
      expect(createAccount.name.isValid).to.be.false;
    });

    it ('should return false when string contains number', () => {
      createAccount.name.value = 'João 9023';
      createAccount.validateFullName();
      expect(createAccount.name.isValid).to.be.false;
    });
  });
  describe('validateEmail', () => {
    beforeEach(() => {
      createAccount.email = createField();
    });

    it ('should return true when email value is `jose@gmail.com`', () => {
      createAccount.email.value = 'jose@gmail.com';
      createAccount.validateEmail();
      expect(createAccount.email.isValid).to.be.true;
    });

    it ('should return true when email value is `jose@gmail.com.br`', () => {
      createAccount.email.value = 'jose@gmail.com.br';
      createAccount.validateEmail();
      expect(createAccount.email.isValid).to.be.true;
    });

    it ('should return false when email value is `jose@gmail`', () => {
      createAccount.email.value = 'jose@gmail';
      createAccount.validateEmail();
      expect(createAccount.email.isValid).to.be.false;
    });

    it ('should return false when email value is `jose@gmail.`', () => {
      createAccount.email.value = 'jose@gmail.';
      createAccount.validateEmail();
      expect(createAccount.email.isValid).to.be.false;
    });

    it ('should return false when email value is `josegmail.`', () => {
      createAccount.email.value = 'josegmail.';
      createAccount.validateEmail();
      expect(createAccount.email.isValid).to.be.false;
    });

    it ('should return false when email value is `jóse@gmail.com.br`', () => {
      createAccount.email.value = 'jóse@gmail.com.br';
      createAccount.validateEmail();
      expect(createAccount.email.isValid).to.be.false;
    });
  });
  describe('validatePassword', () => {
    beforeEach(() => {
      createAccount.password = createField();
    });

    it ('should return true when password value is `Senha123`', () => {
      createAccount.password.value = 'Senha123';
      createAccount.validatePassword();
      expect(createAccount.password.isValid).to.be.true;
    });

    it ('should return true when password value is `___Jdl21`', () => {
      createAccount.password.value = '___Jdl21';
      createAccount.validatePassword();
      expect(createAccount.password.isValid).to.be.true;
    });

    it ('should return true when password value is `A12345`', () => {
      createAccount.password.value = 'A12345';
      createAccount.validatePassword();
      expect(createAccount.password.isValid).to.be.true;
    });

    it ('should return false when password value is `123456`', () => {
      createAccount.password.value = '123456';
      createAccount.validatePassword();
      expect(createAccount.password.isValid).to.be.false;
    });

    it ('should return false when password value is `asdasd`', () => {
      createAccount.password.value = 'asdasd';
      createAccount.validatePassword();
      expect(createAccount.password.isValid).to.be.false;
    });

    it ('should return false when password value is `asdasd`', () => {
      createAccount.password.value = 'asdasd';
      createAccount.validatePassword();
      expect(createAccount.password.isValid).to.be.false;
    });

    it ('should return false when password value is `123asdasd`', () => {
      createAccount.password.value = '123asdasd';
      createAccount.validatePassword();
      expect(createAccount.password.isValid).to.be.false;
    });

    it ('should return false when password value is `ABC12`', () => {
      createAccount.password.value = 'ABC12';
      createAccount.validatePassword();
      expect(createAccount.password.isValid).to.be.false;
    });

    it ('should return false when password value is `#@!dsaa`', () => {
      createAccount.password.value = '#@!dsaa';
      createAccount.validatePassword();
      expect(createAccount.password.isValid).to.be.false;
    });
  });

  describe('validatePasswordConfirmation', () => {
    beforeEach(() => {
      createAccount.passwordConfirmation = createField();
    });
    it ('should return true when password and passwordConfirmation value is `Senha123`', () => {
      createAccount.password.value = 'Senha123';
      createAccount.passwordConfirmation.value = 'Senha123';
      createAccount.validatePassword();
      createAccount.validatePasswordConfirmation();
      expect(createAccount.passwordConfirmation.isValid).to.be.true;
    });

    it ('should return true when password and passwordConfirmation value is `___Jdl21`', () => {
      createAccount.password.value = '___Jdl21';
      createAccount.passwordConfirmation.value = '___Jdl21';
      createAccount.validatePassword();
      createAccount.validatePasswordConfirmation();
      expect(createAccount.passwordConfirmation.isValid).to.be.true;
    });

    it ('should return true when password and passwordConfirmation value is `A12345`', () => {
      createAccount.password.value = 'A12345';
      createAccount.passwordConfirmation.value = 'A12345';
      createAccount.validatePassword();
      createAccount.validatePasswordConfirmation();
      expect(createAccount.passwordConfirmation.isValid).to.be.true;
    });

    it ('should return false when password and passwordConfirmation value is `A1234`', () => {
      createAccount.password.value = 'A1234';
      createAccount.passwordConfirmation.value = 'A1234';
      createAccount.validatePassword();
      createAccount.validatePasswordConfirmation();
      expect(createAccount.passwordConfirmation.isValid).to.be.false;
    });

    it ('should return false when password value is `A123456` and passwordConfirmation value is `A12345`', () => {
      createAccount.password.value = 'A123456';
      createAccount.passwordConfirmation.value = 'A12345';
      createAccount.validatePassword();
      createAccount.validatePasswordConfirmation();
      expect(createAccount.passwordConfirmation.isValid).to.be.false;
    });
  });
  describe('validateForm', () => {
    beforeEach(() => {
      createAccount.name = createField();
      createAccount.email = createField();
      createAccount.password = createField();
      createAccount.passwordConfirmation = createField();
      createAccount.validated = false;
    });

    it ('should return true when name value is `João da Silva` and email value is `joao@gmail.com` and password value is `Senha123` and passwordConfirmation value is `Senha123`', () => {
      createAccount.name.value = 'João da Silva';
      createAccount.email.value = 'joao@gmail.com';
      createAccount.password.value = 'Senha123';
      createAccount.passwordConfirmation.value = 'Senha123';
      createAccount.validateFullName();
      createAccount.validateEmail();
      createAccount.validatePassword();
      createAccount.validatePasswordConfirmation();
      createAccount.validateForm();
      expect(createAccount.validated).to.be.true;
    });

    it ('should return false when name value is `João da Silva` and email value is `joao@gmail.com` and password value is `Senha` and passwordConfirmation value is `Senha`', () => {
      createAccount.name.value = 'João da Silva';
      createAccount.email.value = 'joao@gmail.com';
      createAccount.password.value = 'Senha';
      createAccount.passwordConfirmation.value = 'Senha';
      createAccount.validateFullName();
      createAccount.validateEmail();
      createAccount.validatePassword();
      createAccount.validatePasswordConfirmation();
      createAccount.validateForm();
      expect(createAccount.validated).to.be.false;
    });

    it ('should return false when name value is `` and email value is `joao@gmail.com` and password value is `Senha` and passwordConfirmation value is `Senha`', () => {
      createAccount.name.value = '';
      createAccount.email.value = 'joao@gmail.com';
      createAccount.password.value = 'Senha';
      createAccount.passwordConfirmation.value = 'Senha';
      createAccount.validateFullName();
      createAccount.validateEmail();
      createAccount.validatePassword();
      createAccount.validatePasswordConfirmation();
      createAccount.validateForm();
      expect(createAccount.validated).to.be.false;
    });
  });
});
