library(tidyverse)
minerals.tb <- read_csv("./data/Minerals.csv")

minerals.tb %>% 
  head()

minerals.tb %>% 
  tail(5)

minerals.tb %>%
  print(n=100)

# Select column names
minerals.tb %>%
  select(Major.Min.Comp, Appraisal)

# Omit by column name
minerals.tb %>%
  select(-Mass)

# Select by index
minerals.tb %>%
  select(1:2,4:5)

# Omit by index
minerals.tb %>%
  select(-(1:2))

minerals.tb %>% 
  select(starts_with("Major"), ends_with("Comp2"))

minerals.tb %>%
  select(-contains("Minor"))

minerals.tb %>%
  select(contains("Min"), Ore.Mass = Mass, Ore.Value = Appraisal)

minerals.tb %>%
  rename(Ore.Value = Appraisal)

minerals.tb

# Assigned and reassigned to variables
less.min.tb <- select(minerals.tb, contains("Min"), Ore.Mass = Mass, Appraisal)
less.min.tb <- filter(less.min.tb, Major.Min.Comp == "DIAMOND")
less.min.tb <- filter(less.min.tb, (Minor.Min.Comp1 == "PERIDOT") | (Minor.Min.Comp2 == "PERIDOT"))
less.min.tb

# Run as one long nested set of functions
filter(filter(select(minerals.tb, contains("Min"), Ore.Mass = Mass, Appraisal), Major.Min.Comp == "DIAMOND"), 
       (Minor.Min.Comp1 == "PERIDOT") | (Minor.Min.Comp2 == "PERIDOT"))

minerals.tb %>%
  select(contains("Min"), Ore.Mass = Mass, Appraisal) %>%
  filter(Major.Min.Comp == "DIAMOND") %>%
  filter((Minor.Min.Comp1 == "PERIDOT") | (Minor.Min.Comp2 == "PERIDOT"))

minerals.tb %>%
  select(contains("Min"), Ore.Mass = Mass, Appraisal) %>%
  filter(((Minor.Min.Comp1 == "GEODES") & (Minor.Min.Comp2 == "ICE")) | 
           ((Minor.Min.Comp1 == "ICE") & (Minor.Min.Comp2 == "GEODES")))

minerals.tb %>%
  select(contains("Min"), Ore.Mass = Mass, Appraisal) %>%
  filter(Major.Min.Comp %in% c("DIAMOND", "SILVER", "PLATINUM") | 
           Minor.Min.Comp1 %in% c("DIAMOND", "SILVER", "PLATINUM") | 
           Minor.Min.Comp2 %in% c("DIAMOND", "SILVER", "PLATINUM"))
