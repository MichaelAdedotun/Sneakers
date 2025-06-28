
const express = require('express')
const cors = require('cors')
const productRoutes = require('./routes/products')

const app = express()
app.use(cors())  // This allows frontend requests
app.use(express.json())

app.use('/images', express.static('public/images'))

// routes
app.use('/api/products', productRoutes)

// start server
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
