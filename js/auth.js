//
// // Load the SDK asynchronously
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
//
//
// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '177181629465844',
//     cookie     : true,  // enable cookies to allow the server to access
//                         // the session
//     xfbml      : true,  // parse social plugins on this page
//     version    : 'v2.8' // use graph api version 2.8
//   });
//
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// };
//
// function checkLoginState() {
//
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }
//
// // This is called with the results from from FB.getLoginStatus().
// function statusChangeCallback(response) {
//   if (response.status === 'connected') {
//     //window.location.href = "/main";
//     testAPI();
//     console.log( response );
//     console.log( response.authResponse.accessToken );
//     window.location.href = self;
//   } else {
//     if( window.location != "http://localhost:3000/login" ){
//       window.location.href = "http://localhost:3000/login";
//     }
//   }
// }
//
// // Here we run a very simple test of the Graph API after login is
// // successful.  See statusChangeCallback() for when this call is made.
// function testAPI() {
//   console.log('Welcome!  Fetching your information.... ');
//   FB.api('/me', function(response) {
//     console.log('Successful login for: ' + response.name + ', and his / her id is : ' + response.id );
//   });
// }
