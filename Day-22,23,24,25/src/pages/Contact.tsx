import React, { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    });

    // Handle changes for all inputs
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Validate or send formData to server here
        alert(`Thanks for contacting us, ${formData.name}!`);
        // Reset form after submit
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ display: "block", width: "100%", margin: "8px 0 15px" }}
                />
            </label>

            <label htmlFor="email">
                Email
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ display: "block", width: "100%", margin: "8px 0 15px" }}
                />
            </label>

            <label htmlFor="message">
                Message
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ display: "block", width: "100%", margin: "8px 0 15px" }}
                />
            </label>

            <button
                type="submit"
                style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                }}
            >
                Send Message
            </button>
        </form>
    );
};

export default Contact;
