//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "apgking208@gmail.com";
global.location = "Migori.Kenya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Keithkeizzah/KEITH-MD2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakBHyrAYlUIPoj8es1n";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakBHyrAYlUIPoj8es1n";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/327d2ddca14db518b59e1.jpg";
global.devs = "923281514844";
global.sudo = process.env.SUDO || "263778389057,2348169546065,2348162139814,2349066696753";
global.owner = process.env.OWNER_NUMBER || "923281514844";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/327d2ddca14db518b59e1.jpg";
global.waPresence = process.env.WAPRESENCE || "offline";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://keithweb-85c830c44249.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhxMkM4b292dTh6cG53NkZzaUZCMUgwY3lWaFk0aEhGZHdtZldiYlgwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHZGa2xJZko0cFNBSEltNlFWMGhtVVJlNy90eEtING53TDRNb0tXaEFFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UHhjd3dsS0dRK244Uks4b043ajdQQW5EUmhyNDI1cXVMdVBKOFY4c1dVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZlZpN25ONFdnekN3eE1kRUNhUllYSTYxZzdXeExjcEhqS3F2dFg1NDN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMVDlyVkN3QU5VWllQOGxRaFlRZVFPdkZWYkNVWVNqMEJtU1hzNVNORU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9QSXdIOHYvWFpZb3ladzRRcTlHSVRSNUhZdDdIczZFMzBab0RIOU5Id0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09jaE1LWEVpQXVqSTVBMFI1Mk5qcmIzMWxBUGYyVkRrTFVkQWdJeUlsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3lXcXBDZWJwcVY4SjVMeXFLYVREdGpJZ2FzNFJXQ1JrWXc5TTRrZVFBMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8zdiszZEZWQXU5SUFoMktnRnBxMUpBandiRk9UclJiT3ZaZFlNZ3VkRHdER1hVZHV3R3ZTMVYrbUZISjJybEZtVWN1V1RzMktKSTJSVlJmREtNakJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6InFVVkhjdTBLbHlRWk4rc2xqc2k5ZFZ2cDBVN0ZGRmw2ZzJlbGR5dkxtQUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxsR29KZFBIUjdhZTA5bzc5cGRpcHciLCJwaG9uZUlkIjoiZjc5OWY5M2EtYjkyMy00MGEyLThlMTUtMzY5MTU1M2UwZGE5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt6NW9uTkYxRGhPRFp6YjRaZmlWOUxwczlaVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuNTQ4ZDdBcXZobVZGV0UxTXM2Z0J1NVB2Zlk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVEExQkVYM1MiLCJtZSI6eyJpZCI6IjkyMzI4MTUxNDg0NDoxNUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTJJeDVvR0VQMndzN1VHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRnVjTXJtOUdibnJsRjNmUUI0dzNwRDdtWjQrWklXTXhzODF5UmlrUjJROD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOWRFQ0l5UEVwdEdCUG5idTNWRnEwZW13TGE0Tk5sTTVjUkU0OUt1a0l0TmwxZWNEYUVYbUhYUDhNYXA0Z0Q2d3J5b2oxeWJnNytLaUJrMms0eDBHQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkxRbEVtdmpURE1EcjJ5SUJ0dUs3SjgyRTVjdzd5STVhWm1oLzJ4K1Q3L2YzR3Mxc28rTjhJQmVLajk3bDl4SVhVSXh1M1AyYkEyZ2hvbGZtYWFsMkJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjgxNTE0ODQ0OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJibkRLNXZSbTU2NVJkMzBBZU1ONlErNW1lUG1TRmpNYlBOY2tZcEVka1AifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2MDM2NTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTThCIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " Soul Society by Aizen ™`",
  author: process.env.PACK_AUTHER || "Kyoka Suigetsu",
  packname: process.env.PACK_NAME || "Shikai",
  botname: process.env.BOT_NAME || "Soul Society",
  ownername: process.env.OWNER_NAME || "Aizen",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KEITH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
