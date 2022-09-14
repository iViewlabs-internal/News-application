import React from 'react'

const LoginModals = () => {
  return (

    <div
    className="modal fade"
    id="staticBackdrop"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="fs-4">Login</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="register-form px-3 py-3">
          
        <div className="form-group">
          <input
            className="input-field"
            Name="form__input"
            type="email"
            placeholder="Email"
          />
        </div>
        <br />

        <div className="form-group">
          <input
            className="input-field"
            Name="form__input"
            type="password"
            placeholder="Password"
          />
        </div>
        <br />
        <div class="form-group">
          <button className="register-button" type="submit">
            Login
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoginModals