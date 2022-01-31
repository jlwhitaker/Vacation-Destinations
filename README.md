# I haven't been everywhere, but it's on my list!

## Background 

After nearly two years spent living through a pandemic, many cautious would-be travellers are wondering where it is safe to go. And not only that, but where are we allowed to go and with what restrictions? There were already so many factors to consider when planning a trip, and now it has become exponentially more complicated.

Our team wanted to provide a comprehensive travel exploration dashboard for these individuals where their various concerns could be visualized all at once (as opposed to traversing the depths of the internet until all of a sudden you're 20 tabs deep!). Our dashboard includes information regarding COVID-19 rates, weather, tourist attractions, and quick access to travel restrictions and fight information via the use of widgets. 

## Process 

We started by keeping it simple - What are the top destinations for travel within the US? We scraped this information from an article provided by [Expedia](https://viewfinder.expedia.com/top-rated-vacation-destinations-in-north-america/) using BeautifulSoup. Once that information was collected, we were able to use that to narrow down information to scrape from the [US Climate Website](https://www.usclimatedata.com/) and the Google Places API. All this data was then loaded into a MongoDB database and then loaded into the website using a Flask API. 

## Dashboard

The final dashboard is website where the primary feature is an interactive leaflet map. The map provides multiple layers which can be turned on and off including:
  * heat maps for the average temperature in a city, by month
  * map visualization for cumulative COVID-19 caseload
  * pop-up markers for the top 20 tourist attractions in a city

