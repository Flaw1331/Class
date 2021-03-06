
# A tibble for a dataframe can be formed a number of different ways
# By supplying vectors to column names

call.centers.tb <- 
  tibble(
    City = c(
      "Dhaka",
      "Franklin",
      "Dublin",
      "Stuttgart"
    ),
    Country = c(
      "Bangladesh",
      "United States",
      "Ireland",
      "Deutschland"
    ),
    Population = c(
      14400000,
      74794,
      527612,
      612441 
    ),
    Square.Miles = c(
      118.3,
      30.12,
      44.4,
      80.06
    ),
    Population.Density = Population/Square.Miles,
    Employees.Needed = Population.Density/1000
  )

#> By supplying the headers and the columns manually

market.research.tb <- frame_data(
  ~Group, ~Interest, ~Show.Interest.Types, ~Age.Range, ~Retention,
  "A", "Low", c("animated", "comedy", "drama"), "14-17", 0.12,
  "B", "High", c("action", "suspensful", "edgy"), "18-35", 0.87,
  "C", "Medium", c("current events", "reality", "crime", "mystery"), "36-65", 0.37,
  "D", "Low", c("current events", "crime", "thriller"), "66-99", 0.01
)

#> By reading in the data
# Note: The message generated by `read_tsv` can  be supressed with `message=FALSE` in the header

simple.data.tb <- read_tsv("./data/simpledata.tsv")
