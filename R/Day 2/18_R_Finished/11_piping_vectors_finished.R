library(tidyverse)
set.seed(101010)

pet.ages <- c(13.4542,12.783386,1.185,4.22226,22.3232,6.76546,7.9343,2.4872,4.1,6.3232,10.2324567,11.436,11.1307,5.0436,25.3477,2.24774,17,33,2.0765,3.51361,12.2356,77.354)

# Simplify
# Unnest the function below into a piped form
round(mean(pet.ages),3)

# TODO: Your Code Here
pet.ages %>%
  mean() %>%
  round(3)


# Use Logic
mammals <-read_csv("./data/mammals.csv")
head(mammals)

# Use function piping, find all the species with an adult_body_mass_g of less
# than 3 grams and arrange them by descending adult_body_mass_g
 mammals %>%
  filter(adult_body_mass_g < 3) %>%
  arrange(desc(adult_body_mass_g)) 
  


# Using function piping, find the sum of the mass of all animals with adult_body_mass_g less than 50
mammals %>%
  filter(adult_body_mass_g < 50) %>%
  summarize(Total = sum(adult_body_mass_g))

