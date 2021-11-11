import { api } from "../../services/api"

export default async function handler(req, res) {
  try {
    const shipments = await api.Shipment.all()

    res.status(200).json(shipments)
  } catch (error) {
    console.log(error)

    res.status(500).send(error)
  }
}
