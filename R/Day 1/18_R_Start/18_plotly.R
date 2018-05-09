library(tidyverse)
library(knitr)
library(plotly)

resistant.tb <- read_tsv("./data/Herbicide_resistant_soybeans.tsv")
resistant.tb %>% head()

gathered.res.tb <- resistant.tb %>%
  gather(Year, Percent.GE.Soybean, -State)
gathered.res.tb

write.csv(gathered.res.tb, "soybeans.csv")

gathered.res.tb %>%
  plot_ly(x=~Year, 
          y=~Percent.GE.Soybean, 
          type='scatter', 
          mode = 'lines+markers', 
          color=~State,
         # alpha=0.5,
          text=~paste("Year: ", Year, "<br>",
                      "Percent GE Soybean: ", Percent.GE.Soybean, "<br>",
                      "State: ", State))
?plot_ly
