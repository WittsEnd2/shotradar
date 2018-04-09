# ShotRadar
## Inspiration
With the recent mass shooting events that are occurring throughout the United States, we wanted to help keep people safe and know what to do during this event. We realize that there is not much training that is occurring, and even if someone is trained in a situation, there is generally a fight or flight response due to panic. Therefore, this app will give advice based on the location of the shooter and where they are in a building. 

## What it does
Currently what the app does is determine the last possible location of their suspect based on sound wave frequency analysis and amplitude of the sound wave. The person whom the app would detect as a suspect would be someone who clapped their hand, and it would say which device it came from. 

## How we built it
We wrote the sound wave analysis tool in JavaScript. If a positive match was met, it would then communicate with our server that we built in Node.js to send to all device which device heard the suspect last. This was able to be accomplished with socket.io and Ajax.  We used HTML and CSS to display the content on a webpage. 

## Challenges we ran into
Initially, we tried to use geolocation in order to get an exact location of where the suspect could be; however, during the middle of Bitcamp, the network had to be reset; thus, forcing the geolocation to proxy to California. This was also the same occurrence for LTE (even though we have no idea why this is the case). As a result, we had to create a solution quickly in order to present at the end of Bitcamp (which is our current solution). 

## Accomplishments that we're proud of
We are most proud of sticking through until the end, even though we had many problems throughout the entire hackathon. 

## What we learned
Along with all of the new coding skills, we were able to learn about how sound waves work at a deeper level because this project required us to analyze the sound wave of a clap for our mapping functionality to work. We also learned about ShotSpotter and how we can create a solution that targets an issue unsolved (saving lives when mass shootings occur in buildings). 

## What's next for Shotradar
Since we decided to do the venture trail for Bitcamp, what we are going to do next is determine if our business model is sound. When pitching to potential clients, we would tailor the map to their building so that our application can be as effective as possible. If it is confirmed, we would create a version of the application where Geolocation works and uses machine learning to become better over time. 

## Demo

- http://ter.ps/location
To reset the app on the server side: https://floating-gorge-79216.herokuapp.com/reset

### We will also see determine if there are other use cases for the app because we see the geolocation being useful for natural disaster relief and preparation. 