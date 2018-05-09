library(dplyr)

# this is:
# Jones, K.E., et al. PanTHERIA: a species-level database of life history,
#     ecology, and geography of extant and recently extinct mammals. 
#  Ecology 90:2648. http://esapubs.org/archive/ecol/E090/184/


mammals <-read_csv("./data/mammals.csv")
head(mammals)

# gives a list of structure. Notice the species lists, etc.
glimpse(mammals)
?glimpse

select(mammals, adult_head_body_len_mm)
select(mammals, adult_head_body_len_mm:litter_size)
select(mammals, contains("body"))
select(mammals, 1:3)

# subset of rows
filter(mammals, adult_body_mass_g > 1e7)[ , 1:3]
filter(mammals, order == "Carnivora" & adult_body_mass_g < 200)

summarise(mammals, mean_mass = mean(adult_body_mass_g, na.rm = TRUE))

# Pipes

# Pipes take the output from one function and feed it to the first argument of the
# next function. You may have encountered the Unix pipe | before.

# The R language allows symbols wrapped in % to be defined as functions,
# the > implies a chain

# If it's hard to think about try pronouncing %>% as  “then” whenever you see it.
# help fo pipes is there, but you have to wrap it in backticks
?`%>%`

x <- rnorm(10)
# this is the same as 
x %>% max
# this
max(x)

# this one
mammals %>% arrange(adult_body_mass_g)
# same as
arrange(mammals, adult_body_mass_g)

# Gets useful for this type of thing:
mammals %>%
  mutate(mass_to_length = adult_body_mass_g / adult_head_body_len_mm) %>%
  arrange(desc(mass_to_length)) %>%
  select(species, mass_to_length)

# uglier without pipes!
select(
  arrange(
    mutate(mammals,
           mass_to_length = adult_body_mass_g / adult_head_body_len_mm),
    desc(mass_to_length)),
  species, mass_to_length)

# What taxonomic orders have a median litter size greater than 3.
mammals %>% group_by(order) %>%
  summarise(median_litter = median(litter_size, na.rm = TRUE)) %>%
  filter(median_litter > 3) %>%
  arrange(desc(median_litter)) %>%
  select(order, median_litter)