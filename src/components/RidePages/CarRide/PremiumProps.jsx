import React, { useState } from "react";
import ConfirmRide from "../../RideBooking/ConfirmRide";
import { FaCarSide } from "react-icons/fa";

const PremiumProps = () => {
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { title: "HDFC Credit Card", detail: "xxxx 4352", icon: "💳" },
    { title: "ICICI Debit Card", detail: "xxxx 5438", icon: "💳" },
    { title: "user@upi", detail: "", icon: "💳" },
  ]);

  const fareDetails = [
    { label: "Base fare", amount: 160 },
    { label: "Distance charge", amount: 120 },
    { label: "Time charge", amount: 40 },
    { label: "Taxes & fees", amount: 29 },
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
      pickupLocation="mcdksjn "
      dropLocation="knkdan"
      rideType="GreenPremium"
      eta="8 mins"
      fareDetails={fareDetails}
      totalFare={totalFare}
      paymentMethods={paymentMethods}
      selectedMethod={selectedMethod}
      onSelectMethod={setSelectedMethod}
      onShowAddPayment={() => setShowAddPayment(true)}
      onHideAddPayment={() => setShowAddPayment(false)}
      showAddPayment={showAddPayment}
      onAddPayment={handleAddPayment}
      Route={"/Car-ride"}
      rideIcon={<FaCarSide />}

    />
  );
};

export default PremiumProps;
