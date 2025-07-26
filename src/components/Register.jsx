import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const  handleRegister = e => {
    e.preventDefault();
    
    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const password = e.target.password.value;

    console.log(name, email, password);
  }



  
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
       <div className="form-control">   
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name ="Name"  placeholder="Name"  className="input input-bordered" required/>
          </div>
       <div className="form-control">   
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="Email" name ="Email"  placeholder="Email"  className="input input-bordered" required/>
          </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name ="password"  placeholder="Password"  className="input input-bordered" required/> 
          </div>
          <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          </div>  
      </form>
      <p className='text-center mb-4'>Already have an account? please  /
      <Link to="/login">Login</Link>
      </p>
    </div>
  </div>
</div>
  );
};

export default Register;