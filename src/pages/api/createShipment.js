import { api } from "../../services/api"

export default async function handler(req, res) {
  const { toAddress, fromAddress } = req.body
  
  try {
    const parcel = new api.Parcel({
      length: 20.2,
      width: 10.9,
      height: 5,
      weight: 65
    });
  
    const to_address = new api.Address({
      ...toAddress,
      verify: ['delivery']
    })

    const from_address = new api.Address({
      ...fromAddress,
      verify: ['delivery']
    })

    const shipment = new api.Shipment({
      to_address,
      from_address,
      parcel
    });
  
    const response = await shipment.save()
    
    res.status(200).json(response)
  } catch (error) {    
    res.status(500).send(error)
  }
}
