import { useState } from 'react';
import UserTable from './UserTable';
import ArticlesTable from './ArticlesTable';
import { Button, Container, Navbar, NavbarBrand } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [selectedTable, setSelectedTable] = useState(null);

    const onBack = () => {
        navigate("/")
    }

    return (
        <div style={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
            <Navbar style={{ backgroundColor: "#1a1a2e", padding: "15px 0", boxShadow: "0 2px 20px rgba(0,0,0,0.15)" }} light expand="md">
                <Container>
                    <NavbarBrand href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #f5a623, #f7d06b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className="now-ui-icons location_map-big" style={{ color: "#1a1a2e", fontSize: "18px" }}></i>
                        </div>
                        <div>
                            <h4 style={{ color: "gold", fontFamily: "fantasy", margin: 0, fontSize: "20px", lineHeight: "1.2" }}>Kandy Travel Guider</h4>
                            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Admin Panel</span>
                        </div>
                    </NavbarBrand>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.08)", padding: "6px 14px", borderRadius: "20px" }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#28a745" }}></div>
                            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>Online</span>
                        </div>
                        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #667eea, #764ba2)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                            A
                        </div>
                    </div>
                </Container>
            </Navbar>

            <Container style={{ padding: "30px 15px" }}>
                {/* Header */}
                <div style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontWeight: "800", color: "#1a1a2e", margin: "0 0 5px", fontSize: "28px" }}>Dashboard</h2>
                    <p style={{ color: "#888", margin: 0, fontSize: "15px" }}>Manage your travel guides and users</p>
                </div>

                {/* Selection Cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "30px" }}>
                    <div
                        onClick={() => setSelectedTable('users')}
                        style={{
                            padding: "30px",
                            background: selectedTable === 'users'
                                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                                : "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                            color: 'white',
                            borderRadius: "16px",
                            cursor: 'pointer',
                            transition: "all 0.3s ease",
                            boxShadow: selectedTable === 'users'
                                ? "0 8px 30px rgba(102,126,234,0.4)"
                                : "0 8px 30px rgba(0,123,255,0.25)",
                            transform: selectedTable === 'users' ? "translateY(-3px)" : "translateY(0)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)" }}></div>
                        <div style={{ position: "absolute", bottom: "-30px", right: "30px", width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)" }}></div>
                        <div style={{ width: "50px", height: "50px", borderRadius: "12px", backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px" }}>
                            <i className="now-ui-icons users_circle-08" style={{ fontSize: "24px" }}></i>
                        </div>
                        <h4 style={{ fontWeight: "700", margin: "0 0 5px", fontSize: "20px" }}>Login Details</h4>
                        <p style={{ margin: 0, opacity: 0.8, fontSize: "14px" }}>View and manage user accounts</p>
                        <div style={{ marginTop: "15px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", opacity: 0.9 }}>
                            <span>{selectedTable === 'users' ? 'Currently viewing' : 'Click to view'}</span>
                            <i className="now-ui-icons arrows-1_minimal-right" style={{ fontSize: "12px" }}></i>
                        </div>
                    </div>

                    <div
                        onClick={() => setSelectedTable('articles')}
                        style={{
                            padding: "30px",
                            background: selectedTable === 'articles'
                                ? "linear-gradient(135deg, #f5a623 0%, #f7d06b 100%)"
                                : "linear-gradient(135deg, #28a745 0%, #1e7e34 100%)",
                            color: 'white',
                            borderRadius: "16px",
                            cursor: 'pointer',
                            transition: "all 0.3s ease",
                            boxShadow: selectedTable === 'articles'
                                ? "0 8px 30px rgba(245,166,35,0.4)"
                                : "0 8px 30px rgba(40,167,69,0.25)",
                            transform: selectedTable === 'articles' ? "translateY(-3px)" : "translateY(0)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)" }}></div>
                        <div style={{ position: "absolute", bottom: "-30px", right: "30px", width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)" }}></div>
                        <div style={{ width: "50px", height: "50px", borderRadius: "12px", backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px" }}>
                            <i className="now-ui-icons files_paper" style={{ fontSize: "24px" }}></i>
                        </div>
                        <h4 style={{ fontWeight: "700", margin: "0 0 5px", fontSize: "20px" }}>Articles</h4>
                        <p style={{ margin: 0, opacity: 0.8, fontSize: "14px" }}>Approve or reject travel guides</p>
                        <div style={{ marginTop: "15px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", opacity: 0.9 }}>
                            <span>{selectedTable === 'articles' ? 'Currently viewing' : 'Click to view'}</span>
                            <i className="now-ui-icons arrows-1_minimal-right" style={{ fontSize: "12px" }}></i>
                        </div>
                    </div>
                </div>

                {/* Active Tab Label */}
                {selectedTable && (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "15px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ width: "4px", height: "24px", borderRadius: "2px", background: selectedTable === 'users' ? "linear-gradient(180deg, #667eea, #764ba2)" : "linear-gradient(180deg, #f5a623, #f7d06b)" }}></div>
                            <h5 style={{ fontWeight: "700", color: "#1a1a2e", margin: 0 }}>
                                {selectedTable === 'users' ? 'User Management' : 'Article Management'}
                            </h5>
                        </div>
                        <Button
                            onClick={() => setSelectedTable(null)}
                            style={{
                                backgroundColor: "transparent",
                                border: "1.5px solid #ddd",
                                color: "#888",
                                padding: "6px 16px",
                                borderRadius: "20px",
                                fontSize: "13px",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e74c3c"; e.currentTarget.style.color = "#e74c3c"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#ddd"; e.currentTarget.style.color = "#888"; }}
                        >
                            <i className="now-ui-icons ui-1_simple-remove" style={{ fontSize: "10px", marginRight: "4px" }}></i>
                            Close
                        </Button>
                    </div>
                )}

                {/* Table Container */}
                {selectedTable && (
                    <div style={{
                        backgroundColor: "white",
                        borderRadius: "16px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                        padding: "25px",
                        marginBottom: "25px",
                        border: "1px solid rgba(0,0,0,0.04)",
                    }}>
                        {selectedTable === 'users' && <UserTable />}
                        {selectedTable === 'articles' && <ArticlesTable />}
                    </div>
                )}

                {/* Empty State */}
                {!selectedTable && (
                    <div style={{
                        backgroundColor: "white",
                        borderRadius: "16px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                        padding: "60px 30px",
                        textAlign: "center",
                        border: "1px solid rgba(0,0,0,0.04)",
                    }}>
                        <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "#f0f2f5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                            <i className="now-ui-icons design_app" style={{ color: "#ccc", fontSize: "32px" }}></i>
                        </div>
                        <h5 style={{ color: "#aaa", fontWeight: "600", margin: "0 0 8px" }}>Select a section to manage</h5>
                        <p style={{ color: "#ccc", margin: 0, fontSize: "14px" }}>Click on Login Details or Articles above to get started</p>
                    </div>
                )}

                {/* Back Button */}
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <Button
                        onClick={onBack}
                        style={{
                            backgroundColor: "transparent",
                            border: "2px solid #1a1a2e",
                            color: "#1a1a2e",
                            padding: "10px 24px",
                            borderRadius: "25px",
                            fontSize: "14px",
                            fontWeight: "600",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1a1a2e"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#1a1a2e"; }}
                    >
                        <i className="now-ui-icons arrows-1_minimal-left" style={{ fontSize: "12px" }}></i>
                        Back to Home
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;
