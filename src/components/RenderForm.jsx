import React, { useState } from 'react'; //eslint-disable-line

const RenderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hasValue, setHasValue] = useState(false);

  const handleNameChange = (event) => {
    setHasValue(false);
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setHasValue(false);
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email) {
      setHasValue(true);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row text-center">
        <h3>Input Form</h3>
      </div>
      <div className="row justify-content-center">
        <form className="input-form">
          <div className="row form-group">
            <label className="form-text">Enter your name:</label>
            <input
              className="form-control input-field"
              type="text"
              placeholder="Name..."
              max-length="100"
              onChange={handleNameChange}
            />
          </div>
          <div className="row form-group">
            <label className="form-text">Enter your email:</label>
            <input
              className="form-control input-field"
              type="email"
              placeholder="Email..."
              max-length="100"
              onChange={handleEmailChange}
            />
          </div>
          <div className="row mt-3">
            <input className="btn btn-outline-secondary" type="submit" onClick={handleSubmit} />
          </div>
        </form>
      </div>
      {hasValue ? (
        <div className="row text-center">
          <p>
            Name:
            {name}
          </p>
          <p>
            Email:
            {email}
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default RenderForm;
