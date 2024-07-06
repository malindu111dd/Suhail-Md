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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94764551974";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_52_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICA3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzLFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNpYjFFbUl4UHVybEVsZzExYnBxTnJ2bHpPSzBraFRoVkZTNkI0cFdDWHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjQ1NTE5NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkExQUNDMTAzNEQzMkI5MEFCN0IzQkE4QzZFNTBFMTVCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI5MTkyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1M2o3cVIxMlNwbVYtbW9jcG1IOXhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU4YzNkYzhhLWNmOGMtNDRkNy1iMDE3LTM1ZDQ4MTUyNDRmNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAxMTYsXG4gICAgICAxMzYsXG4gICAgICAyMjgsXG4gICAgICAyMDAsXG4gICAgICAyNDIsXG4gICAgICAxMTIsXG4gICAgICAxNDEsXG4gICAgICA1NCxcbiAgICAgIDE4MSxcbiAgICAgIDIzMCxcbiAgICAgIDIxNSxcbiAgICAgIDM2LFxuICAgICAgMjA0LFxuICAgICAgMjIwLFxuICAgICAgMjI1LFxuICAgICAgMjE5LFxuICAgICAgMSxcbiAgICAgIDU1LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NixcbiAgICAgIDEzMCxcbiAgICAgIDIwMixcbiAgICAgIDIyOCxcbiAgICAgIDQ1LFxuICAgICAgODUsXG4gICAgICAxOTcsXG4gICAgICAyNDgsXG4gICAgICA5MSxcbiAgICAgIDE5NSxcbiAgICAgIDIyOCxcbiAgICAgIDU2LFxuICAgICAgNzIsXG4gICAgICAxMSxcbiAgICAgIDUsXG4gICAgICAxNTAsXG4gICAgICAyMTksXG4gICAgICAxNixcbiAgICAgIDI0NyxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlYzQkdTQjZSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NDU1MTk3NDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODYxMTQzMjkxOTA1MTM6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0dMdHVRR0VNbWtwclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtV2cyNmtoVEZTM0E4aFhPRHlreFMvdkNaUnl1VmYvZjlOR0VkOWVqbVJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkY2cnBwbHRrVjU1R01qcGtQOTB2WHBvYjc0b3pYVzh0M25QWnRHazk0M2RIMXJOeVo4a1N5eVhRZzV4OUxjbDB3UlRBMTBFbjVHSE95bVJvNUZjdUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFET2pxc1dXOUxsaHVERGxkSFNPVTdJcDc0aFJYRU5teEJxVEJwN0ZzcTFUYTZQSDVrVTNEd054NXI4Y1FjY0w5ZG03WVRFRjdlcGNzbzlyak96b2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY0NTUxOTc0OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyOTE5MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMazBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxrMC5qc29uIjogIntcImtleURhdGFcIjpcImFIcTlnbkZ0VGtpWFNOUEhaejE2MDBYNkY0QnUwSEU1OU1WTnNic3dDeVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgyMTIxNDE3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjkxOTIxOTQ2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
