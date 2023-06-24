import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender);
  if (!text) {
    throw `Hi *${name}*, do you want to talk with me? Respond with *${usedPrefix + command}* (your message)\n\n📌 Example: *${usedPrefix + command}* Hi bot`;
  }
  
  m.react('🗣️');
  
  const uid = encodeURIComponent(m.sender);
  const msg = encodeURIComponent(text);
  
  const res = await fetch(`hhttp://api.brainshop.ai/get?bid=176217&key=knXmUkn9zcHAk09T&uid=[uid]&msg=[msg]`);
  const json = await res.json();
  
  if (json.cnt) {
    const reply = json.cnt;
    m.reply(reply);
  } else {
    throw json;
  }
};

handler.help = ['bot'];
handler.tags = ['fun'];
handler.command = ['bot', 'chat' 'alexa'];

export default handler;

