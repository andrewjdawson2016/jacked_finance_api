const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000));

const models = [
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc70",
    name: "Rental Property",
    description: "Understand how a rental property is expected to do over time. Build projections of cash flow, equity and networth."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc71",
    name: "Refinance",
    description: "Understand what goes into a refinanace of a property. Understand if its a good time or not to refinanace."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc72",
    name: "MBA Cost",
    description: "Understand the cost of an MBA across different Universities. Understand the true opporunity of getting an MBA."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc73",
    name: "Rental Property",
    description: "Understand how a rental property is expected to do over time. Build projections of cash flow, equity and networth."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc74", // TODO: these IDs will come from mongodb on backend side of things
    name: "Refinance",
    description: "Understand what goes into a refinanace of a property. Understand if its a good time or not to refinanace."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc75",
    name: "MBA Cost",
    description: "Understand the cost of an MBA across different Universities. Understand the true opporunity of getting an MBA."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc76",
    name: "Rental Property",
    description: "Understand how a rental property is expected to do over time. Build projections of cash flow, equity and networth."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc77",
    name: "Refinance",
    description: "Understand what goes into a refinanace of a property. Understand if its a good time or not to refinanace."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc78",
    name: "MBA Cost",
    description: "Understand the cost of an MBA across different Universities. Understand the true opporunity of getting an MBA."
  },
]

app.get('/', function (req, res) {
  res.json(models)
})

app.get('/hello', function (req, res) {
  res.json({"hello": "world"})
})

app.get('/world', function (req, res) {
  res.json({"world": "hello"})
})

app.listen(app.get('port'), () => console.log('Node app is running on port', app.get('port')));
