import React, { useEffect, useState } from 'react'

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
    <>
      {productList.map((product) => (
        <div>{product.image}</div>
      ))}
    </>
  )
}

export default HomePage
