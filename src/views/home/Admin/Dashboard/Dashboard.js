import { useState } from 'react';
import UserTable from './UserTable';
import ArticlesTable from './ArticlesTable';
import { Button, Card, Container, Navbar, NavbarBrand } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [selectedTable, setSelectedTable] = useState(null);

    const onBack = () => {
        navigate("/")
    }

    return (
        <div>
            <Navbar color="dark green" light expand="md">
                <Container>
                    <NavbarBrand href="/"> <h4 style={{ color: "gold", fontFamily: "fantasy" }}>Kandy Travel Guider</h4> </NavbarBrand>

                </Container>
            </Navbar>
            <h1 style={{ color: "red", textAlign: "center" }}>Admin Dashboard</h1>
            <Card>
                <Container style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                    <div
                        onClick={() => setSelectedTable('users')}
                        style={{
                            width: '45%',
                            padding: '20px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            textAlign: 'center',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '24px'
                        }}
                    >
                        Login Details
                    </div>
                    <div
                        onClick={() => setSelectedTable('articles')}
                        style={{
                            width: '45%',
                            padding: '20px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            textAlign: 'center',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '24px'
                        }}
                    >
                        Articles
                    </div>
                </Container>

                <Container style={{ marginTop: '20px' }}>
                    {selectedTable === 'users' && <UserTable />}
                    {selectedTable === 'articles' && <ArticlesTable />}
                </Container>

            </Card>
            <Button onClick={onBack}>Back</Button>
        </div>
    );
};

export default Dashboard;
