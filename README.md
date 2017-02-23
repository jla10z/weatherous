This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent guide for Create React App [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Weatherous 

**Application Uses...**

```
  Open Weather Maps API
  Google Maps API
  Sparkline Charts
  Redux
```

**What does Weatherous do?**

It takes city, state from user input
and finds the nearest match within the
United States. Then, displays a map
of the city and a 5-day average weather forecast consisiting of the temperature,
atmospheric pressure, and humidity.

**How does it do this?**

The query from the user is used as a request to the Open Weather Map API. The
response is then stored in the application state of the program. 

Latitude and longitude are then pulled from this data and used to request a Google map of the area. 

Other weather data is then injected into Sparkline charts for graphical interpretations of the data.
