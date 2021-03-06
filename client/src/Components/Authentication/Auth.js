import auth0 from 'auth0-js';


export default class Auth {
	auth0 = new auth0.WebAuth({
		domain: 'grant-management-system.auth0.com',
		clientID: 'l024FKgb9rGnauBainwuAUI2khmBavWV',
		redirectUri: 'http://localhost:3000/callback',
		audience: 'https://grant-management-system.auth0.com/userinfo',
		responseType: 'token id_token',
		scope: 'openid'
	});



	constructor() {
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
		this.isAuthenticated = this.isAuthenticated.bind(this);
	}

	login() {
		this.auth0.authorize()
	}
	
	handleAuthentication() {
		this.auth0.parseHash((err, authResult) => {
		if (authResult && authResult.accessToken && authResult.idToken) {
			this.setSession(authResult);
			location.pathname = "";
		} else if (err) {
			location.pathname = "/login";
			console.log(err);
		}
		});
	}

	/* eslint no-restricted-globals: 0*/
	setSession(authResult) {
		// Set the time that the Access Token will expire at
		let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
		localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem('id_token', authResult.idToken);
		localStorage.setItem('expires_at', expiresAt);
		location.hash = "";
	}
	
	isAuthenticated() {
		// Check whether the current time is past the 
		// Access Token's expiry time
		let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}

	logout() {
		// Clear Access Token and ID Token from local storage
		localStorage.removeItem('access_token');
		localStorage.removeItem('id_token');
		localStorage.removeItem('expires_at');
		// navigate to the home route
		location.pathname = "/login";
	}


}

