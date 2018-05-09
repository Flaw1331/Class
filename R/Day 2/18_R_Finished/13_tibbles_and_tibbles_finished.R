#### Dependency
library(tidyverse)

#### Create a Tibble by columns
cart_rental.tb <- 
  tibble(
    name = c(
      'George',
      'Martha',
      'John',
      'Abigail'
    ),
    current_age = c(
      12, 11, 10, 7
    ),
    years_left = (25 - current_age)
  )
cart_rental.tb

#### Create a Tibble by rows
reliable_cars.tb <- frame_data(
  ~Brand, ~Least.Reliable.Model, ~Avg.Reliability.Score,
  "Toyota", "Tacoma", "80",
  "Lexus", "GX", "77",
  "Kia", "Sportage", "71",
  "Audi", "A7", "68",
  "BMW", "i3", "62"
)
reliable_cars.tb

#### Add a row to a Tibble
cart_rental.tb <- add_row(cart_rental.tb, name="Thomas", current_age=15, years_left=25-current_age)
cart_rental.tb

#### Add a column to a Tibble
reliable_cars.tb <- reliable_cars.tb %>% add_column(Rank=1:5)
reliable_cars.tb

#### Rearrange the columns of a Tibble
reliable_cars.tb <- reliable_cars.tb[c(4,1,2,3)]
reliable_cars.tb

