import { api } from "../../services/api"

export default async function handler(req, res) {
  const { shipmentId, rateId } = req.body
  
  try {
    const shipment = await api.Shipment.retrieve(shipmentId)

    const buy = await shipment.buy(rateId)

    res.status(200).json(buy)
  } catch (error) {
    console.log(error)

    res.status(500).send(error)
  }
}
