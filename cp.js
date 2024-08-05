const numbers =["Sachin Tendulkar (India)",
    "Virat Kohli (India)",
    "Rohit Sharma (india)",
    "Brian Lara (West Indies)",
    "Ricky Ponting (Australia)",
    "Sunil Gavaskar (India)",
    "Don Bradman (Australia)",
    "Kumar Sangakkara (Sri Lanka)",
    "Jacques Kallis (South Africa)",
    "Viv Richards (West Indies)",
    "Rahul Dravid (India)",
    "Shane Warne (Australia)",
    "Wasim Akram (Pakistan)",
    "Glenn McGrath (Australia)",
    "Curtly Ambrose (West Indies)",
    "Joel Garner (West Indies)",
    "Malcolm Marshall (West Indies)",
    "Kapil Dev (India)",
    "Imran Khan (Pakistan)",
    "Shoaib Akhtar (Pakistan)",
    "Anil Kumble (India)",
    "Garfield Sobers (West Indies)",
    "Ian Botham (England)",
    "Kapil Dev (India)",
    "Jacques Kallis (South Africa)",
    "Ben Stokes (England)",
    "Hardik Pandya (India)",
    "Rvindra Jadeja (India)",  
    "Adam Gilchrist (Australia)",
    "MS Dhoni (India)",
    "Kumar Sangakkara (Sri Lanka)",
    "Rodney Marsh (Australia)",
    ]

function getRandomNumber(){
    let number = numbers[Math.floor(Math.random() *numbers.length)]
    document.getElementById("box-container").textContent = number
}

genrateRandomNumber = () =>{
    return Math.floor(Math.random()*emojis.length);

}
genrateBtn.addEventListener("box-container", () =>{
    emoji.textContent = emojis[genrateRandomNumber()];
})