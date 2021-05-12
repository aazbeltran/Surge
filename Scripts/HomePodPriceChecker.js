const cachedPrice = $persistentStore.read()

$httpClient.get('https://www.costco.com.mx/Electronicos/Apple/Accesorios-y-Audio-Apple/Apple-HomePod-Gris-Espacial/p/654787', function (error, response, data) {
    if (error) {
        console.log(error)
        $notification.post('HomePod Pricer', 'Ocurrió un error')
        $done()
    } else {
        const regex = /product:price:amount" content="([^"]+)/
        const result = regex.exec(data)
        if (result === null) {
            const msg = `Meta tag del precio inexsistente`
            console.error(msg)
            $notification.post('HomePod Pricer', '', msg)
            $done()
            return
        }
        const [, price] = result
        const formattedPrice = priceFormatter(price)

        if (cachedPrice === price) {
            console.log(`El precio del homepod continúa siendo ${formattedPrice}.`, currentDate())
            $done()
            return
        }

        const msg = `El precio del homepod cambió, ahora es ${formattedPrice}`
        $notification.post('HomePod Pricer', '', msg)
        console.log(msg, currentDate())
        $persistentStore.write(price)
        $done()
    }
})

const priceFormatter = price => '$' + parseFloat(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
const currentDate = () => (new Date()).toLocaleString()