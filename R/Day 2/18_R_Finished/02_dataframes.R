# The Three Flavors of DataFrames

# data.frame. The Base R package.
mydata.frame = data.frame(name = c("Paul", "Kim", "Nora", "Sue", "Pat", "Kyle"),
                          counts = c(3,5),
                          measurement=rnorm(6))
mydata.frame
class(mydata.frame)

# Factors are categorical variables. It automatically tries to use these, but you dont want this.
mydata.frame = data.frame(name = c("Paul", "Kim", "Nora", "Sue", "Pat", "Kyle"),
                          counts = as.integer(c(3,5)),
                          measurement=rnorm(6),
                          stringsAsFactors=F)
mydata.frame


# Data.table. From the data.table package
# Notice that we get strings as factors as False by default.

library(data.table)
mytable = data.table(name = c("Paul", "Kim", "Nora", "Sue", "Pat", "Kyle"),
                          counts = as.integer(c(3,5)),
                          measurement=rnorm(6))
mytable
class(mytable)

# * Tibbles are not available in standard R, 
# are enabled by `dplyr` or `tidyverse`.
# They are generally superior to R's standard data frame.
library(dplyr)
my_dataframe = data_frame(name = c("Paul", "Kim", "Nora", "Sue", "Pat", "Kyle"),
                          counts = as.integer(c(3,5)),
                          measurement=rnorm(6))
my_dataframe
# This errors out^. Notice that columns must be of equal length. No recycling occurs.

my_dataframe = data_frame(name = c("Paul", "Kim", "Nora", "Sue", "Pat", "Kyle"),
                          counts = as.integer(c(3,5,1,6,4,6)),
                          measurement=rnorm(6))
# * For our purposes, a `tibble` (a word play on "table"), is a data frame.
my_dataframe

class(mydata.frame)
class(mytable)
class(my_dataframe)