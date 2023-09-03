import React, { useState } from "react";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    fileType: "video",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform course submission or validation here
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <div className="jumbotron bg-secondary">
        <h1 className="display-4">Add a Course</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="courseName">Title</label>
            <input
              type="text"
              className="form-control"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fileType">File Type</label>
            <select
              className="form-control"
              id="fileType"
              name="fileType"
              value={formData.fileType}
              onChange={handleChange}
            >
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="file">Upload File</label>
            <input
              type="file"
              className="form-control-file"
              id="file"
              name="file"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
