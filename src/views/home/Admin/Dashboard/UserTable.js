import React, { useEffect, useState } from 'react';
import { db } from 'firebase.config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const UserTable = () => {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        fetchFormData();
    }, []);

    const fetchFormData = async () => {
        try {
            const usersCollection = collection(db, 'users');
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

    const handleDelete = async (userId) => {
        try {
            await deleteDoc(doc(db, 'users', userId));
            setFormData(formData.filter(user => user.id !== userId));
        } catch (error) {
            console.error("Error deleting user: ", error);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Login Details</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: 'skyblue' }}>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>First Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Last Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Organization</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone Number</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Location</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((user, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.firstName}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.lastName}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.email}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.organization}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.phoneNumber}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.location}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: '#ff0000'
                                    }}
                                >
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
