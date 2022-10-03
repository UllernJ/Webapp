import { content } from '../../data/content'

export default function handler(req, res) {

  if(req.method === 'GET') {
    res.status(200).json(content)
  } else if(req.method === 'POST') {
    const data = req.body
    const newContent = {
      title: Date.now(),
      content: data.value
    }
    content.push(newContent)
    res.status(201).json(content)
  }
}
