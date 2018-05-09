df1 <- data_frame(name = c("Tom", "Ted", "Sue", "Frank", "Jim"), 
                  height =c(177, 173, 181, 169, 188), 
                  category =c("A", "F", "L", "A", "I")) 

df2 <- data_frame(name = c( "Amy", "Sue", "Nataly", "Jim"), 
                  weight =c(69, 55, 78, 81))

head(df1); head(df2)

library(dplyr) # the functions are part of dplyr

# Mutating Joins
# Notice below that the Join tells you by="name"
# so you know what you are joining by. It picks this automatically.
# you can change the by. See documentation
?inner_join

inner_join(df1, df2)
inner_join(df1, df2, by="name")

left_join(df1, df2)

right_join(df1, df2)

full_join(df1, df2)

# Filtering Joins. What is in df1 that isn't in df2?
?anti_join
anti_join(df1, df2)

#only get matching rows. I don't get a merge of df2, only rows in df1 that match df2
semi_join(df1, df2)
