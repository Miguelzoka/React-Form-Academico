// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ref, set } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {

  const uuid = v4()

  set(ref(db, 'disciplinas/2' + uuid), req.body)
  
  res.status(200).json({ name: 'John Doe' })
}
