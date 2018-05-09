
# Load the ggplot2 package
library(ggplot2)

# Create a data frame
df <- data.frame(
    Name = c("a", "b", "c"),
    Value = c(1, 2, 3))

# Plot with defaults
ggplot(
    data = df, 
    aes(
        x = Name, 
        y = Value)) +
    geom_point()

# Plot with parameters
ggplot(
    data = df, 
    aes(
        x = Name, 
        y = Value)) +
    geom_point() +
    ggtitle("Hello World") +
    xlab("Name") +
    ylab("Value")

# Create a bar chart
ggplot(
    data = df, 
    aes(
        x = Name, 
        y = Value)) +
    geom_bar(
        stat = "identity", 
        fill = "skyblue") +
    ggtitle("Hello World") +
    xlab("Name") +
    ylab("Value")


#  specify stat = “identity” for the y values
# By default, geom_bar uses stat="count" which makes the 
# height of the bar proportion to the number of cases 
# in each group (or if the weight aethetic is supplied, 
# the sum of the weights). If you want the heights of the bars to 
# represent values in the data, use stat="identity" and map a variable to the y aesthetic.

# View the help files
# https://www.rstudio.com/wp-content/uploads/2015/03/ggplot2-cheatsheet.pdf
?ggplot

?aes

?geom_bar

?ggtitle
