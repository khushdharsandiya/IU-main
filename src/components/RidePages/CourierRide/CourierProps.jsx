import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ConfirmRide from "../../RideBooking/ConfirmRide";
import { FaBicycle } from "react-icons/fa";

const CourierProps = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  useEffect(() => {
    const pickupParam = params.get("pickup");
    const dropoffParam = params.get("dropoff");

    if (pickupParam) setPickup(pickupParam);
    if (dropoffParam) setDropoff(dropoffParam);
  }, [location.search]);

  const [selectedMethod, setSelectedMethod] = useState(0);
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { title: "HDFC Credit Card", detail: "xxxx 4352", icon: "💳" },
    { title: "ICIC Debit Card", detail: "xxxx 5448", icon: "💳" },
    { title: "user@upi", icon: "💳" },
  ]);

  const fareDetails = [
    { label: "Base fare", amount: 40 },
    { label: "Package handling", amount: 20 },
    { label: "Distance charge", amount: 70 },
    { label: "Service fee", amount: 15 },
  ];

  const totalFare = fareDetails.reduce((sum, item) => sum + item.amount, 0);

  const handleAddPayment = (newMethod) => {
    const updated = [...paymentMethods, newMethod];
    setPaymentMethods(updated);
    setSelectedMethod(updated.length - 1);
    setShowAddPayment(false);
  };

  return (
    <ConfirmRide
      pickupLocation={pickup}
      dropLocation={dropoff}
      rideType="GreenBike"
      eta="6 mins"
      fareDetails={fareDetails}
      totalFare={totalFare}
      paymentMethods={paymentMethods}
      selectedMethod={selectedMethod}
      onSelectMethod={setSelectedMethod}
      onShowAddPayment={() => setShowAddPayment(true)}
      onHideAddPayment={() => setShowAddPayment(false)}
      showAddPayment={showAddPayment}
      onAddPayment={handleAddPayment}
      Route={"/courier-ride"}
             rideIcon={<FaBicycle />}
      
    />
  );
};

export default CourierProps;
