import { useContext, useState } from 'react'
import styles from '../styles/pages/home.module.css'
import Input from '../components/Input'
import { useRouter } from 'next/router'
import { ShipmentContext } from '../context/ShipmentContext'

export default function Home() {
  const [fromZipCode, setFromZipCode] = useState('')
  const [fromStreet1, setFromStreet1] = useState('')
  const [fromStreet2, setFromStreet2] = useState('')
  const [fromNumber, setFromNumber] = useState('')
  const [fromCity, setFromCity] = useState('')
  const [fromState, setFromState] = useState('')
  const [fromCountry, setFromCountry] = useState('')
  const [fromCompany, setFromCompany] = useState('')
  const [fromPhone, setFromPhone] = useState('')

  const [toZipCode, setToZipCode] = useState('')
  const [toStreet1, setToStreet1] = useState('')
  const [toStreet2, setToStreet2] = useState('')
  const [toNumber, setToNumber] = useState('')
  const [toCity, setToCity] = useState('')
  const [toState, setToState] = useState('')
  const [toCountry, setToCountry] = useState('')
  const [toCompany, setToCompany] = useState('')
  const [toPhone, setToPhone] = useState('')

  const router = useRouter()

  const [error, setError] = useState('')
  const { updateShipment } = useContext(ShipmentContext)
  
  const setFromAddress = async (event) => {
    event.preventDefault()
    
    const fromAddress = {
      zipCode: fromZipCode,
      street1: `${fromNumber} ${fromStreet1}`,
      street2: fromStreet2,
      city: fromCity,
      state: fromState,
      country: fromCountry,
      company: fromCompany,
      phone: fromPhone
    }

    const toAddress = {
      zipCode: toZipCode,
      street1: `${toNumber} ${toStreet1}`,
      street2: toStreet2,
      city: toCity,
      state: toState,
      country: toCountry,
      company: toCompany,
      phone: toPhone
    }

    try {
      const fetchResponse = await fetch('/api/createShipment', {
        method: 'POST',
        body: JSON.stringify({
          fromAddress,
          toAddress
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      if (fetchResponse.status === 500) {
        throw await fetchResponse.json()
      }

      const shipment = await fetchResponse.json()
  
      updateShipment(shipment)

      router.push('/rates')
    } catch (err) {
      setError(err.error.error.message)
    }
  }
  
  return (
    <main className="container">
      <form style={{width: '100%'}} onSubmit={setFromAddress}>
        <fieldset>
          <h1 style={{ marginBottom: '1.6rem' }}>
            From address
          </h1>
          <Input 
            required 
            placeholder="Zip Code" 
            width="12rem" 
            onChange={e => setFromZipCode(e.target.value)} 
          />
          <div className={ styles.inLine }>
            <Input required placeholder="Street 01" onChange={e => setFromStreet1(e.target.value)}/>
            <Input placeholder="Street 02" onChange={e => setFromStreet2(e.target.value)}/>
          </div>
          <Input 
            required 
            placeholder="Number" 
            width="12rem" 
            onChange={e => setFromNumber(e.target.value)} 
          />
          <Input required placeholder="City" onChange={e => setFromCity(e.target.value)}/>
          <div className={ styles.inLine }>
            <Input 
              required 
              placeholder="Country" 
              onChange={e => setFromCountry(e.target.value)}
            />
            <Input 
              required 
              placeholder="State" 
              onChange={e => setFromState(e.target.value)}
            />
          </div>
          <div className={ styles.inLine }>
            <Input required placeholder="Company" onChange={e => setFromCompany(e.target.value)}/>
            <Input required placeholder="Phone" onChange={e => setFromPhone(e.target.value)}/>
          </div>
        </fieldset>
        <fieldset>
          <h1 style={{ marginBottom: '1.6rem' }}>
            To address
          </h1>
          <Input 
            required 
            placeholder="Zip Code" 
            width="12rem" 
            onChange={e => setToZipCode(e.target.value)} 
          />
          <div className={ styles.inLine }>
            <Input required placeholder="Street 01" onChange={e => setToStreet1(e.target.value)}/>
            <Input placeholder="Street 02" onChange={e => setToStreet2(e.target.value)}/>
          </div>
          <Input 
            required 
            placeholder="Number" 
            width="12rem" 
            onChange={e => setToNumber(e.target.value)} 
          />
          <Input required placeholder="City" onChange={e => setToCity(e.target.value)}/>
          <div className={ styles.inLine }>
          <Input 
              required 
              placeholder="Country" 
              onChange={e => setToCountry(e.target.value)}
            />
            <Input 
              required 
              placeholder="State" 
              onChange={e => setToState(e.target.value)}
            />
          </div>
          <div className={ styles.inLine }>
            <Input required placeholder="Company" onChange={e => setToCompany(e.target.value)}/>
            <Input required placeholder="Phone" onChange={e => setToPhone(e.target.value)}/>
          </div>
        </fieldset>
        {error && (
          <p style={{color: 'red', fontSize: '16px'}}>
            {error}
          </p>
        )}
        <button 
        className="confirm" 
        style={{marginLeft: 'auto', marginRight: '1.4rem'}} 
        type="submit"
        >
          Next
        </button>
      </form>
    </main>
  )
}
