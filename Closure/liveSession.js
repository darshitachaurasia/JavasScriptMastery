/**
 * function login(){
                const remember=document.getElementById("rememberMe").checked;
                const authToken="FZ@#145!";
                if(remember){
                    localStorage.setItem("token",authToken);
                }
                else{
                    sessionStorage.setItem("token",authToken);
                }
                showDashboard();
        }
        function showDashboard(){
            document.getElementById("loginForm").style.display="none";
            document.getElementById("dashboard").style.display="block";
        }
        function logout(){
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            showLoginForm();
        }
 */
function createSessionManager() {
  let session = null ;
  return{
    login : (user) => session = user,
    logout : () => session = null,
    getSession : () => session
  }
}

// Usage
const sessionManager = createSessionManager();
sessionManager.login({ username: 'Mithun sir', role: 'admin' });
console.log(sessionManager.getSession()); // { username: 'Mithun sir', role: 'admin' }
sessionManager.logout();
console.log(sessionManager.getSession()); // null

  