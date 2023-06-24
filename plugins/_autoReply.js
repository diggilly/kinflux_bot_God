
export async function all(m) {
	
    // when someone sends a group link to the bot's dm
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('use this link to join my whatsApp group') || m.text.startsWith('hello can i add you to my group') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
     this.sendButton(m.chat, `*Invite bot to a group* 

// when someone sends a group link to the bot's dm
    if ((m.mtype === 'greeting message' || m.text.startsWith('hello') || m.text.startsWith('hey') || m.text.startsWith('hello can i add you to my group') || m.text.startsWith('are you there') || m.text.startsWith('hallo')) && !m.isBaileys && !m.isGroup) {
     this.sendButton(m.chat, `*I am here how can i e of any help type .list to view my commands* 
 
  Hallo @${m.sender.split('@')[0]} 
  you can rent the bot to join a group or contact owner 
  more info click on the button
`.trim(), igfg, null, [['Rent', '/buyprem']] , m, { mentions: [m.sender] })
    m.react('💎')
  } 
  
   return !0
}
