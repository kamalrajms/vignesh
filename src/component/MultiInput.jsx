import React, { useState } from "react";

export default function MultiInput() {
  const [fornData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...fornData,
      [name]: type === "checked" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fornData);

    alert("Form submitted successfully");
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="value"
          name="userName"
          value={fornData.userName}
          onChange={handleChange}
          required
        />
        <label htmlFor="">E mail</label>
        <input
          type="email"
          name="email"
          value={fornData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={fornData.password}
          onChange={handleChange}
          required
        />
        <input
          type="checkbox"
          name="terms"
          checked={fornData.terms}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
