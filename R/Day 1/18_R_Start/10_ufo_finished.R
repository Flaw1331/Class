# UFOs R Here

## Instructions

# Use R to perform data analysis on UFO sightings.
#* Perform the following operations:

library(tidyverse)
ufo <- read_csv("./data/ufo.csv")

ufo %>% head()

# * Find the total number of UFO sightings
ufo %>% count()

# * Display a list of states, provinces, and territories in the data set
length(ufo$state %>% unique())

# * Display the average duration of UFO sightings by state
ufo %>% 
  group_by(state) %>% 
  summarise(avg.duration = mean(`duration (seconds)`)) %>% 
  arrange(desc(avg.duration)) 

#* Display the number of UFO sightings by state
ufo %>% 
  group_by(state) %>% 
  summarise(number.sightings = n()) %>% 
  arrange(desc(number.sightings))

# * Display the number of sightings of each reported UFO shape
ufo %>% 
  group_by(shape) %>% 
  summarise(shape.count = n()) %>% 
  arrange(desc(shape.count))

