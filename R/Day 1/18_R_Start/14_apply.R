library(tidyverse)


#### Suppose we have a function called `toFahrenheit`, 
#which accepts a temperature in Celsius, `temperature`, 
#and returns that temperature in Fahrenheit.

toFahrenheit <- function(temperature) {
  fahrenheit <- temperature * 1.8 + 32
  return(fahrenheit)
}

#### A list of temperatures in Celsius called `celsius`
celsius <- c(0, -2, 0, 5.2, 5.4)

#### Create a new list, `fahrenheit`, containing the values in `celsius` converted to Fahrenheit.
#### Solution: Valid...But ugly.
fahrenheit <- numeric()
for (i in 1:length(celsius)) {
  temperature_fahrenheit <- toFahrenheit(celsius[i])
  fahrenheit[i] <- temperature_fahrenheit
}
fahrenheit

#### `sapply` provides a succinct alternative.
fahrenheit2 <- sapply(celsius, toFahrenheit)
fahrenheit2
typeof(fahrenheit2)

#### Use `lapply` when you know you need a list, and _not_ a vector.
fahrenheit3 <- lapply(celsius, toFahrenheit)
fahrenheit3

typeof(fahrenheit3)
