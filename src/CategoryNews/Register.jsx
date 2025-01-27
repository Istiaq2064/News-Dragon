import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Result } from 'postcss';

const Register = () => {
    const {createNewUser,setUser} =useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name =form.get("name")
        const photo =form.get("photo")
        const email =form.get("email")
        const password =form.get("password")
        console.log({name,email,photo,password});
        createNewUser(email,password)
        .then((Result)=>{
            const user =Result.user;
            setUser(user);
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
        <div className="card bg-base-100 w-full max-w-lg p-12 shrink-0 rounded-none">
            <h2 className='text-xl font-semibold text-center'>Register your account</h2>
  <form onSubmit={handleSubmit} className="card-body">
  <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input name="name" type="text" placeholder="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo_Url</span>
      </label>
      <input name="photo" type="text" placeholder="Photo_url" className="input input-bordered" required />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input name="email" type="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input name="password" type="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
  </form>
  <p className='text-center font-semibold'>All Ready Have An Account? <Link className='text-red-600' to="/auth/login">Login</Link></p>
</div>

    </div>
    );
};

export default Register;