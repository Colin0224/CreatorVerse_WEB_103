import React, { useState } from "react";

const CreatorForm = ({ onSubmit, initialData = {} }) => {
    const [formData, setFormData] = useState({
        name: initialData.name || "",
        url: initialData.url || "",
        description: initialData.description || "",
        imageURL: initialData.imageURL || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create a New Creator</h1>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                URL:
                <input
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </label>
            <label>
                Image URL:
                <input
                    type="url"
                    name="imageURL"
                    value={formData.imageURL}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreatorForm;
