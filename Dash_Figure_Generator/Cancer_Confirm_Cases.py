#!/usr/bin/env python
# coding: utf-8
import plotly.graph_objects as go
import pandas as pd
import chart_studio.plotly as py
from plotly.offline import plot
df=pd.read_csv('USCS_OverviewMap.csv')

# Cited: https://plotly.com/python/choropleth-maps/
for col in df.columns:
    df[col] = df[col].astype(str)

df['text'] = 'In '+df['Area'] + 'in 2019, Age-adjusted rate of'+'<br>'+     'new lung cancer cases was ' + df['AgeAdjustedRate']+' per 100,000 people '+'<br>'+'<br>'      + df['CaseCount']+' lung cancer cases were reported'

fig = go.Figure(data=go.Choropleth(
    locations=df['Code'],
    z=df['CaseCount'].astype(int),
    locationmode='USA-states',
    colorscale='Reds',
    autocolorscale=False,
    text=df['text'], # hover text
    marker_line_color='white', # line markers between states
    colorbar_title="Lung Cancer Cases"
))

fig.update_layout(
    title_text='No. of Lung and Bronchus Cancer , All Ages, All Races/Ethnicities, Male and Female by State, 2019',
    geo = dict(
        scope='usa',
        projection=go.layout.geo.Projection(type = 'albers usa'),
        showlakes=True, # lakes
        lakecolor='rgb(255, 255, 255)'),
)

fig.show()
py.sign_in('rajsubedi07', '8tRJLHEgTVaAlUNJWGuy')
py.iplot(fig)
plot(fig, filename= 'CancerCasesInUS.html')