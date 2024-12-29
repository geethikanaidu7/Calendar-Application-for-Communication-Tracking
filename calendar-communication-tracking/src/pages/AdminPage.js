import React, { useState } from 'react';

function AdminPage() {
    const [companies, setCompanies] = useState([]);

    const addCompany = (newCompany) => {
        setCompanies([...companies, newCompany]);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Admin Module</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    addCompany({
                        name: form.name.value,
                        location: form.location.value,
                    });
                    form.reset();
                }}
                className="space-y-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    required
                    className="border p-2 w-full"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="border p-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    Add Company
                </button>
            </form>
            <h2 className="text-xl font-bold mt-6">Companies</h2>
            <ul className="space-y-2">
                {companies.map((company, index) => (
                    <li key={index} className="border p-2">
                        {company.name} - {company.location}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminPage;