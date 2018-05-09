library(tidyverse)
library(plotly)

cotton.tb <- read_tsv("./data/GE_Cotton.tsv")

gathered.cotton.tb <- cotton.tb %>%
  gather(key = Year,
         value = Percent.GMO,
         -c(State, `GMO Type`))
gathered.cotton.tb

ins_resist <- gathered.cotton.tb %>% 
  filter(`GMO Type`=="Insect-resistant (Bt) only")

herb_tol <- gathered.cotton.tb %>%
  filter(`GMO Type`=="Herbicide-tolerant only")

ins_plot <- ins_resist %>%
  plot_ly(x=~Year, 
          y=~Percent.GMO, 
          type='scatter', 
          mode = 'lines+markers', 
          color=~State,
          alpha=0.5,
          legendgroup=~State,
          showlegend=F,
          text="Insect Resistant")
ins_plot

herb_plot <- herb_tol %>%
  plot_ly(x=~Year, 
        y=~Percent.GMO, 
        type='scatter', 
        mode = 'lines+markers', 
        color=~State,
        alpha=0.5,
        legendgroup=~State,
        text="Herbicide Resistant")

subplot(ins_plot, 
        herb_plot, 
        nrows=2, 
        shareX = TRUE) %>%
  layout(title="GMO Cotton by State",
         margin = list(b=55))
