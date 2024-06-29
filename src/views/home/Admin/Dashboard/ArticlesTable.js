import React, { useEffect, useState } from 'react';
import { db } from 'firebase.config';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';

const ArticlesTable = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const articlesCollection = collection(db, "articles");
            const articlesSnapshot = await getDocs(articlesCollection);
            const articlesList = articlesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setArticles(articlesList);
        } catch (error) {
            console.error("Error fetching articles: ", error);
        }
    };

    const handleDelete = async (articleId) => {
        try {
            await deleteDoc(doc(db, 'articles', articleId));
            setArticles(articles.filter(article => article.id !== articleId));
        } catch (error) {
            console.error("Error deleting article: ", error);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>


            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: 'skyblue' }}>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Location</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article.id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{article?.articleTitle}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                                {article?.location ? (
                                    <a href={article.location} target='_blank' rel='noopener noreferrer' style={{ color: '#007bff', textDecoration: 'none' }}>
                                        <span style={{ fontSize: '40px', color: 'red' }}>📍</span>
                                    </a>
                                ) : (
                                    <a >
                                        <span style={{ fontSize: '10px', color: 'green' }}> Empty</span>
                                    </a>

                                )}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                                <img src={article?.imageUrls[0]} alt={article?.articleTitle} width="100" />
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                                <button
                                    onClick={() => handleDelete(article.id)}
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

export default ArticlesTable;
