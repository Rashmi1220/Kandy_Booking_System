import React, { useEffect, useState } from 'react';
import { db } from 'firebase.config';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

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

    const handleApprove = async (articleId) => {
        try {
            await updateDoc(doc(db, 'articles', articleId), { status: 'approved' });
            setArticles(articles.map(article => article.id === articleId ? { ...article, status: 'approved' } : article));
        } catch (error) {
            console.error("Error approving article: ", error);
        }
    };

    const handleReject = async (articleId) => {
        try {
            await updateDoc(doc(db, 'articles', articleId), { status: 'rejected' });
            setArticles(articles.map(article => article.id === articleId ? { ...article, status: 'rejected' } : article));
        } catch (error) {
            console.error("Error rejecting article: ", error);
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
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
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
                                    <span style={{ fontSize: '10px', color: 'green' }}>Empty</span>
                                )}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                                <img src={article?.imageUrls[0]} alt={article?.articleTitle} width="100" />
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                                {article.status}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                                {article.status === 'pending' && (
                                    <>
                                        <button
                                            onClick={() => handleApprove(article.id)}
                                            style={{
                                                backgroundColor: 'green',
                                                border: 'none',
                                                cursor: 'pointer',
                                                color: '#fff',
                                                padding: '5px 10px',
                                                marginRight: '5px'
                                            }}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            onClick={() => handleReject(article.id)}
                                            style={{
                                                backgroundColor: 'red',
                                                border: 'none',
                                                cursor: 'pointer',
                                                color: '#fff',
                                                padding: '5px 10px'
                                            }}
                                        >
                                            Reject
                                        </button>
                                    </>
                                )}
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
