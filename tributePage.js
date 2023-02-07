let mjQuotes = [
    "I can accept failure, everyone fails at something. But I can't accept not trying."
    ,"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."
    ,"I'm not out there sweating for three hours every day just to find out what it feels like to sweat."
    ,"If you're trying to achieve, there will be roadblocks. I've had them; everybody has had them. But obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it."
    ,"My attitude is that if you push me towards something that you think is a weakness, then I will turn that perceived weakness into a strength."
    ,"I play to win, whether during practice or a real game."
    ,"I never looked at the consequences of missing a big shot... when you think about the consequences you always think of a negative result."
    ,"I don't want to be compared to anyone. I'm Michael Jordan, I'm unique."
    ,"I'm not a role model... Just because I dunk a basketball doesn't mean I should raise your kids."
    ,"If you do the work you get rewarded. There are no shortcuts in life."
    ,"I can accept failure, everyone fails at something. But I can't accept not trying."
    ,"I have failed over and over and over again throughout my life and that is why I succeed."
    ,"I never took the game of basketball for granted."
    ,"Talent wins games, but teamwork and intelligence wins championships."
    ,"I've always believed that if you put in the work, the results will come."
    ,"Just play. Have fun. Enjoy the game."
    ,"I've always maintained that I could have made it in any sport if I had devoted myself to it."
    ,"The game is my wife. It demands loyalty and responsibility, and it gives me back fulfillment and peace."
    ,"Obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it."
    ,"I never looked at the competition as a threat to my success, but as a challenge to improve."
    ,"If you want to fly, you have to give up the things that weigh you down."
    ,"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do."
    ,"You have to expect things of yourself before you can do them."
    ,"The mental toughness and the will to win is a lot stronger than any skill."
    ,"I was always willing to work hard and learn. That's why I succeeded."
    ,"I'm not saying I'm going to rule the world, or I'm going to change the world, but I guarantee you that I will spark the brain that will change the world."
    ,"Don't let yesterday take up too much of today."
]   


  

    window.onload = function(){ 
    document.getElementById("myButton").addEventListener("click", function() {

    let arrLen = mjQuotes.length

    let quoteIndex = Math.floor(Math.random() * arrLen)
    
    let finalQuote = mjQuotes[quoteIndex]

    document.getElementById("fire").innerHTML = finalQuote;

        });
    }