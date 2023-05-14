const { headers } = require('next/dist/client/components/headers')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers(){
    return[
      {
        source: '/(.*)',
        headers:[
          {
            key: 'Referrer-Policy',
            value: 'same-origin'
          }
        ]
      }
    ]
  }


}

module.exports = nextConfig
