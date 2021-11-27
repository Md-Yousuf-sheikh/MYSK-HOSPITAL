import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Doctors from './component/Doctors/Doctors';
import ContactUs from './component/ContactUs/ContactUs';
import Login from './component/Login/Login';
import Register from './component/Login/Register';
import AuthProvider from './component/Context/AuthProvider';
import NotFound from './component/NotFound/NotFound';
import About from './component/About/About';
import Appointment from './component/Appointment/Appointment';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Blog from './component/Blog/Blog';
import ServicesDetail from './component/ServicesDetail/ServicesDetail';
import Service from './component/Home/Service/Service';
import Appointments from './component/Appointments/Appointments/Appointments';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/doctors">
            <Doctors />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/ServicesDetail/:serviceId">
            <ServicesDetail />
          </PrivateRoute>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path="/Appointments">
            <Appointments />
          </PrivateRoute>

          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
