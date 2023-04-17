import images from "../assets";

const Resume = () => {
  return (
    <div className="content">
      <h3>Resume</h3>
      <iframe
        title="resume"
        src={images.re}
        width="100%"
        height="450px"
      ></iframe>
    </div>
  );
};

export default Resume;
