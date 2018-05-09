

# * `data(diamonds, package='ggplot2')`: the `data()` function loads data sources. 
# `diamonds` is a sample data set that comes with `ggplot2`, a plotting package for R.

#install.packages('ggplot2')
library('ggplot2')
diamonds

# notice it's in the tidyverse / dplyr dataframe form that we want.
# This is the data_frame 
class(diamonds)

# The `mutate()` function adds a new columnar variable to the tibble.
total.volume2 <- mutate(diamonds, total.volume=(x*y*z))

# Unlike Python/Javascript R allows the use of periods/dots 
# in regular variable names:
total.volume2

test.slice <- slice(diamonds, 1:7)
test.slice

# calculate number of rows
nrow(diamonds)

# Select row 3
slice(diamonds, 3)

# Select rows 1 and 7
slice(diamonds, c(1,7))

### Select columns. First argument is the data set
select(diamonds, carat, price)

### Filter data
filter(diamonds, cut=='Ideal')

### Multiple conditions
filter(diamonds, (cut=='Ideal' & price > 500))

### Display the mean of a column
summarize(diamonds, mean(price))

### Group diamonds by cut
cut <- group_by(diamonds, cut)
summarize(cut, mean(price), sum(price))

### A summary, grouped by cut, displaying average price and count.
summarize(cut, avg=mean(price),number=n())

### Group by multiple columns
cut2 <- group_by(diamonds, cut, color)
cut2_summary <- summarize(cut2, mean(price))
cut2_summary

### Count the number of diamonds by cut
count(diamonds, cut)

