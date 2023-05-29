
function Login() {

    return (
      <>
      <div className="container bg-white">
        <div className="card w-100 bg-base-100 shadow-xl image-full mx-auto">
          <figure><img src="..\src\assets\karsten-winegeart-4bC1Ef88OYI-unsplash 1.png" alt="Shoes" /></figure>
          <div className="card-body">
          <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">What is your name?</span>
    <span className="label-text-alt">Top Right label</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
    <span className="label-text-alt">Bottom Right label</span>
  </label>
</div>
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      </>
      
    )
  }
  
  export default Login