const Contact = () => {
  return (
    <div className="center row">
      <h3 className="title">Contact</h3>
      <div>
        <form id="contact-form">
          <div className="form-group mt-3">
            <label className="subtitle">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="subtitle">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label className="subtitle">Message</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
