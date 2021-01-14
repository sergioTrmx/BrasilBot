const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const { databases, imune } = require('./src/wppimune')
const kagApi = require('@kagchi/kag-api')
const { nethunter } = require('./src/nethunter')
const { destrava, destrava2 } = require('./src/destrava')
const translatte = require('translatte')
const translate = require('translatte')
const fetch = require('node-fetch')
const { pack } = require('./src/pack')
const { lingua } = require('./src/idioma')
const { termux } = require('./src/termux')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const { get } = require('request')
const { exit } = require('process')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Meu criador^~^\n' 
            + 'ORG:Briz4lok4;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=557187645787:+55 71 8764-5787\n' 
            + 'END:VCARD'
prefix = '.'
blocked = []

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Halo @${num.split('@')[0]}\nBem vindo ao grupo *${mdata.subject}*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Adeus @${num.split('@')[0]}👋`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '⌛ Aguarde um pouco... ⌛',
				success: '✔️ Sucesso! ✔️',
				error: {
					stick: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '❌ Este comando só pode ser usado em grupos! ❌',
					ownerG: '❌ Este comando só pode ser usado pelo grupo proprietário! ❌',
					ownerB: '❌ Este comando só pode ser usado pelo bot proprietário! ❌',
					admin: '❌ SILÊNCIO MEMBRO COMUM VC N TEM MORAL PRA USAR ESSE COMANDO ❌',
					Badmin: '❌ Este comando só pode ser usado quando o bot se torna administrador! ❌'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["557187645787@s.whatsapp.net"] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

			
			switch(command) {
				case 'destrava':
					if(isGroup)
					{
						if(isGroupAdmins)
						{
							client.sendMessage(from, destrava(), text)
							client.sendMessage(from, destrava2(), text)
							client.sendMessage(from, destrava(), text)
							client.sendMessage(from, destrava2(), text)
							client.sendMessage(from, destrava(), text)
							client.sendMessage(from, destrava2(), text)
							client.sendMessage(from, destrava(), text)
							client.sendMessage(from, destrava2(), text)
						} 
						else return reply(mess.only.admin)
					}
					else{
						client.sendMessage(from, destrava(), text)
						client.sendMessage(from, destrava2(), text)
						client.sendMessage(from, destrava(), text)
						client.sendMessage(from, destrava2(), text)
						client.sendMessage(from, destrava(), text)
						client.sendMessage(from, destrava2(), text)
						client.sendMessage(from, destrava(), text)
						client.sendMessage(from, destrava2(), text)
					}
					break

				case 'criador':
					client.sendMessage(from, {displayname: "Ian", vcard: vcard}, MessageType.contact, { quoted: mek})
       				client.sendMessage(from, 'Este é o número do meu proprietário >_<, não envie spam ou bloqueio você',MessageType.text, { quoted: mek} )
				break
				case 'help':
				case 'comandos':
				case 'menu':
					client.sendMessage(from, help(prefix), text)
					break
				case 'pack':
					buffer = await getBuffer(`https://i.imgur.com/5ksFWsr.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: pack(prefix)})
				break
				case 'shadow':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(8)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=shadow&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'ocean':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(8)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=underwater_ocean&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'coffe':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(7)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=coffee&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'lovepaper':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(11)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=love_paper&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case '8bits':
					var gh = body.slice(8)
					var gbl1 = gh.split("|")[0]
					var gbl2 = gh.split("|")[1]
					if (args.length < 1) return reply('Cadê o texto, hum')
					try {
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text1=${gbl1}&text2=${gbl2}&apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(anu.result)
						client.sendMessage(from, buffer, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'bpaper':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(8)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`tobz-api.herokuapp.com/api/photooxy?theme=burn_paper&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'glowmetal':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(11)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`tobz-api.herokuapp.com/api/photooxy?theme=metalic_text_glow&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'harrytext':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(11)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'woodblock':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(11)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`tobz-api.herokuapp.com/api/photooxy?theme=wood_block&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'textph':
					var gh = body.slice(8)
					var gbl1 = gh.split("|")[0]
					var gbl2 = gh.split("|")[1]
					if (args.length < 1) return reply('Cadê o texto, hum')
					try{
						anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
						buffer = await getBuffer(anu.result)
						client.sendMessage(from, buffer, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'glitch':
					var gh = body.slice(8)
					var tels3 = gh.split("|")[0]
					var tels4 = gh.split("|")[1]
					if (args.length < 1) return reply(mess.blank)
					try{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${tels3}&text2=${tels4}&apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(anu.result)
						client.sendMessage(from, buffer, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'text3d':
              	    if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
                    teks = `${body.slice(8)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
                    	buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
						client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
					 break
				
				case 'wolflogo':
                      if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
                      gh = body.slice(10)
                      gl1 = gh.split("|")[0]
					  gl2 = gh.split("|")[1]
					  try{
                      	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					 break
					case 'ninjalogo':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						gh = body.slice(11)
						gl1 = gh.split("|")[0]
						gl2 = gh.split("|")[1]
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
							buff = await getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					case 'pubgtext':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						gh = body.slice(10)
						gl1 = gh.split("|")[0]
						gl2 = gh.split("|")[1]
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
							buff = await getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					
					case 'idioma' :
						reply(lingua())
					break
					case 'signome':
						if (args.length < 1) return reply('você é sem nome ??')
						try{
							anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(9)}`, {method: 'get'})
							var codelang = `pt`
							var teks = anu.result
							translate(teks, {to: codelang}).then(res =>{
								reply('Seu nome:\n\n'+res.text)
							}).catch(err => {
								reply(`Ocorreu um erro :(`);
						    });
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					 case 'jokerlogo':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					  teks = `${body.slice(11)}`
					  if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					  try{
					  	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${teks}&apikey=BotWeA`, {method: 'get'})
					  	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					   break
					case 'dwater':
					  if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					  teks = `${body.slice(8)}`
					  if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					  try{
					  	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=dropwater&text=${teks}&apikey=BotWeA`, {method: 'get'})
					  	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					break
					case 'warfacetext':
					  if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					  teks = `${body.slice(13)}`
					  if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 25 letras', text, {quoted: mek})
					  try{
					  	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=warface&text=${teks}&apikey=BotWeA`, {method: 'get'})
					  	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					break
					case 'overtext':
					  if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					  teks = `${body.slice(10)}`
					  if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 25 letras', text, {quoted: mek})
					  try{
					  	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=overwatch&text=${teks}&apikey=BotWeA`, {method: 'get'})
					  	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					break
					case 'cstext':
					  if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					  teks = `${body.slice(8)}`
					  if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 25 letras', text, {quoted: mek})
					  try{
					  	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=csgo&text=${teks}&apikey=BotWeA`, {method: 'get'})
					  	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					break
					case 'frase':
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomquotes?apikey=BotWeA`, {quoted: 'get'})
						var la = `pt`
						var result = anu.quotes
						var author = anu.author
						try{
							translate(result,{to: la}).then(res =>{
								reply(`Frase de ${author}:\n`+res.text)
							}).catch(err => {
								reply('Ocorreu um erro😓')
							})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					case 'blood':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						teks = `${body.slice(7)}`
						if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=blood&text=${teks}&apikey=BotWeA`, {method: 'get'})
							buff = await getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					case 'snow':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						teks = `${body.slice(6)}`
						if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=snow&text=${teks}&apikey=BotWeA`, {method: 'get'})
							buff = await getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					case 'neonligth':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						teks = `${body.slice(11)}`
						if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_light&text=${teks}&apikey=BotWeA`, {method: 'get'})
							buff = getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					case 'neontec':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						teks = `${body.slice(9)}`
						if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_technology&text=${teks}&apikey=BotWeA`, {method: 'get'})
							buff = await getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break

				 case 'lionlogo':
                      if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
                      gh = body.slice(10)
                      gl1 = gh.split("|")[0];
					  gl2 = gh.split("|")[1];
					  try{
                      	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
                	break
				case 'nekoanime':
					try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmmm nekos são lolis tbm amigo :)'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
				break
				case 'randomanime':
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Um anime aleatorio pra vc'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break
				case 'randomhentai':
			    try {
					if (isNsfw)
					{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Um hentai aleatorio pra vc :)'})
					}
					else if (!isGroup)
					{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Um hentai aleatorio pra vc :)'})
					}
					else return reply('❌Somente PV e com o nsfw ativado❌')
				} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply(' *ERROR* ')
				}
				break
				case 'randomshota':
					try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmmm ent quer dizer que gosta de shotas'})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'randomkiss':
					try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Pena que o meu criador n ta ai😔'})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'randomhug':
					try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nada que um abraço resolva😔'})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'nsfwblowjob':
				    try {
						if (isNsfw)
						{
							try{
								res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
								buffer = await getBuffer(res.result)
								reply(mess.wait)
								client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nada melhor que um hentai animado :)'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else if(!isGroup) {
							try{
								res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
								buffer = await getBuffer(res.result)
								reply(mess.wait)
								client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nada melhor que um hentai animado :)'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else return reply('❌Somente PV e com o nsfw ativado❌')
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break
				case 'nsfwneko':
					
					try {
						if (isNsfw) {
							try{
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmmm, hentai de neko parece que estou sentido um furry'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else if(!isGroup)
						{
							try{
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmmm, hentai de neko parece que estou sentido um furry'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else return reply('❌Somente PV e com o nsfw ativado❌')
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
				break
				case 'nsfwtrap':
					try {
						if (isNsfw) {
							try{
								res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`, {method: 'get'})
								buffer = await getBuffer(res.result)
								client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hentai de traveco kkkkkk'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else if(!isGroup) {
							try{
								res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`, {method: 'get'})
								buffer = await getBuffer(res.result)
								client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hentai de traveco kkkkkk'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else return reply('❌Somente PV e com o nsfw ativado❌')

					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break
				case 'nsfw':
						if (!isGroup) return reply('❌So usa isso pra ativar porno no grupo, no pv é liberado❌')
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('E pra ativar ou n klr?')
						if (Number(args[0]) === 1) {
							if(isNsfw) return reply('Ja esta ativo')
							nsfw.push(from)
							fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
							reply('Prontinho porno liberado guys :)')
						}
						else if (Number(args[0]) === 0) {
							nsfw.splice(from, 1)
							fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
							reply('O corno do adm desativou o porno 😡')
						}
						else {
							reply('1 pra ativar e 0 pra desativar')
						}
				break
				case 'nethunter':
					buffer = await getBuffer(`https://i.imgur.com/uj6dP9Y.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: nethunter()})
				break
				case 'termux':
					buffer = await getBuffer(`https://i.imgur.com/NMk9sC4.png`)
					client.sendMessage(from, buffer, image, {caption: termux(prefix)})
					break
					case 'creator':
                 		 client.sendMessage(from, {displayname: "Ian", vcard: vcard}, MessageType.contact, { quoted: mek})
       				 	 client.sendMessage(from, 'Este é o número do meu proprietário >_<, não envie spam ou eu te bloqueio',MessageType.text, { quoted: mek} )
           			break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*Número do Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total de contatos bloqueados* : ${blocked.length}\n*O bot esta ativo desde* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto mano')
					}
					break
				case 'stiker':
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falha, na época converter ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie a imagem com o adesivo de legenda ${prefix} ou a tag de imagem que foi enviada, se for video o maximo é de 10 segundo de duração`)
					}
					break
				case 'gtts':
					if (args.length < 1) return client.sendMessage(from, 'CADE A PRR DO CODIGO DO IDIOMA???', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'CADE A PRR DO TEXTO', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('QUER ESCREVER A BIBLIA KLR??')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Falhou:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
				break
				case 'db':
					reply(databases(prefix))
				break
				case 'wppim':
					reply(imune(prefix))
				break
				case 'meme':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
				break
				case 'hilih':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO??')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'yt2mp3':
					if (args.length < 1) return reply('CADE A PRR DA URL??')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytsearch':
					if (args.length < 1) return reply('O que você está procurando? pau?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'tiktok':
					if (args.length < 1) return reply('CADE A PRR DA URL??')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, 'Onde está o nome de usuário, hum?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Possível nome de usuário inválido')
					}
					break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('O que você quer escrever?')
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/nulis?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					break
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Qual é o tipo hum?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO??')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'tagall2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                 case 'tagall3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clearall':
					if (!isOwner) return reply('Quem é Você?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Exclua com sucesso todo o chat :)')
					break
				case 'bc':
					if (!isOwner) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão de sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ Trasmissão de aviso ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão de sucesso')
					}
					break
				case 'kill':
					if (!isOwner) return reply('Quem é Você?')
					anu = await client.chats.all()
					for (let _ of anu) {
						sendMess(_.jid, `[ Trasmissão de aviso ]\n\n FECHANDO O BOT...`)
					}
					process.exit(0)
				break
        		case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Promovido com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} Como Administrador do Grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Rebaixado com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Rebaixado com sucesso @${mentioned[0].split('@')[0]} Tornou-se um membro comum!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país, mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, emitidos :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                    case 'linkgroup':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await client.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                    case 'leave':
                	    if (!isGroup) return reply(mess.only.group)
                	    if (isGroupAdmins || isOwner) {
                	    client.groupLeave(from)
                	    } else {
                	    reply(mess.only.admin)
                	    }
                    break
				case 'toimg':
					if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter adesivos em imagens ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativado com sucesso o modo simi neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ja esta ativo')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desativou com sucesso o recurso de boas-vindas neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                                      break
				case 'clone':
					var isClone = false
					if(!isClone) return reply('TA ME TIRANDO SEU GAY')
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('A tag alvo que você deseja clonar')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Houve Falha')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(' Só uma foto mano')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
