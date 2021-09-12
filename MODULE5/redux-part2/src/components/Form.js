import React from "react";

const Form = ({ handleChange, handleSubmit, title }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" id="title" value={title} onChange={handleChange} />
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default Form;
