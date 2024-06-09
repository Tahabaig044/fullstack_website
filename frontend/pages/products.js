import Link from 'next/link'
import React from 'react'

const products = (props) => {
  return (
    <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item) => {
              return (
                <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-96 rounded m-auto mb-8" src={item.attributes.images.data && item.attributes.images.data.attributes.name} alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
                    <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
                    <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button>
                    <p className="leading-relaxed text-base"> {item.attributes.description}</p>
                    <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>

  )
}

export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer ed1aadb4e30c70d928cc333f8b013a208aba17639f9bc0c66d2be6ddea6fd569f164e4ab451e9e1855d03f94cafe31f20f4be913f8eb368843f820540f85b95815239fde85de2898c92e89edf1c2afac85dcb72acae08819c47ffc3ec393d827b40f73148c01e97f6150404147f63b73d8183cebedd7e112051e76bcdb2bdf53" }
  let a = await fetch("http://localhost:1337/api/products?populate=*", { headers: headers })
  let products = await a.json()
  console.log(products)
  return {
    props: { products: products },
  }
}

export default products