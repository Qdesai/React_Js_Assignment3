import "./Login.css"

export default function Login(){
    return(
       
        <div>
             <center><h1>Login Page!</h1></center>

                        <div class="wrapper">
            <form class="login">
                <p class="title">Log in</p>
                <input type="text" placeholder="Username" autofocus/>
                <i class="fa fa-user"></i>
                <input type="password" placeholder="Password" />
                <i class="fa fa-key"></i>
                <button>
                <i class="spinner"></i>
                <span class="state">Log in</span>
                </button>
            </form>

            </div>
        </div>
        
    );
}

