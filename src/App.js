import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import { ThemeProvider } from './contexts/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import CarRides from './components/Services/Car_Rides';
import Rentals from './components/Services/Rentals';
import Auto_Rides from './components/Services/Auto_Rides';
import Bike_Rides from './components/Services/Bike_Rides';
import Intercity from './components/Services/Intercity';
import Book_Ride from './components/Services/Book_Ride';
import SignUp from './components/User/Signup';
import Login from './components/User/Login';
import OTPVerification from './components/User/OTPVerification';
import SafetyPage from './pages/SafetyPage';
import RideBooking from './components/RideBooking/RideBooking';
import ServiceOptions from './components/RideBooking/ServiceOptions';
import BikeRide from './components/RideBooking/BikeRide';
import RideTrackingPage from './components/RideBooking/RideTrackingPage';
import RideCompleted from './components/RideBooking/RideCompleted';
import BikeProps from './components/RideBooking/Props';
import CarRide from './components/Ride/CarRide/CarRide';
import CarProps from './components/Ride/CarRide/CarProps';
import PremiumProps from './components/Ride/CarRide/PremiumProps';
import GreenXL from './components/Ride/CarRide/GreenXL';
import AutoRide from './components/Ride/AutoRide/autoRide';
import AutoProps from './components/Ride/AutoRide/AutoProps';
import GreenAuto from './components/Ride/AutoRide/GreenAuto';
import CourierRide from './components/Ride/CourierRide/CourierRide';
import CourierXL from './components/Ride/CourierRide/CourierXL';
import FoodRide from './components/Ride/FoodDelivery/FoodRide';
import FoodProps from './components/Ride/FoodDelivery/FoodProps';
import Grocery from './components/Ride/Grocery/Grocery';
import CourierProps from './components/Ride/CourierRide/CourierProps';
import FoodXL from './components/Ride/FoodDelivery/FoodXL';
import GroceryProps from './components/Ride/Grocery/GroceryProps';
import GroceryXL from './components/Ride/Grocery/GroceryXL';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/carrides" element={<CarRides />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/Auto_rides" element={<Auto_Rides />} />
            <Route path="/Bike_rides" element={<Bike_Rides />} />
            <Route path="/Intercity" element={<Intercity />} />
            <Route path="/Book_ride" element={<Book_Ride />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otpverification" element={<OTPVerification />} />

            <Route path="/book" element={<RideBooking />} />
            <Route path="/book-ride" element={<ServiceOptions />} />
            <Route path="/bike-ride" element={<BikeRide />} />
            <Route path="/confirm" element={<BikeProps />} />
            <Route path="/ride-tracking" element={<RideTrackingPage />} />
            <Route path="/rating" element={<RideCompleted />} />
     
     {/* CarRide */}
            <Route path="/Car-ride" element={<CarRide />} />
            <Route path="/features/air-conditioned" element={<CarProps />} />
            <Route path="/features/premium-cars" element={<PremiumProps />} />
            <Route path="/features/spacious" element={<GreenXL />} />

     {/* AutoRide */}
            <Route path="/auto-ride" element={<AutoRide />} />
            <Route path="/economical" element={<AutoProps />} />
            <Route path="/spacious" element={<GreenAuto />} />

     {/* Courier Delivery */}

            <Route path="/courier-ride" element={<CourierRide />} />
            <Route path="/fast" element={<CourierProps />} />
            <Route path="/luggage" element={<CourierXL />} />
            
      {/* Food Delivery */}

            <Route path="/food-delivery" element={<FoodRide />} />
            <Route path="/food" element={<FoodProps />} />
            <Route path="/foodxl" element={<FoodXL />} />


      {/* Grocery Delivery*/}

            <Route path="/grocery-delivery" element={<Grocery />} />
            <Route path="/grocery" element={<GroceryProps />} />
            <Route path="/groceryxl" element={<GroceryXL />} />


         
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}


export default App;
