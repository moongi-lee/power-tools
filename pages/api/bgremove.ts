import { NextApiRequest, NextApiResponse } from 'next'


export default function handler(request: NextApiRequest, response:NextApiResponse ) {

  if (request.method == "GET") {
    console.log('GET')
    response.status(200).json('GET 처리 완료')
  }

  if (request.method == "POST") {
    console.log('POST')
    console.log(request.body)
    response.status(200).json('POST 처리 완료')
  }
}