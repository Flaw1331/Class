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
student_count <-  nrow(students)
paste("There are a total of", student_count, "students.")

### Calculate the average reading and math scores
mean_reading_score <- summarize(students, mean(reading_score))
paste("The average reading score is", mean_reading_score)

mean_math_score <- summarize(students, mean(math_score))
paste("The average math score is", mean_math_score)

### Calculate the percentage of students with passing reading scores, i.e. over 70%.
passing_reading <- filter(students, reading_score > 70)
passing_reading_count <- nrow(passing_reading)
percentage_passing_reading <- passing_reading_count*100 / student_count
percentage_passing_reading <- round(percentage_passing_reading,2)

paste(percentage_passing_reading, "% of the students have passing reading scores.")

### Calculate the percentage of students with passing math scores, i.e. over 70%.
passing_math <- filter(students, math_score > 70)
passing_math_count <- nrow(passing_math)
percentage_passing_math <- passing_math_count*100 / student_count
percentage_passing_math <- round(percentage_passing_math, 2)

paste(percentage_passing_math, "% of the students have passing math scores.")

### Calculate the overall passing rate, i.e. the average of math and reading passing percentages
overall_passing_rate <- (percentage_passing_math + percentage_passing_reading) / 2
overall_passing_rate

### Calculate the average math and reading scores by school
school_grouping <- group_by(students, school_name)
summarize(school_grouping, avg.reading=mean(reading_score), avg.math = mean(math_score))

### Calculate the average math and reading scores by grade level at each school
grade_grouping <- group_by(students, school_name, grade)
summarize(grade_grouping, avg.reading=mean(reading_score), avg.math=mean(math_score))
