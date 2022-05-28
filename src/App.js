import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import PlacesList from "./components/PlacesList"

function App() {  
    return (
        <div>
            <Navbar />
            <div className="container">
              <div className="card-container">
                <Card 
                  title =  "Gosaikunda"
                  location =  "Nepal"
                  googleMapsUrl =  "https://goo.gl/maps/4iWukFt6NeWMYbwa7"
                  startDate =  "12 Mar, 2022"
                  endDate =  "24 May, 2022"
                  description =  "Gosaikunda, also spelled Gosainkunda and Gosain Kunda, is an alpine freshwater lake in Nepal's Langtang National Park, located at an elevation of 4,380 m in the Rasuwa District with a surface of 34 acres."
                  imageUrl =  "https://www.nepalglaciertreks.com/uploads/blog/gosaikunda-lake.jpg"
                />
                <hr />
                <Card
                  title =  "Geirangerfjord"
                  location =  "Norway"
                  googleMapsUrl =  "https://goo.gl/maps/1DGM5WrWnATgkSNB8"
                  startDate =  "01 Oct, 2022"
                  endDate =  "18 Nov, 2022"
                  description =  "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
                  imageUrl =  "https://source.unsplash.com/3PeSjpLVtLg"
                />
                <hr />
                <Card
                  title =  "Sydney Opera House"
                  location =  "Australia"
                  googleMapsUrl =  "https://goo.gl/maps/1DGM5WrWnATgkSNB8"
                  startDate =  "27 May, 2022"
                  endDate =  "8 Jun, 2022"
                  description =  "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
                  imageUrl =  "https://source.unsplash.com/JmuyB_LibRo"
                />
              </div>
              <PlacesList />
            </div>
        </div>
    )
}

export default App