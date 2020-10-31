import React, { useEffect, useState } from 'react'
import Navbar from 'components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('api/avo')
      .then((res) => res.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div>{product.image}</div>
      ))}
    </div>
  )
}

export default HomePage
