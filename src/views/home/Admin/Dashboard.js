import React, { useEffect, useState } from 'react';
import { db } from 'firebase.config'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
    const [formData, setFormData] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        fetchArticles();
        fetchFormData();
    }, []);

    const fetchFormData = async () => {
        try {
            const usersCollection = collection(db, 'users'); // Ensure 'users' is your collection name
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

    const fetchArticles = async () => {
        const articlesCollection = collection(db, "articles");
        const articlesSnapshot = await getDocs(articlesCollection);
        const articlesList = articlesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setArticles(articlesList);
    };


    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Articles</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        {/* <th>content</th> */}
                        <th>location</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article.id}>
                            <td>{article?.articleTitle}</td>
                            {/* <td>{article?.articleContent}</td> */}
                            <td><a href={article?.location} target='_blank'>location</a></td>
                            <td>
                                <img src={article?.imageUrls[0]} alt={article?.title} width="100" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )

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
                    {formData.map((user, index) => (
                        <tr key={index}>
                            {/* <td>{user.uid}</td> */}
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
