import React, { useEffect, useState } from 'react';
import { db } from 'firebase.config'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        const fetchFormData = async () => {
            try {
                const usersCollection = collection(db, 'user'); // Ensure 'users' is your collection name
                const snapshot = await getDocs(usersCollection);
                const users = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setFormData(users);
            } catch (error) {
                console.error("Error fetching login details: ", error);
            }
        };

        fetchFormData();
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Login Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Organization</th>
                        <th>Phone Number</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.organization}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
