library(tidyverse)
### Read CSV file

# Set your working directory by using the File tab on the right -> Click on the More Icon 
# and choose "Set as Working Directory".

# OR use the import dataset on the right (From Text (readr))
students <-read_csv("./data/students.csv")
head(students)

### A list of all schools
# unique(dataset, variable) displays unique elements from that column
unique(students$school_name)

### Calculate the total count of schools
school_count <- unique(students$school_name)
# Use length() to identify the number of schools
length(school_count)
paste("There are", length(school_count), "schools")

#########################################
### Calculate the total number of students
# nrow() returns the number of rows
nrow(students)

### Calculate the average reading and math scores
summarize(students, mean(math_score), mean(reading_score))

### Calculate the percentage of students with passing reading scores, i.e. over 70%.

### Calculate the percentage of students with passing math scores, i.e. over 70%.

### Calculate the overall passing rate, i.e. the average of math and reading passing percentages

### Calculate the average math and reading scores by school

### Calculate the average math and reading scores by grade level at each school
