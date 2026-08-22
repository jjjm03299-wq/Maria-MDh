const fs = require('fs')
const chalk = require('chalk')
const readline = require('readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function loadOwnerConfig() {
    console.log(chalk.yellow('=== OWNER CONFIGURATION SETUP ==='))
    
    let inputNumber = await question(chalk.green('Enter your owner WhatsApp number (e.g., 919931122319): '))
    inputNumber = inputNumber.replace(/[^0-9]/g, '')
    
    let inputName = await question(chalk.green('Enter your owner name: '))
    
    rl.close()

    //contact details
    global.ownernomer = inputNumber || ""
    global.ownername = inputName || ""
    global.ytname = "YT: AyushBotz.inc"
    global.socialm = "GitHub: Ayushpandey023"
    global.location = "Indian"

    global.ownernumber = inputNumber || ""  //creator number
    global.ownername = inputName || "" //owner name
    global.botname = '𝐌𝐀𝐑𝐈𝐀-𝐌𝐃' //name of the bot

    //sticker details
    global.stickername = '💙𓆩‎✘AʏᴜSʜ✘𓆪_✰'
    global.packname = 'Sticker By'
    global.author = 'Maria Bot'
    //console view/theme
    global.themeemoji = '🧩'
    global.wm = "Ayush botz inc."

    //theme link
    global.link = '' // if you want to send bot reply with group link then put your link here 🌿 
    global.support = 'https://chat.whatsapp.com/DYp7FwfL9xsKURihcdT0l8'
    //custom prefix
    global.prefa = ['.'] //put here your fav prefix like +×÷= etc.

    //false=disable and true=enable
    global.autoRecording = false //auto recording
    global.autoTyping = false //auto typing
    global.autorecordtype = false //auto typing + recording
    global.autoread = true //auto read messages
    global.autobio = false //auto update bio
    global.anti92 = true //auto block +92 
    global.autoread_status = true //auto view status/story

    //reply messages
    global.mess = {
        done: 'Done !',
        pm: ' 📍*sorry darling* Bot wont work in private darling📍 \n\n https://chat.whatsapp.com/FoS7pSPtfMqBuoireK4aAJ',
        prem: 'This feature can be used by premium user only',
        admin: 'This feature can be used by admin only',
        botAdmin: 'This feature can only be used when the bot is a group admin ',
        owner: 'This feature can be used by owner only',
        group: 'This feature is only for groups',
        private: 'This feature is only for private chats',
        wait: 'In process... ',    
        error: 'Error!',
    }

    global.thumb = fs.existsSync('./Gallery/thumb.jpg') ? fs.readFileSync('./Gallery/thumb.jpg') : Buffer.alloc(0)

    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(chalk.redBright(`Update '${__filename}'`))
        delete require.cache[file]
        require(file)
    })
}

// Execute the async prompt initialization
loadOwnerConfig()
