library(tidyr)
library(dplyr)
library(reshape2)

# use line below or import dataset from right... 
# This will create a dplyr data_frame for us.
insects <-read_delim("./data/insects.csv", delim=";")

head(insects)
class(insects)

# rename columns like this:
names(insects) <- c("Region", "<10g", "10-20g", "20-30g", "30-40g", ">40g")
insects

# Wide to long form conversion. See Slides.
insects = gather(data = insects, key = weight, value = counts, -Region)
insects

# order by Region
arrange(insects, Region)


# Seperate - Weight and sex are in the same column. Use Seperate to pull them apart
doubleinfo <- data_frame(
  name = c("Ted", "Pauline", "Vera", "Angela", "Frank", "Pam"),
  biometrics = c("179m", "173f", "174f", "159f", "188m", "163f"),
  measurement = rnorm(6)
)

?separate()

doubleinfo = separate(data=doubleinfo, col=biometrics, into = c("height", "sex"), 3)
doubleinfo

class(doubleinfo)

# Long to Wide Form Conversion. See Slides
perf <- data_frame(
  name = c("Pam", "Pam", "Nick", "Nick", "Kyle", "Kyle"),
  performance = c("top", "low", "top", "low", "top", "low"),
  counts = c(13,4,12,2,9,5)); perf

# We have 2 variables ,the top and low performance, in 1 column
# how do we split a column?
spread(data=perf, key = performance, value = counts)

