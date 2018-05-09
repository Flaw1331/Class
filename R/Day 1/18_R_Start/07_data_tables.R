set.seed(72)
# Data_frame
library(dplyr)
mydf = data_frame(a = c("Paul", "Kim", "Nora", "Sue", 
                         "Paul", "Kim"), 
                   b = c("A", "A", "B", "B", "B", "C"),
                   c = rnorm(6))
mydf

# data.table
library(data.table)
mytable = data.table(a = c("Paul", "Kim", "Nora", "Sue", 
                           "Paul", "Kim"), 
                     b = c("A", "A", "B", "B", "B", "C"),
                     c = rnorm(6))
mytable


head(mydf)
# sapply gives the typeof for each column
sapply(mydf, class)
class(mydf)

# the data.table correctly used 'character' for strings
head(mytable)
sapply(mytable, class)
class(mytable)


# rows
mydf[3,]
mytable[3,]

# what is the default extract when using simple box brackets?
mydf[3]

# data.table - first position always the row
mytable[3]
# data_frame extracts columns, data.table rows

# columns: extraction in different form, column or vector
mydf[3]; 
mydf[,3]

mytable[,3] # dt output
mytable[,c] # use the column name, this is paramater j of dt syntax
class(mytable[,c])

class(mytable[,.(c)]) # in this notation you will get a dt as ouput again
mytable[, list(c)] # gives the same output, . and list are aliases

mytable[,.(cname = c)] # same command but renaming the column

mytable[, sum(b == "B")] # how many rows with "B"?
# with a dt we can do calculations in parameter j

# see http://brooksandrew.github.io/simpleblog/articles/advanced-data-table/
mytable[b =="B", .N] # an alternative way with .N as number indicator
length(mydf[mydf$b == "B",]) # doing it the old data.frame way

# selecting all rows with character A in col b
mytable[b == "A",]
subset(mytable, b =="A") # same result with the subset command
subset(mytable, b =="A", select = a) # use select for a specific column
mydf[mydf$b == "A",] # the name of the df needs to be stated here


### Keys

# set a key (at column a) to organize the table
mytable # note the order of col a

setkey(mytable, a)
mytable # now the dataset is ordered alphabetically according to a 

key(mytable) # lets check which column the key is at

mytable["Kim"] # now we can directly get access to rows by calling row values

mytable["A"] # this is only possible in the key column

mytable[c("Kim", "Paul")] # of course we can get several key-values in a vector

mytable["Kim", .(c)] # lets now add the j parameter - here I am stating that
# I only want column c as an output on "Kim", and it should be a data.table
# therefore the list alias

mytable["Kim", c] # without the list alias we only get a vector




### Querying a big dataset

library(ggplot2) # for diamonds

library(data.table)

?diamonds

newdiam = data.table(diamonds); class(newdiam)

newdiam

summary(newdiam)


# 2 different ways how to find out how many diamonds >10000 in price

# how many diamonds >10K in price, sorted by color

# table with diamonds cut = "Idea" and the color is either "E" or "J"

# order the table by price

# extract a table with price and cut

# how many diamonds have combined xyz dimensions (sum) of > 18 ?

# get the mean price for diamonds with a cut of "Ideal" and "Premium"

# get the number of diamonds with a price >10000 and a cut of "Premium"


