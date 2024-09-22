import React from 'react'

const MainContent = () => {
  return (
<div>
    <main className="flex flex-col  md:flex-row justify-between items-center p-8 md:p-16">
    <div className="max-w-lg mb-8 md:mb-0">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Create and sell custom products</h1>
      <ul className="text-lg text-gray-700 mb-6">
        <li className="flex items-center mb-2">
          <i className="fas fa-check text-green-600 mr-2"></i> 100% Free to use
        </li>
        <li className="flex items-center mb-2">
          <i className="fas fa-check text-green-600 mr-2"></i> 900+ High-Quality Products
        </li>
        <li className="flex items-center mb-2">
          <i className="fas fa-check text-green-600 mr-2"></i> Largest global print network
        </li>
      </ul>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-green-600 text-white px-6 py-3 rounded">Start for free</button>
        <button className="flex items-center border border-gray-300 px-6 py-3 rounded">
          <i className="fas fa-play-circle text-gray-700 mr-2"></i> How it works?
        </button>
      </div>
      <p className="text-green-600 mt-4">Trusted by over 8M sellers around the world</p>
    </div>
    <div className="relative">
      <img src="https://qph.cf2.quoracdn.net/main-qimg-ed5364e7a94de6aa591abcc7a3cd0b7a-pjlq" alt="T-shirt with custom design" className="shadow-lg tshirt-girl" />

    </div>
  </main>
  <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img src="https://printify.com/pfh/assets/legacy/higher-profits.svg" alt="Icon representing higher profits" className="mb-4 icon-profits" />
              <h3 className="text-lg font-semibold">Higher Profits</h3>
              <p className="text-gray-600">We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://printify.com/pfh/assets/legacy/robust-scaling.svg" alt="Icon representing robust scaling" className="mb-4 icon-scaling" />
              <h3 className="text-lg font-semibold">Robust Scaling</h3>
              <p className="text-gray-600">Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://printify.com/pfh/assets/legacy/best-selection.svg" alt="Icon representing best selection" className="mb-4 icon-selection" />
              <h3 className="text-lg font-semibold">Best Selection</h3>
              <p className="text-gray-600">With 900+ products and top quality brands, you can choose the best products for your business.</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img src="data:image/jpeg;base64,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" alt="Various customizable products"
                className="rounded-lg" width="350" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-4">Easily add your design to a wide range of products</h2>
              <p className="text-gray-600 mb-4">With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
              <a href="#" className="text-green-500 font-semibold">All products <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto py-12">
          <div className="flex flex-col items-center">
            <img src="https://th.bing.com/th/id/OIP.N4HxA2KeaTKIKoYeNx-a8AAAAA?pid=ImgDet&w=198&h=198&c=7&dpr=1.3" alt="Icon representing custom products" className="mb-4" width="250" />
            <h3 className="text-sm font-semibold card-slides">CREATE</h3>
            <h1 className="text-lg font-semibold card-slides2">custom products</h1>
            <p className="text-gray-600">Easily add your designs to a wide range of products using our free tools.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="data:image/jpeg;base64,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"
              alt="Icon representing selling on your terms" className="mb-4" width="250" />
            <h3 className="text-lg font-semibold card-slides">SELL</h3>
            <h1 className="text-lg font-semibold card-slides2"> on your terms</h1>
            <p className="text-gray-600">You choose the products, sale price, and where to sell.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://th.bing.com/th/id/OIP.EXcUo9nT_kiy_TNferLwrwHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.3" alt="Icon representing fulfillment" className="mb-4" width="250" />
            <h3 className="text-lg font-semibold card-slides">WE HANDLE </h3>
            <h1 className="text-lg font-semibold card-slides2">fulfillment</h1>
            <p className="text-gray-600">Once an order is placed, we automatically handle all the printing and delivery logistics.</p>
          </div>
        </div>
      </div>

      <section>
        <div className="container mx-auto py-12">
          <div className="relative text-center mt-5">
            <h1 className="text-3xl font-bold text-gray-800">Connect your store</h1>
            <p className="text-gray-500 mt-2">Printify easily integrates with major e-commerce platforms and marketplaces</p>
            <div className="mt-10 relative flex justify-center items-center">

              <div className="grid grid-cols-3 gap-10">
                <div className="flex justify-center items-center">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src="data:image/png;base64,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"
                      alt="BigCommerce logo" className="w-12 h-12 mx-auto" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src="https://th.bing.com/th/id/OIP.2E2aVeev9-89NSZWbxUfCAAAAA?rs=1&pid=ImgDetMain" alt="Squarespace logo" className="w-12 h-12 mx-auto" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src="data:image/jpeg;base64,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"
                      alt="Wix logo" className="w-12 h-12 mx-auto" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src="https://th.bing.com/th/id/OIP.aTAzpSXsahoADghlZE61RQAAAA?pid=ImgDet&w=159&h=159&c=7" alt="API logo" className="w-12 h-12 mx-auto" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-green-500 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src="data:image/png;base64,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"
                      alt="Printify logo" className="w-12 h-12 mx-auto" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src="https://th.bing.com/th/id/OIP.FaQgoGWIWTyVY2lzrwguAgAAAA?pid=ImgDet&w=126&h=75&c=7" alt="WooCommerce logo" className="w-12 h-12 mx-auto" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEPEBMQEhASFRUWEhUTFRUVFRAXFxgVFREXFxUaFhUYHSggGBwmHhUVITEhJSkrLi4uGh8zODUsQyktLisBCgoKDg0OGhAQGi0lICYtLy03Ky0tLS0vNy0tLS0tLy0uLS0rLS4tKy0tLS0tLS4tLS0tLS8vLTUtLS0rLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABCEAACAQICBgcFBAcIAwAAAAAAAQIDEQQFBhIhMUFREyIyYXGBkQdCobHBFFJi0SNTcoKSk/AWFzNjg6Ky4SRD0v/EABsBAQACAwEBAAAAAAAAAAAAAAADBAECBQYH/8QAKxEBAAICAQMCBgEFAQAAAAAAAAECAxEEEiExQVEFEyJhgcFxQqGx0fAG/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5c1zQHoHlTXNeqPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPM5qKu2kubNLG5nGn1Y9aXwXiQlfESqO8nf5ehJXHMq+TkVr2jvKYxGbwjsinL4I0KuaVZbmo+C+rNIE0Y6wqWz3t6vc605b5Sfi2eADdFM7D1CrJbpSXg2jyAbbdLMqsfev47fib9DOYvZONu9bUQoNJpWUlc16+q10qsZq8Wmu49lTpVZQd4tp9xMYLNlLqz2PnwfjyIrYpjwt4+TW3aeyUABEsgAAAAAAAAAAAAAAAAAAELmWZXvCD2bnLn4H3N8de9OL/af0Ionx4/WVLPn/AKagAJlMBp5lmdHDR1qs1Hkt8n+zHeyn5lpzUldUKaivvT60n+7uXxNbXiPKSmK1/EL4Y51orfKK8Wkclxeb4it269R92s0v4VZGk9pHOb7LEcSfWXZ414PdOL8JRMhxQ2sNmNek7061SPhOVvS9h877E8T2l2EHPcu02rwsqsY1Fz7MvVbH6FwynPKGKX6OfWtdwlskvLiu9G9bxKC+G9PKSABuib+X5i6fVltj8V4d3cT0ZJq6d0ypG/leO6N6suy/g/yIslN94WsGfX028J8AFdfAAAAAAAAAAAAAA0MzxvRxtHtP4GfEV7bFv49xXcRV15N+ngSY67lBnydFe3mWMAFlzQrek2lEcNelStKrx4xh4833ep60uz/7LDo6bXSzWz8EfvePI5s3fa/FsiyX12hawYOr6reGXE4mdWTnUk5Se9v+tngYgY6+IhTWtOSiub/raV19kBC1tJaEdynLwVvmeIaUUnvhNej+oE6DUweZUq3Ymm+T2P0ZtgD1Tm4tSi2mtqabTXgzyAL1ozpbrtUcQ+s9kamxJ8lPk+8uJxGrUjFXk0lzbSXxL1oJpNGslh51FJpWpyTvdJdlvmuBPjyekqWfBr6qroACZTTeTYvWXRvels8P+iTKpQquElJb07lppVFKKktzVyvkrqduhxsnVXU+j0ACJZAAAAAAAADXxFe2xb+Z8xFe2xebNQDBjaloPv2fmRht5jLalyV/U1CzjjVXO5Ft3/gMGOxUaNOdWXZhFyffZbEu97jOU72iY7VhToJ9pucvCOyK9W35G1p1G0WOnVaIU3MMZKvVnVn2pO/guCXclZGuDHXqqEZTe5K7KjqxGmjnWbLDxsts3uXLvfcU6vXqV53k5Sk9y2vySOhaPezqvjZfacbJ0oStJU1/iNcE77IK1u/uR0vJtHsJgo2oUIQ5y7U34zldhlwfBaIZhWV4YOtbnKLgvWdkbz9neZ2v9m8uko3/AOR30GWH5zxmimYUNs8HXSW3WjCUor96F0vU28jzx3VKs+NlN778pfmfojLsSo1uj+9BvzT3elzDpBodgcev0+Hg5cKkOpUX70d/g7owzDkJ5q1FGLlJ2SV2+5FgzzQ+rgV1ZutTS2St11FbtdcdnvL4FdeU1cfUp4Oi0pVZdaT3QpR2zk7cOz43S4msWifEszEx5VKNHFZnW1aFGpUfCEIuWqubtsXiyV/sjnGXNYn7JWioNSbg4ztZ36ypttLve4/QmjuQYfL6CoYeCjFbZP3py4ym+L+XAlDOzSr6K53HH4SniI75K01ymtkkS5G4TLoUMRWlSSjGrJynBdnpFbrRW5XV7pb3t5kkW6W3DlZqdF5gJvI614OH3Xs8H/3chDdyepq1V3pr6/QXjdWcFum8LCACq6YAAAAAGtiK/BebPmIr8F5s1QAAAi8Y7zfp8DCZMR25ftMxlyviHJvO7SHMNNMRr42ovuKMF5K7+LZ085Dnkr4qu/8APqf82R5fCfix9Uy0i76M6OKmlWrRvPfGL3Q5Nr73yNHQvJekf2icW4xdoKzs5Le/L5+BdtR8n6Mrr7yD1qPk/RmvicXTpf4k4x7pNJ+m8ywzAhsRpJQj2dafgrL1ZWtKdOatChKdOnCMm9SN25O7vt4bkmwLLLFuNfpV7sl6LY/qXdNPatz2rwOQ5LmOUTyOdbEYn/ztSq3J1ZrEKrry6Po0nsjbV3bLbyzeyPSipmODlGrtq0JKnKS9+DjeEmuD2NPwRiWYWXNO2v2fqQuAeGwOIdRwUOn6nScIyTvq291S335omMzfX8EirabVYRwtpb5VIRhu7e17P3VM4GPLNefMR4mdfr+zvcfBjy46UyeJ/a/nwoGg+lVnHC15bHsp1JPdyjJvhyfkWvSvMfsmBxOItd06M2lzk1aK9Wjv2rNZ1Lm8ziZOLkml/wAT7w0sJiek6/45f8nb4WJEqGQ5vQliJ4WliYV7UaNZThq21pxfSQ6rs3FpPnaVntTZbifF6uNy48S+mTDT1ZxfKS+ZjFyZUidStwAKTsAAAAACLAAAAAROJXXl4sxmfGxtN99mYC3XxDk5I1aQ5ZjMvlWzGeHj2p4mUV3KU73fck7+R1Mj9G8mvm1bENdWNGEk/wAdS8PlCXqaZY7J+LP1TC65bgoYejCjTVowiory4+L3myAV18NfFYKlVVqlOE1+KMX8zYAFYxugeBqbY05U3zpykl/C7r4FN0v9kk8RQlHD4iLknrQVRNbVw1o87tbjrIA/HmI0JzOnW6B4DE697bKc5RfhNLVa77n6F9j2hlTKcHNV7dNWmqk4p3UIqNoRb4vtNtc7cLl+NHOMV0VKTW99VeL/AOrmmS8Y6TafRtSs2tFY9VYzCtr1Zy4OTt4LYvkcf0+z/wC0ZjRwtN3hQl1nss6rjt/hWzxuWb2iaXLAUXSpSX2ipFqP+XF7Nd9/LvOUaK0XOvKo7vVTbb4yl/TZyfhfGtfJ8+/4/wBu3S3Vnx4Ke8b/AIjutx0bIc0Wb4CvlNepq1Z0XClUe3Wsrxb5uLSb5o5ye6FaVOUZwk4yjJSi1vUk7po9HavVD0/O4VOXimlvPpPtP/eXSvZJ7OJ5R01fEypTrT6kdRylGFNbW02ltk+7clzZO3MujOlEcdg5TbSrQjq1Ir7z2KS7n+aMRrijW3zL4jjtiyfLvGpgCVwZcHDWqQX4l8yRQiNzpaQAU3YAAAAAEWAAAAA0sxhufl+X1NIlcTT1otea8iKLOKd1c7k11ffuEhklbVm4v3l8Vu+bI8+xk001vTuje0bjSKlum0StoMGCxKqQUuO5rkzOVJjTqxMTG4AAYZYMbjIUIOpUlqwXak90U+MnwXfuXEzRkmrp3T3MSimmmk01Zp7mjl+kuHzHIHLFYD9PgFeVXBzu+gS2t0Zb409+zdHk1uDqJy72sac08D+ji1Otq2hTvub3znyS4c2vEz5b7aMur4erUblRrQpykqVVduSWxQnHZK7srbH3H5vzHHVcTVnWrTc6k5OUpPe2/l4IhzYYyxFZ8ev3+yTHk6JmY8vmNxdTEVZVaknOc5Xk3vbf9WsXTJMD0FFRfafWl4vh5LYV3RfBKpVc2tkLP959n5NlxLmKkRG3qPgHD1WeRbzPaP3P6AATPSt3J8znhaqqw8JRvZSjxT/redWwWKhWpxqQd4yV0/o+9HG7l79ntOuoTk9lGW2F97lxcfw249weT/8AUcPDfFGfcReO38x7fzHmPyuBv5LTvUv91X83sX1NAn8mo6tPWe+Tv5cDXJOqvD8evVeG+ACq6YAAAAAiwAAAAAjMZS1Zdz2r6kmY8RS1429PE3pbplFmx9dfuiQfZKzsz4WnLbGBxTpSvvT2Nd35ljpVVNKUXdMqhH4/S6nl7avrz/VRa/3P3P62EWSsTG1rj5Zien0X4ERo7pFQx9NTpSs/ehLZKL47OK70S5XXwAAcN9t3s9wtChPM8OnSl0kFUpRS6OWvLV1kvcd2r22PkcOP2hpLktPMMJWwlXZGrBxva7i98ZJc00n5H5Q0s0MxuV1ZQr0Zai7NaMZOlNcGp2sn3PagNrRN2oyt993/AIVYnNdlR0axypzcJOynaze5SW71v8i2ElbTp6f4fyrfIiK28dnrXYTbaSu23ZJb23usbeUZc8TVVLpIU78Zv4JcX3HSsj0boYS0ktepxqSSv36q93yN69VvVFzfjVcEa6pmfaJ/zKvaNaGt2q4pd8aWzbydT/59eReUrbD6CWIiHjuVy8vJv1ZJ/HpDNg8O6k1H18OJZ4qysjTyvCdHG77Ut/dyRulfJbcrGDH0V7+ZAARpwAAAABFgAAAAAAA1sZh9bat/zI4miE0ryutiMPONCajNrat2vG22Ot7rfMlpk1GpVs3H6p3CmaT6W6rdHDPatkqqt5qH5+nMpMpXu27ve295kxOHnSm6dSDhKLs4tWaM+W4dVJbeFrLvvxI7333lNixRXtC1ZRTdGlTs2pJKV1sak9r2+Zt4v2oywNTo66hUikrtvVqXe3ZZbdluBrfZ8T92PrD8yvZhoJHEVZ1qlObnN3k+livRcCrS2p3K1au41C+5V7aMpr7J1KtB3t+lpuz71KDkkvGxZMPpzldTs5hhn/qRXzOLf3b0f1U/5qH929H9VP8AmxJfmwj+XLtdfTXLIK8sfhl/qw/Mr+c+1vJqUXF1nX/BSpud/OVo/E5c9AMP+rn/ADEP7A4f9XP+YPm1Z+XKaqaT5VmFaMaOWYNa7trVKdN1Lvd1Ukt/iSTwFPUcIwhFOLj1YpW2bNxVaWgtCMlKMKiaaafSLY07os+tX5L/AG/mRZLbnskpExGlOaa2Petj8UWzRnS2VO1LENyhsUZ73H9rnHv3ohM4w+q3K1pOT1uVyOhByaik227JJXbb3JLiWaX9YVsmOJ+mXaYyTV07pq6fcTGU4DdUkv2V9WQfs+0er4egvtT43p0ntcF+J/HV4fBXMltk3GoVsfG6bbkABEtAAAAAAAAIsAAAAAAAAAARWe6P4fGxtVh1l2akbKcfPiu57ChYXQnF4SvKUpKtSc4akoJrVim314Xdn37UdSBi0bjTMTqdqefC04jA06najt5rY/gR9bJPuz8pL6ognHMJIvCGPpuzymqvdT8GvqYngKq/9cjTpn2bbhAz3vxPhvPKq7b/AEM9/Iy08hxEvcS/alFfI16Z9m24RgLDh9F5e/US7opv4slsJk1CltULvnLb8Ny9DeMVpazeHOcfoni8a10NqaVSMukqJ6mrZqWzfLfw9ToeimhuHwKU7a9W3+JJK656q9xfHvJ7D0OL8kbJYrXpjSG07nYADZgAAAAAAAAAAEWAAAAAAAAAAAAAAAAAAAAAG3h6HF+SGHocX5I2QAAAAAAAAAAAAAAAAIsAAAAAAAAAAAAAAAAAADbw9Di/JDD0OL8kbIAAAAAAAAAAAAAAAAAAARYAAAAAAAAAAAAAAAB6hvXivmABJAAAAAAAAAAAAAAAAAAAAAP/2Q=="
                      alt="PrestaShop logo" className="w-12 h-12 mx-auto" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src="https://th.bing.com/th/id/OIP.OUsC3Sbt0jeNsaDi_KyKjAAAAA?pid=ImgDet&w=150&h=150&c=7" alt="Shopify logo" className="w-12 h-12 mx-auto" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-400">
                    <img src="https://th.bing.com/th/id/OIP.kzT70uTk2YtFxoIOp26gyAAAAA?pid=ImgDet&w=159&h=119&c=7" alt="Etsy logo" className="w-12 h-12 mx-auto" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <span className="text-gray-500 font-bold">And more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 p-4 bg-white rounded-md">
          <div className="flex items-center justify-around p-4 bg-green-100 rounded-md w-full">
            <div className="text-green-800 text-lg font-semibold">
              Are you a large business looking for custom solutions?
            </div>
            <div className="bg-green-500 text-white px-4 py-2 rounded-md">
              Talk to sales
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-gray-800">Trusted by over 8M sellers around the world</h2>
        <p className="text-gray-600 mt-4">Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
        <div className="flex justify-center mt-12">
          <div className="flex space-x-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <img src="data:image/jpeg;base64,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"
                alt="Profile picture of Robert A. Voltaire" className="w-12 h-12 rounded-full mx-auto" />
              <h3 className="text-lg font-semibold mt-4">Robert A. Voltaire</h3>
              <p className="text-sm text-gray-500">Store link</p>
              <div className="flex justify-center mt-2">
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
              </div>
              <p className="text-gray-600 mt-4">Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <img src="data:image/jpeg;base64,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"
                alt="Profile picture of Quinten Barney" className="w-12 h-12 rounded-full mx-auto" />
              <h3 className="text-lg font-semibold mt-4">Quinten Barney</h3>
              <p className="text-sm text-gray-500">Etsy Merchant</p>
              <div className="flex justify-center mt-2">
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
              </div>
              <p className="text-gray-600 mt-4">We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvnDX7xU2H0awmDjrfkzPVQ1QUZcm6mAumWeds1cR4pm47B4&s"
                alt="Profile picture of Nikki" className="w-12 h-12 rounded-full mx-auto" />
              <h3 className="text-lg font-semibold mt-4">Nikki</h3>
              <p className="text-sm text-gray-500">Store link</p>
              <div className="flex justify-center mt-2">
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
              </div>
              <p className="text-gray-600 mt-4">Printify has been a amazing partner as we grow our business, from the products we can make for our customers to the Customer Service team that makes the whole process a breeze.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center py-16 bg-gray-100">
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          <div className="bg-[#1E3A3A] text-white p-8 rounded-lg flex flex-col md:flex-row">
            <div className="md:mr-8 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Make Money, Risk-Free</h1>
              <p className="mb-6">You pay for fulfillment only when you make a sale</p>
              <div className="bg-[#2A4A4A] p-6 rounded-lg mb-6">
                <div className="flex justify-between mb-2">
                  <span>You sell a t-shirt</span>
                  <span>$ 30</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>You pay for its production</span>
                  <span>$ 12</span>
                </div>
                <hr className="border-gray-600 my-4" />
                <div className="flex justify-between text-green-500 font-bold">
                  <span>Your profit</span>
                  <span>$ 18</span>
                </div>
              </div>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4">Start selling</button>
              <p className="text-gray-400 text-sm">100% Free to use · 900+ Products · Largest print network</p>
            </div>
            <div>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7ieRujaOVMILCavfmB1mUOva0dXtK1r3GAc803-GKMKYipJ0p"
                alt="Illustration of a person watering a money plant" className="rounded-lg money-tree" />
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="p-20">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="https://printify.com/wp-content/uploads/2021/09/Printify-Snap-Logo-Author.jpg" alt="Printify logo" className="w-10 h-10" />
              <span className="text-green-500 text-2xl font-bold">Printify</span>
            </div>
            <div className="flex space-x-4">
              <i className="fab fa-facebook-f text-green-500 text-xl"></i>
              <i className="fab fa-instagram text-green-500 text-xl"></i>
              <i className="fab fa-linkedin-in text-green-500 text-xl"></i>
              <i className="fab fa-youtube text-green-500 text-xl"></i>
              <i className="fab fa-tiktok text-green-500 text-xl"></i>
              <i className="fab fa-reddit text-green-500 text-xl"></i>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
            <div>
              <h2 className="font-medium mb-4">Integrations</h2>
              <ul className="space-y-2">
                <li>Shopify</li>
                <li>Etsy</li>
                <li>eBay</li>
                <li>Amazon</li>
                <li>TikTok Shop</li>
                <li>PrestaShop</li>
                <li>BigCommerce</li>
                <li>Wix</li>
                <li>WooCommerce</li>
                <li>Squarespace</li>
                <li>Printify API</li>
                <li>Printify Pop-Up Store</li>
                <li>Shutterstock</li>
              </ul>
            </div>
            <div>
              <h2 className="font-medium mb-4">Discover</h2>
              <ul className="space-y-2">
                <li>Blog</li>
                <li>Guides</li>
                <li>Products</li>
                <li>Etsy print-on-demand</li>
                <li>Shopify print-on-demand</li>
                <li>Woocommerce print-on-demand</li>
                <li>Wix print-on-demand</li>
                <li>Squarespace print-on-demand</li>
                <li>Make Your Own Shirt</li>
                <li>Brands</li>
                <li>Pricing</li>
                <li>Shipping Rates</li>
                <li>Mockup Generator</li>
              </ul>
            </div>
            <div>
              <h2 className="font-medium mb-4">Start selling</h2>
              <ul className="space-y-2">
                <li>Custom T-shirts</li>
                <li>Custom Hoodies</li>
                <li>Custom Mugs</li>
                <li>Custom Socks</li>
                <li>Custom Backpacks</li>
                <li>Custom Branding</li>
                <li>Sell on Etsy</li>
                <li>Sell on Social Media</li>
                <li>Free T-shirt Designs</li>
                <li>Custom Products</li>
                <li>Custom All-Over-Print Hoodies</li>
                <li>Start a Clothing Line</li>
                <li>Start POD Business</li>
                <li>Bulk Orders</li>
                <li>Transfering To Printify</li>
              </ul>
            </div>
            <div>
              <h2 className="font-medium mb-4">Printify</h2>
              <ul className="space-y-2">
                <li>Print on Demand</li>
                <li>Print Providers</li>
                <li>Experts Program</li>
                <li>Printify Express Delivery</li>
                <li>Become a Partner</li>
                <li>About</li>
                <li>Printify Quality Promise</li>
                <li>Jobs</li>
                <li>Webinars</li>
                <li>Printing Profits Podcast</li>
                <li>Contact Us</li>
                <li>Affiliate</li>
                <li>Contact Sales</li>
                <li>POD Glossary</li>
                <li>Network Fulfillment Status</li>
                <li>Merchant Protection</li>
                <li>Security</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="left-0 top-1/2 transform -translate-y-1/2">
          <img src="https://printify.com/wp-content/uploads/2021/09/Printify-Snap-Logo-Author.jpg" alt="Company logo" className="rounded-full shadow-lg floating" />
        </div>
      </section>

</div>
  
  )
}

export default MainContent
