import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
import { useRouter } from 'next/router'
import data from '../../../database/data'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const id = req.query.id
  const entry = await db.getById(id as string)

  res.status(200).json(entry)
}

export default allAvos
