import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import Select from '../components/Select'
import { ShipmentContext } from '../context/ShipmentContext'

export default function Rates() {
  const [rateId, setRateId] = useState('')
  const { shipmentInfo } = useContext(ShipmentContext)

  const buyShipment = async () => {
    const buyResponse = await fetch('/api/buyShipment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        shipmentId: shipmentInfo.id,
        rateId
      })
    })

    const buyInfo = await buyResponse.json()

    window.open(buyInfo.postage_label.label_url)
  }

  return (
    <main className="container">
      <h1 style={{ marginBottom: '1.6rem' }}>
        Rates
      </h1>
      <Select name="rates" onChange={e => setRateId(e.target.value)}>
        <option value="" disabled selected>
        Select Rate
        </option>
        {shipmentInfo.rates && shipmentInfo.rates.map(rate => (
          <option value={rate.id} key={rate.id}>
            {rate.currency} {rate.rate}
          </option>
        ))}
      </Select>
      <button type="button" onClick={buyShipment} className="confirm">
        Create label
      </button>
    </main>
  )
}