const express = require('express');
const cors = require('cors')

const app = express();

const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is ok')
});

app.put('/', (req, res) => {
    const headers = {
        'Content-Type': req.header('Content-Type'),
        'Authorization': 'Bearer 00DDn00000CWx9u!AQ4AQO5AhW0bE9Y.gINpVSKInKzuz_yv83rXQ2avozZSgfX71y1wrivxiWQ9csRZ7T.x3L0SoWb32veNUUoIIksDxALh07xW'

    }
    console.log(req.body);

    const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(req.body)
    };

    fetch(req.query.url, requestOptions).then((response) => 
    {
        console.log(response)
         res.send(JSON.stringify(response));
        });
})


app.listen(port, () => {
    console.log('Port is Ok');
})