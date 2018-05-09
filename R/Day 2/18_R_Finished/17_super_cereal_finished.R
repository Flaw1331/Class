library(tidyverse)

# TODO: Read `./data/cereals.csv`
cereal.tb <- read_csv("./data/cereals.csv")

# TODO: Extract all columns except `rating` and those ending in `ium`
cereal2.tb <- cereal.tb %>%
  select(-rating, -contains("ium"))
cereal2.tb

# TODO: Filter all rows with `type` equal to `"H"`
cereal2.tb %>%
  filter(type=="H")

# TODO: Filter all rows with `mfr` equal to `"A"`, `"N"`, `"Q"`, or `"R"`
cereal2.tb %>%
  filter(mfr %in% c("A", "N", "Q", "R"))

# TODO: Filter all rows with `calories` greater than 100 and fiber greater than or equal to 3
cereal2.tb %>%
  filter(calories < 100 & fiber >= 3)

# TODO: Filter all rows with `sugars` greater than 11 or fat greater than 3
cereal2.tb %>%
  filter(sugars > 11 | fat > 3)







