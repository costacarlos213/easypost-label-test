import React, { createContext, useState } from 'react'

export const ShipmentContext = createContext({})

export const ShipmentProvider = ({ children }) => {
  const [shipmentInfo, setShipmentInfo] = useState({})

  function updateShipment(updateInfo) {
    setShipmentInfo(updateInfo)
  }

  return (
    <ShipmentContext.Provider value={{ shipmentInfo, updateShipment }}>
      {children}
    </ShipmentContext.Provider>
  )
}