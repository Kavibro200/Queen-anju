//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUgxSDlKYllMNWhSbk45ZGhrcDE5RTA0ZkNJZTh2U3UrR0RzSG9QTWhGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkJ3Y0pySU8zTlNsUjdsTC83RmVjYytVczB4M0k2dDBNY1JPbWxJZ2RXND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SURhSjZZYnpxZWp2dTlsRHhxVXpYRlowQ1ZhaXZkYjB4bXdiYkVkaW0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJueUV5NG9RUkRqNmpTdW5aaUZwTS9IZ1pZNGNUNkt1NGcwZUJweStQNG5vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLeUJaY1A4L2dXK3ZadlY3WWJ3YXFYY2JlbE5XM0IxRDFTdVUvR1k0bGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHUXJ0L01HWVhwa2xyYTVPVVV6ZHNqYUYyRVJrTmNZMk4wMWZRcEt2VzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid04yZ0xXTy8xMlAzcDdhczlNQjVFYXdXRmxSNEc5QTVYV1dnRlZaM2lIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibCs1RFZoRkdsVElRc2UyTkpXdWc0UHJFN1J6WDRURjFYYkxqTHR2ZjMyST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlsbkRuZGhCcnVoMmRTTWFuREVBTHJySjZOY1RaU3JpVWx2VUxDN3czdVFGWjhLWXRPeHhwU3llcmRkYXltcFhVOUpQQ2ZrNWpVNmdZRkFQNzl1MURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJZa0p1Q1N6SzV1WFFPMGhnQWErc1RDcDUvdXZBTzREcXQrTXdHWTd2Z3FjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1b09KdUFOdVJtYWVmVGkxSHFwbW1RIiwicGhvbmVJZCI6IjZjYjRkNTA4LTY2MzktNDkxNy04NzhiLTM4NjAyZTg1NTY4NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2VWFYbExmUmNaUzVCL0R3akZOenN2UVh5Mk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUVuZUdtalVBeWVFeFFpQ1JDbjlrYTNkTjRnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNGNUg5TkNRIiwibWUiOnsiaWQiOiI5NDc4NjA3Nzk3MDozMkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0OTYwMDA4NjI2NDA1OjMyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSS8rc3FvRUVOU3d6c0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZHB1WDh0WVAyR0VYUFN2K1ZEbE9oWm5wcEI1UHBHbGZLNUlaRlVmVXoxUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibi93NldYRURJcjVNQVNEQXFsK0xQZ3JnKzgwYUJwNDQyeGJGeS9CeS9mRVdtOCtpVWUwK29LWkhCSFhpNThZRVE5dzRZejZoOUxlTE5aeEpxRmIyQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IkZndkdRVWkrY2xyWWtFalAyY0dwMEpmOXVTcU1pK2JWNHZ0VjRCblR6VkV2bVNEenlqcHlTaDIzWVJVY1cwa2tNazNPNWc3QitMUk1zdFRuL2RYMURnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODYwNzc5NzA6MzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGFibC9MV0Q5aGhGejByL2xRNVRvV1o2YVFlVDZScFh5dVNHUlZIMU05VSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMzA4OTYyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV3ayJ9"  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
