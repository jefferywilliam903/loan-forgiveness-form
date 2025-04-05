import React, { useState } from "react";

const LoanForgivenessForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanAmount: "",
    loanType: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwy7CfnmRqRAj9w4dJ1D7rGVRHQn0nJDzlBGSQyTunT1M8VlNkxVZOSxGGrn2nOhVUJbg/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Thanks! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        loanAmount: "",
        loanType: "",
      });
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
      <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
      <input type="number" name="loanAmount" placeholder="Loan Amount" value={formData.loanAmount} onChange={handleChange} required className="w-full p-2 border rounded" />
      <select name="loanType" value={formData.loanType} onChange={handleChange} required className="w-full p-2 border rounded">
        <option value="">Select Loan Type</option>
        <option value="Federal">Federal</option>
        <option value="Private">Private</option>
        <option value="Both">Both</option>
      </select>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Check My Eligibility</button>
    </form>
  );
};

export default LoanForgivenessForm;