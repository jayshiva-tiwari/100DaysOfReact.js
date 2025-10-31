// ContactForm.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  // Validate form
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h1>Contact Us</h1>

      {submitted && (
        <div
          style={{
            padding: "15px",
            backgroundColor: "#d4edda",
            color: "#155724",
            borderRadius: "6px",
            marginBottom: "20px",
          }}
        >
          ✅ Thank you! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "8px" }}>
            Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: errors.name ? "2px solid red" : "1px solid #ddd",
            }}
          />
          {errors.name && (
            <span style={{ color: "red", fontSize: "14px" }}>{errors.name}</span>
          )}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "8px" }}>
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: errors.email ? "2px solid red" : "1px solid #ddd",
            }}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "14px" }}>{errors.email}</span>
          )}
        </div>

        {/* Message Field */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="message" style={{ display: "block", marginBottom: "8px" }}>
            Message <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: errors.message ? "2px solid red" : "1px solid #ddd",
              fontFamily: "inherit",
            }}
          />
          {errors.message && (
            <span style={{ color: "red", fontSize: "14px" }}>{errors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "12px 24px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
