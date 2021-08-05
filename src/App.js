import logo from './logo.svg';
import './App.css';
import { Form,Row,Col,Button,Container,Navbar,Nav } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
    <Navbar bg="light" variant="light"> 
    <Container>
    <Navbar.Brand href="#home">Hello</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Sign Up</Nav.Link>
      <Nav.Link href="#features">Sign in </Nav.Link>
      <Nav.Link href="#pricing">Home</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
     
     <div className="auth-wrapper">
        <div className="auth-inner">
 <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div></div>

   </div>
  );
}

export default App;
