import React from 'react'
import Safety from '../components/Safety/Safety'
import SafetyFeatures from '../components/Safety/SafetyFeatures'
import SafetyGuidelines from '../components/Safety/SafetyGuidelines'
import EmergencyContact from '../components/Safety/EmergencyContact'
import SafetyPartners from '../components/Safety/SafetyPartners'
import SafetyBlog from '../components/Safety/SafetyBlog'


const SafetyPage = () => {
    return (
        <div>
            <Safety />
            <SafetyFeatures />
            <SafetyGuidelines />
            <EmergencyContact />
            <SafetyPartners />
            <SafetyBlog />
        </div>
    )
}

export default SafetyPage
