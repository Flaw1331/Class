library(tidyverse)

students <-read_csv(".//data/students.csv")
schools <- read_csv("./data/schools.csv")

### Preview tibble
students %>% head()
schools %>% head()

#### Join two tibbles
data2 = left_join(students, schools, by=c("school_name"))
data2 %>% head()

### Total Number of Schools
school_count <- students$school_name %>% 
  unique() %>% 
  length()

school_count

### Total Number of Students
student_count <-  students %>% nrow()
student_count

### Average reading and math scores
mean_reading_score <- summarize(students, mean(reading_score))
mean_math_score <- summarize(students, mean(math_score))

### Calculate the percentage of students with passing reading scores, i.e. over 70%.
percentage_passing_reading <- students %>% 
  filter(reading_score > 70) %>% 
  nrow() * 100 / student_count %>% 
  round(2)

percentage_passing_reading

### Calculate the percentage of students with passing math scores, i.e. over 70%.
percentage_passing_math <-  students %>% 
  filter(math_score > 70) %>% 
  nrow() * 100 / student_count %>% 
  round(2)

percentage_passing_math

### Calculate the overall passing rate, i.e. the average of math and reading passing percentages
overall_passing_rate <- (percentage_passing_math + percentage_passing_reading) / 2
overall_passing_rate

### Calculate the average math and reading scores by school
students %>% 
  group_by(school_name) %>% 
  summarize(avg.reading=mean(reading_score), avg.math=mean(math_score))


### Calculate the average math and reading scores by grade level at each school
students %>% 
  group_by(school_name, grade) %>% 
  summarize(avg.reading=mean(reading_score), avg.math=mean(math_score))

total_budget <- schools %>% 
  summarize(sum(budget))


### Use sapply() to convert data type
total_budget <- total_budget %>% sapply(as.numeric)
mean_math_score <- mean_math_score %>% sapply(as.numeric)
mean_reading_score <- mean_reading_score %>% sapply(as.numeric)

### Display data
paste("School count: ", school_count)
paste("Student count: ", student_count)
paste("Total budget: ", total_budget)
paste("Average reading score: ", mean_reading_score)
paste("Average math score: ", mean_math_score)
paste("% passing reading: ", percentage_passing_reading)
paste("% passing math: ", percentage_passing_math)
paste("Overall passing rate: ", overall_passing_rate)

### Create Tibble of District Summary
### TODO

### Create a per-school summary
### TODO