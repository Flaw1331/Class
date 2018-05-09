# Working with Data

# Read a tab-delimited data file data/cars.csv
cars <- read_tsv("./data/cars.csv")

class(cars)
head(cars)

# Load the dplyr library
library(dplyr)

# Select a subset of columns
temp <- select(
  .data = cars, 
  Transmission,
  Cylinders,
  Fuel.Economy)

temp2 <- select(
  cars,
  Transmission,
  Cylinders,
  Fuel.Economy)

# Inspect the results
head(temp)
head(temp2)

# Filter a subset of rows
temp <- filter(
  .data = temp, 
  Transmission == "Automatic")

# Inspect the results
head(temp)

# Compute a new column
temp <- mutate(
  .data = temp, 
  Consumption = Fuel.Economy * 0.425)

# Inspect the results
head(temp)

# Group by a column
temp <- group_by(
  .data = temp,  
  Cylinders)

# Inspect the results
head(temp)

# Aggregate based on groups
temp <- summarize(
  .data = temp, 
  Avg.Consumption = mean(Consumption))

# Inspect the results
head(temp)

# Arrange the rows in descending order
temp <- arrange(
  .data = temp, 
  desc(Avg.Consumption))

# Inspect the results
head(temp)

# Convert to data frame
efficiency <- as.data.frame(temp)

# Inspect the results
print(efficiency)

# Chain methods together
efficiency <- cars %>%
  select(Fuel.Economy, Cylinders, Transmission) %>%
  filter(Transmission == "Automatic") %>%
  mutate(Consumption = Fuel.Economy * 0.425) %>%
  group_by(Cylinders) %>%
  summarize(Avg.Consumption = mean(Consumption)) %>%
  arrange(desc(Avg.Consumption)) %>%
  as.data.frame()

# Inspect the results
print(efficiency)

# Save the results to a CSV file
write.csv(
  x = efficiency,
  file = "Fuel Efficiency.csv",
  row.names = FALSE)



# Create a frequency table
table(cars$Transmission)

# Get the minimum value
min(cars$Fuel.Economy)
min(cars['Fuel.Economy'])


# Get the maximum value
max(cars$Fuel.Economy)

# Get the average value
mean(cars$Fuel.Economy)

# Get the median value
median(cars$Fuel.Economy)

# Get the quartiles
quantile(cars$Fuel.Economy)

# Get the standard deviation
sd(cars$Fuel.Economy)

# Get the total value
sum(cars$Fuel.Economy)

# Get the correlation coefficient
cor(
  x = cars$Cylinders,
  y = cars$Fuel.Economy)

# Summarize an entire table
summary(cars)