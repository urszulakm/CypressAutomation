/// <reference types="cypress" />

import { loginPage } from '../../pages/pageObjects/loginPage/loginPage';

describe('Login page scenario', () => {
	beforeEach(function () {
		loginPage.visitPage();
	});

	context('Login to test arena', () => {
		it.only('Proper login', () => {
			// JSON.parse()

			cy.fixture('example').then((loginPageData) => {
				loginPage.loginToTestArena(loginPageData.login, loginPageData.pass);

				cy.url().should('include', 'http://demo.testarena.pl');
			});
	
		});

		it('Login with wrong pass', () => {
			cy.fixture('example').then((loginPageData) => {
				loginPage.loginToTestArena(loginPageData.login, loginPageData.falsePass);

				cy.url().should('include', 'http://demo.testarena.pl');
			});
		});

		it('Login with wrong email', () => {
			loginPage.loginToTestArena();

			cy.url().should('include', 'http://demo.testarena.pl');
		});
	});
});
