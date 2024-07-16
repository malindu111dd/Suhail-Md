const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2879250787";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_52_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0LFxuICAgICAgICA4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSDk5OG1DNWMrK01xMDc3cUhuN0hqdVN5anJ1bzVlS1cxdEZNdUZlbWFpdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxMDQxMDQzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjQwNEFBQkZBMEM3MzIzM0YyQjBFMDAyQjVGMjczOUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTg3MTE4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpRdXVxVmRBVFFPNVJVRWRqZG1ZRXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYThlNjc5ODUtY2FiYy00YmFjLWE1ZWItNTc5YjVhOGRmNmY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMjUzLFxuICAgICAgNDgsXG4gICAgICAxNSxcbiAgICAgIDE5NyxcbiAgICAgIDE0LFxuICAgICAgMzYsXG4gICAgICAxNDUsXG4gICAgICA5MyxcbiAgICAgIDM4LFxuICAgICAgNCxcbiAgICAgIDUwLFxuICAgICAgOTIsXG4gICAgICA4OCxcbiAgICAgIDIxMyxcbiAgICAgIDIwLFxuICAgICAgMTAxLFxuICAgICAgOTEsXG4gICAgICAxMixcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgMTg1LFxuICAgICAgMzYsXG4gICAgICA2OCxcbiAgICAgIDEzMCxcbiAgICAgIDIyMCxcbiAgICAgIDIxNCxcbiAgICAgIDEyLFxuICAgICAgMTIyLFxuICAgICAgMTE2LFxuICAgICAgOTAsXG4gICAgICAxNjksXG4gICAgICAyMjgsXG4gICAgICAzNCxcbiAgICAgIDY0LFxuICAgICAgMTE3LFxuICAgICAgNzUsXG4gICAgICAyMDUsXG4gICAgICAyMTIsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQbjRzdjBGRU9hbXVMUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBUUk5qMEErNmJMMy8zalgvVjVQb0pMVnNTL2hqTTJpdnREek0zcFkrUk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYnRoem9QSlFBWi9sNUlCYUI5cEpNSjRVUVRNanVJMWpkQVRPU0FxUThwc1BuYUwvY2FOZEVHNmNvTzZqbXlYa0s2Q2ttZmNieEVaYS9ia3EyeVVvQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidktQQjdhd0x6S1NRMUxHZS9EZGVldDRRdkh0bjFTbjN1djJxVmh0dExrNUFVMXRBenNwalZTa2JGS3Ixa2orQXBPZjJqMXdDSTduQmhJZzVpWjliQXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxMDQxMDQzNDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTUyNzYwNzg4NzQ4NzU6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5iH4pml77iPTm90aSBTdWRkYeKdpO+4j/CfmIdcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzEwNDEwNDM0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTg3MTEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0E0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHQTQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPUDRSbHNzcW1iUjBJbm1TYjNxenlPTWtLT3E4U3hQOGhnT281c3pTRWg0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MDUxNTU5NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdBNS5qc29uIjogIntcImtleURhdGFcIjpcIk1qMlIvc25VMU50ZXhtODNRSjVjbGNMWW02WkRlRHh4dzFZTnZURWVCOVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYwNTE1NTk2MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIwNTg3MDk4Njc5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
