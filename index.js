const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
	delay
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { coins } = require('./src/coins')
const fs = require('fs')
const speed = require('performance-now')
const geo = require('node-open-geocoder')
const gis = require('g-i-s');
const YouTube = require("youtube-sr").default;
const ytdl = require('ytdl-core')
const qrcode = require('qrcode')
const email = require('nodemailer')
const util = require('util')
const execute = util.promisify(require('child_process').exec)
const { trava1 } = require('./travas/trava1')
const { travas2 } = require('./travas/trava2')
const { travas3 } = require('./travas/trava3')
const { travas4 } = require('./travas/trava4')
const { travas5 } = require('./travas/trava5')
const { travas6 } = require('./travas/trava6')
const { travas7 } = require('./travas/travas7')
const { travas8 } = require('./travas/travas8')
const { travas9 } = require('./travas/travas9')
const { travas10 } = require('./travas/travas10')
const { travas11 } = require('./travas/travas11')
const { travas12 } = require('./travas/travas12')
const moment = require('moment-timezone')
const geoip = require('geoip-lite');
const { exec } = require('child_process')
const { databases, imune } = require('./src/wppimune')
const kagApi = require('@kagchi/kag-api')
const { nethunter } = require('./src/nethunter')
const { destrava, destrava2 } = require('./src/destrava')
const translatte = require('translatte')
const translate = require('translatte')
const fetch = require('node-fetch')
const { vipbot } = require('./src/vipbot')
const { pack } = require('./src/pack')
const { lingua } = require('./src/idioma')
const { playlist } = require('./src/playlist')
const { termux } = require('./src/termux')
const { welcome, bye } = require('./src/welcomtext')
const tiktod = require('tiktok-scraper')
const  { urlShortener } = require('./lib/shortener')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const morsify = require('morsify')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const jimp = require('jimp')
const CPF = require('cpf')
const { get } = require('request')
const { exit } = require('process')
const gm = require('gm').subClass({imageMagick: true})
const loli = new lolis()
const puppeteer = require('puppeteer');
const blockeds = JSON.parse(fs.readFileSync('./src/blocklist.json'))
const wall = JSON.parse(fs.readFileSync('./src/wallpaper.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antilinkhard = JSON.parse(fs.readFileSync('./src/antilinkhard.json'))
const autoreply = JSON.parse(fs.readFileSync('./src/autoreply.json'))
const { username, passw, textmail } = require('./emailacc')
const {OriginalOwner, ownerNumber} = require('./numowner')
const { fr, ar } = require('translatte/languages')
const { default: axios } = require('axios')
var transporter = email.createTransport({
	service: 'gmail',
	auth: {
		user: username,
		pass: passw
	}
})
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Meu criador^~^\n' 
            + 'ORG:Ian;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=557187645787:+55 71 8764-5787\n' 
            + 'END:VCARD'
prefix = `!`
blocked = []

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escaneie o qr code, mas vc precisa de um celular novo ou wpp web'))
	})

	fs.existsSync('./BrizasBot.json') && client.loadAuthInfo('./BrizasBot.json')
	client.on('connecting', () => {
		start('2', 'Pera la to conectando...')
	})
	client.on('open', () => {
		success('2', 'Pronto, conectei :)')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BrizasBot.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		const mdata = await client.groupMetadata(anu.jid)
		if (!welkom.includes(anu.jid)) return
		try {
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = welcome(num.split('@')[0], mdata.subject)
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = bye(num.split('@')[0])
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
			if(mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
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
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false
			const isAutoReply = isGroup ? autoreply.includes(from) : false
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
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Comando: '+color(command), 'de', color(sender.split('@')[0]), 'palavras :', color(args.length)+']')
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mNCMD\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Mensagem', 'de', color(sender.split('@')[0]), 'palavras :', color(args.length)+']')
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Comando: '+color(command), 'de', color(sender.split('@')[0]), 'grupo: ', color(groupName), 'palavras :', color(args.length)+']')
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mNCMD\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Mensagem', 'de', color(sender.split('@')[0]), 'grupo: ', color(groupName), 'palavras :', color(args.length)+']')
			if(isCmd) {
				if(isGroup) {
					if(blockeds.includes(mek.participant)) return reply('Seu número esta bloqueado, ou seja não ouvindo você 😜')
				}
				else {
					if(blockeds.includes(mek.key.remoteJid)) return reply('Seu número esta bloqueado, ou seja não ouvindo você 😜')
				}
			}
			async function outcmd() {
				if(budy.startsWith('/')) return reply('Meu prefixo é !')
				if(budy.startsWith('#')) return reply('Meu prefixo é !')
				if(budy.startsWith('.')) return reply('Meu prefixo é !')
				if(budy.startsWith('$')) return reply('Meu prefixo é !')
				if(budy.startsWith('*')) return reply('Meu prefixo é !')

				if(budy.includes('pedro') && isAutoReply) {
					client.sendMessage(from, fs.readFileSync('./img/pedro.webp'), sticker, {quoted: mek})
				}
				if(budy.includes('cade o bot') && isAutoReply) return reply('Me chamou onii-chan 👉👈?')
				if(budy.includes('bot fdp') && isAutoReply) return reply('Te foder rapaz, te deitar na porrada quando tiver dormindo')
				if(budy.includes('bot gostoso') && isAutoReply) return reply('arigato go sai masu 😳👉👈')
				if(budy.includes('bot fofo') && isAutoReply) return reply('arigato go sai masu 😳👉👈')
				if(budy.includes('bot baianor') && isAutoReply) return reply('convidei sua placa-mãe pra minha rede seu corno')
				if(budy.includes('bot corno') && isAutoReply) return reply('vai te foder, jogador de ff, comprador de pack do pézinho')
				if(budy.includes('bot feio') && isAutoReply) return reply('senhora sua mãe 😡')
				if(budy.includes(botNumber+' feio') && isAutoReply) return reply('senhora sua mãe 😡')
				if(budy.includes('bot lindo') && isAutoReply) {
					buff = await getBuffer('https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg')
					teks = 'Bakaaaa 😣😣'
					client.sendMessage(from, buff, image, {caption: teks})
				}
				if(budy.includes('bom dia') && isAutoReply) {
					buff = await getBuffer('https://i.imgur.com/RR18JiI.jpg')
					teks = 'Ohayo gozaimasu, Onii-chan 👉👈'
					client.sendMessage(from, buff, image, {caption: teks})
				}
				if(budy.includes('boa tarde') && isAutoReply) {
					buff = await getBuffer('https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg')
					teks = `Kon'nichiwa Onii-chan, aceite esse café ☕`
					client.sendMessage(from, buff, image, {caption: teks})
				}
				if(budy.includes('boa noite') && isAutoReply) {
					buff = await getBuffer('https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg')
					teks = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
					client.sendMessage(from, buff, image, {caption: teks})
				}

				if(isUrl(budy) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
					reply('Corra Membro comum, O ban está próximo...')
					setTimeout(async function () {
						kic = `${sender.split("@")[0]}@s.whatsapp.net`
						client.groupRemove(from, [kic])
					}, 3000)
				}
				if(isUrl(budy) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
					reply('Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃')
				}

				if(budy.includes('://chat.whatsapp.com/') && isAntiLink && !isGroupAdmins && isBotGroupAdmins) {
					reply('Corra Membro comum, O ban está próximo...')
					setTimeout(async function () {
						kic = `${sender.split("@")[0]}@s.whatsapp.net`
						client.groupRemove(from, [kic])
					}, 3000)
				}
				if(budy.includes('://chat.whatsapp.com/') && isAntiLink && isGroupAdmins && isBotGroupAdmins) {
					reply('Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃')
				}
				if(budy.includes('://youtube.com/channel') && isAntiLink && !isGroupAdmins && isBotGroupAdmins) {
					reply('Corra Membro comum, O ban está próximo...')
					setTimeout(async function () {
						kic = `${sender.split("@")[0]}@s.whatsapp.net`
						client.groupRemove(from, [kic])
					}, 3000)
				}
				if(budy.includes('://youtube.com/channel') && isAntiLink && isGroupAdmins && isBotGroupAdmins) {
					reply('Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃')
				}
			}
			outcmd()
			switch(command) {
				case 'installbot':
					buff = await getBuffer('https://avatars.githubusercontent.com/u/57237342?s=460&u=f92966bbdd6df959d883fe9248a984c6692ddf78&v=4')
					client.sendMessage(from, buff, image, {quoted: mek, caption: '*Comandos de instalar o Brizas-bot Ultimate no termux*\n*pkg install git*\n*git clone https://github.com/ianmsfvenom/Brizas-bot*\n*cd Brizas-bot*\n*bash install.sh*\n*sh start.sh*'})
					break
				case 'vsf':
					reply('Se fuder é rolimã, comi tu e tua irmã')
					break
				case 'vtmnc':
					reply('Toma no cu é caruru 7 pica no teu cu')
					break
				case 'mangasrc':
					try {
					teks = body.slice(8)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/anoboy?q=${teks}&apikey=BotWeA`)
					buff = await getBuffer(anu.result[0].image)
					dated = `*✅ Manga Encontrada ✅*\n*Nome do mangá: ${anu.result[0].title}*\n*Link do mangá: ${anu.result[0].link}*`
					client.sendMessage(from, buff, image, {quoted: mek, caption: dated})
					} catch (e) {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'animesrc':
					try {
					teks = body.slice(9)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/neonime?q=${teks}&apikey=BotWeA`)
					dated = `*✅ Anime Encontrado ✅*\n*Anime: ${anu.result[0].title}*\n*Descrição: ${anu.result[0].desc}*`
					buff = await getBuffer(anu.result[0].image)
					translate(dated, {to: 'pt'}).then(res => {
						client.sendMessage(from, buff, image, {quoted: mek, caption: res.text})
					})
					} catch (e) {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'cheguei':
					try {
						if(!isGroup) return reply('Que legal, pena que não ligo 🙃')
						if(!isGroupAdmins) return reply('Finalmente um ademiro on pra controlar esses gados')
						if(!isBotGroupAdmins) return reply('Eae amigo ademiro, como vaiste? Espero que bem, se não foda-se')
						reply('Foda-se ninguém liga pra tu membro comum 🙄')
					} catch (e) {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'feio':
					try {
						reply('A VAI SE FODER SEU MERDA SE OLHE NO ESPELHO 😡🤬')
					} catch (e) {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'lindo':
					try {
						buff = await getBuffer('https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg')
						teks = 'Bakaaaa 😣😣'
						client.sendMessage(from, buff, image, {caption: teks})
					} catch (e) {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'boanoite':
					try {
						buff = await getBuffer('https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg')
						teks = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
						client.sendMessage(from, buff, image, {caption: teks})
					} catch (e) {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'boatarde':
					try {
						buff = await getBuffer('https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg')
						teks = `Kon'nichiwa Onii-chan, aceite esse café ☕`
						client.sendMessage(from, buff, image, {caption: teks})
					} catch (e) {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'bomdia':
					try {
						buff = await getBuffer('https://i.imgur.com/RR18JiI.jpg')
						teks = 'Ohayo gozaimasu, Onii-chan 👉👈'
						client.sendMessage(from, buff, image, {caption: teks})
					} catch (e) {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'biblia':
					try {
						anu = await fetchJson('https://labs.bible.org/api/?passage=random&type=json')
						translate(JSON.stringify(anu[0].text), {to: 'pt'}).then(res => {
							teks = `*Nome: ${anu[0].bookname}*\n*Capítulo: ${anu[0].chapter}:${anu[0].verse}*\n*Frase: _${res.text}_*`
							reply(teks)
						})
					} catch (e) {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'waifu':
					try {
						anu = await fetchJson('https://docs-jojo.herokuapp.com/api/waifu')
						n = anu.name
						buff = await getBuffer(anu.image)
						translate(anu.desc, {to: 'pt'}).then(res =>{
							client.sendMessage(from, buff, image, {quoted: mek, caption: `*✅ Waifu gerada ✅*\n*Nome: ${n}*\n*Descrição: ${res.text}*`})
						}).catch(err => {
							reply('Ocorreu um erro😓')
						})
					} catch{
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'fuckmylife':
					try{
						anu = await fetchJson('https://docs-jojo.herokuapp.com/api/fml')
						translate(anu.result.fml, {to: 'pt'}).then(res =>{
							reply(`*_${res.text}_*`)
						}).catch(err => {
							reply('Ocorreu um erro😓')
						})
					} catch{
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'fakeidentity':
					try {
						anu = await fetchJson('https://docs-jojo.herokuapp.com/api/fake_identity')
						teks = `*✅ Identidade falsa gerada ✅*\n*Nome: ${anu.name}*\n*Sexo: ${anu.gender}*\n*Idade: ${anu.age}*\n*Nascimento: ${anu.birtday}*\n*Emprego: ${anu.occupation}*\n*Endereço: ${anu.address}*\n*Código postal: ${anu.zip_code}*\n*Estado: ${anu.state}*\n*País: ${anu.country}*
*E-mail: ${anu.email.trim()}*\n*Senha: ${anu.password}*\n*Telefone: ${anu.phone}*\n*Cartão: ${anu.card.trim()}*\n*Código: ${anu.code}*\n*Data: ${anu.date}*\n*Código Pin: ${anu.pin_code}*\n*Peso: ${anu.weight}*\n*Altura: ${anu.height}*\n*Tipo Sanguíneo: ${anu.blood_type}*\n*Estado cívil: ${anu.status}*`
						reply(teks)
					} catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'galaxywp':
					try{
						bl = body.slice(10)
						buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${bl}`)
						client.sendMessage(from, buff, image, {quoted: mek, caption: bl})
					} catch{
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'neonligth':
					try {
						bl = body.slice(11)
						buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${bl}`)
						client.sendMessage(from, buff, image, {quoted: mek, caption: bl})
					} catch{
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'githubstalk':
					try {
						teks = body.slice(13)
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/githubprofile?username=${teks}&apikey=BotWeA`)
						dated = `*✅ Perfil stalkeado ✅*\n*Nome: ${anu.result.username}*\n\n*Bio: ${anu.result.biography}*\n\n*Companhia: ${anu.result.company}*\n*E-mail: ${anu.result.email}*\n*Seguidores: ${anu.result.follower}*\n*Seguindo: ${anu.result.following}*\n*Localização: ${anu.result.location}*\n*Repositórios: ${anu.result.public_repository}*\n*Link: ${anu.result.url}*`
						buffer = await getBuffer(anu.result.avatar)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: dated})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'instastalk':
					try {
						teks = body.slice(12)
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/stalk?username=${teks}&apikey=BotWeA`)
						dated = `*✅ Perfil stalkeado ✅*\n*Nome: ${anu.Name}*\n*Nickname: ${anu.Username}*\n\n*Bio: ${anu.Biodata}  .*\n\n*Seguidores: ${anu.Jumlah_Following}*\n*Seguindo: ${anu.Jumlah_Followers}*\n*Posts: ${anu.Jumlah_Post}*`
						buff = await getBuffer(anu.Profile_pic)
						client.sendMessage(from, buff, image, {quoted: mek, caption: dated})
					} catch{
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'xvsearch':
					try {
						if(isNsfw) {
							if (args.length < 1) return reply('CADE A PRR DO TEXTO')
							teks = body.slice(10)
							anu = await fetchJson(`https://mnazria.herokuapp.com/api/porn?search=${teks}`)
							n = Math.floor(Math.random() * anu.result.length + 0)
							dated = `*✅ Resultado encontrado ✅*\n*Título: ${anu.result[n].title}*\n*Atores: ${anu.result[n].actors}*\n*Duração: ${anu.result[n].duration}*\n*Link: ${anu.result[n].url}*`
							buff =await getBuffer(anu.result[n].image)
							client.sendMessage(from, buff, image, {quoted: mek, caption: dated})
						} else if(!isGroup) {
							if (args.length < 1) return reply('CADE A PRR DO TEXTO')
							teks = body.slice(10)
							anu = await fetchJson(`https://mnazria.herokuapp.com/api/porn?search=${teks}`)
							n = Math.floor(Math.random() * anu.result.length + 0)
							dated = `*✅ Resultado encontrado ✅*\n*Título: ${anu.result[n].title}*\n*Atores: ${anu.result[n].actors}*\n*Duração: ${anu.result[n].duration}*\n*Link: ${anu.result[n].url}*`
							buff =await getBuffer(anu.result[n].image)
							client.sendMessage(from, buff, image, {quoted: mek, caption: dated})
						} else return reply('❌Somente PV e com o nsfw ativado❌')
					} catch (e){
						console.log(e)
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'nhentai':
					try {
						if(isNsfw) {
							if (args.length < 1) return reply('Preciso daquele código né amigo')
							if(isNaN(args[0])) return reply('O código e com letra lerdo')					
							code = args[0]
							anu = await fetchJson(`https://mnazria.herokuapp.com/api/nhentai?code=${code}`)
							n = Math.floor(Math.random() * anu.length + 0)
							buff = await getBuffer(anu[1])
							client.sendMessage(from, buff, image, {quoted: mek})
						} else if(!isGroup) {
							if (args.length < 1) return reply('Preciso daquele código né amigo')
							if(isNaN(args[0])) return reply('O código e com letra lerdo')					
							code = args[0]
							anu = await fetchJson(`https://mnazria.herokuapp.com/api/nhentai?code=${code}`)
							n = Math.floor(Math.random() * anu.length + 0)
							buff = await getBuffer(anu[1])
							client.sendMessage(from, buff, image, {quoted: mek})
						} else return reply('❌Somente PV e com o nsfw ativado❌')
					} catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'printweb':
					try {
						if (args.length < 1) return reply('A url klr')
						tekss = body.slice(7)
						reply(mess.wait)
						anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${tekss}`)
						bufferz = await getBuffer(anu.gambar)
						client.sendMessage(from, bufferz, image, {quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'librahoje':
					try {
						anu = await fetchJson(`https://api.cryptonator.com/api/ticker/gbp-brl`)
						price = parseFloat(anu.ticker.price).toFixed(2)
						reply(`*Preço do libra esterlina atualmente: R$: ${price}*`)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'rublohoje':
					try {
						anu = await fetchJson(`https://api.cryptonator.com/api/ticker/rub-brl`)
						price = parseFloat(anu.ticker.price).toFixed(2)
						reply(`*Preço do rublo russo atualmente: R$: ${price}*`)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'ienehoje':
					try {
						anu = await fetchJson(`https://api.cryptonator.com/api/ticker/jpy-brl`)
						price = parseFloat(anu.ticker.price).toFixed(2)
						reply(`*Preço do iene atualmente: R$: ${price}*`)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'eurohoje':
					try {
						anu = await fetchJson(`https://api.cryptonator.com/api/ticker/eur-brl`)
						price = parseFloat(anu.ticker.price).toFixed(2)
						reply(`*Preço do euro atualmente: R$: ${price}*`)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'realhoje':
					try {
						anu = await fetchJson(`https://api.cryptonator.com/api/ticker/brl-usd`)
						price = parseFloat(anu.ticker.price).toFixed(2)
						reply(`*Preço do real atualmente: US$: ${price}*`)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'dolarhoje':
					try {
						anu = await fetchJson(`https://api.cryptonator.com/api/ticker/usd-brl`)
						price = parseFloat(anu.ticker.price).toFixed(2)
						reply(`*Preço do dólar atualmente: R$: ${price}*`)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'ccoin':
					bl = body.slice(7)
					bl1 = bl.split('|')[0].trim()
					bl2 = bl.split('|')[1].trim()
					bl3 = bl.split('|')[2].trim()
					vl = bl3
					try {
						if(args.length < 1) return reply('*Digite o nome da moeda pra a ser convertida*')
						if(args.length < 3) return reply('*Digite o nome da moeda que deseja converter*')
						if(args.length < 5) return reply('*Digite o número a ser convertido*')
						if(isNaN(bl3)) return reply('Digite o número para poder converter')
						anu = await fetchJson(`https://api.cryptonator.com/api/ticker/${bl1}-${bl2}`)
						if(anu.success = false) return reply('*❌ Moeda não encontrada ❌*')
						bl3 = parseFloat(bl3*anu.ticker.price).toFixed(2)
						reply(`*✅ Conversão concluída ✅*\n*Da moeda ${anu.ticker.base} para a moeda ${anu.ticker.target}*\n*Valor atual: ${parseFloat(anu.ticker.price).toFixed(2)}*\n*Valor multiplicado para ${vl}: ${bl3}*`)
					} catch (e) { 
						console.log(e)
						reply('*❌ Moeda não encontrada ❌*')
					}
				break
				case 'cvcoin':
					bl = body.slice(8)
					bl1 = bl.split('|')[0].trim()
					bl2 = bl.split('|')[1].trim()
					try {
						if(args.length < 1) return reply('*Digite o nome da moeda pra a ser convertida*')
						if(args.length < 3) return reply('*Digite o nome da moeda que deseja converter*')
						anu = await fetchJson(`https://api.cryptonator.com/api/ticker/${bl1}-${bl2}`)
						if(anu.success = false) return reply('*❌ Moeda não encontrada ❌*')
						reply(`*✅ Conversão concluída ✅*\n*Da moeda ${anu.ticker.base} para a moeda ${anu.ticker.target}*\n*Valor atual: ${parseFloat(anu.ticker.price).toFixed(2)}*`)
					} catch{
						reply('*❌ Moeda não encontrada ❌*')
					}
					break
				case 'gpass':
					try {
						if (args.length < 1) return reply('Fala a quantidade de caracteres')
						if(isNaN(args[0])) return reply('Quantidade inválida')
						chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        				string_length = args[0];
        				randomstring = '';
        				for ( i = 0; i < string_length; i++) {
         		  			rnum = Math.floor(Math.random() * chars.length);
       			   		 	randomstring += chars.substring(rnum,rnum+1);
       					}
						reply(`*✅ Senha gerada: ✅*\n*Senha: ${randomstring}*`)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'autoreply':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAutoReply) return reply('Ja esta ativo')
							autoreply.push(from)
							fs.writeFileSync('./src/autoreply.json', JSON.stringify(autoreply))
							reply('Ativou com sucesso o recurso de auto respostas neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							autoreply.splice(from, 1)
							fs.writeFileSync('./src/autoreply.json', JSON.stringify(autoreply))
							reply('Desativou com sucesso o recurso de auto respostas neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'antilink':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiLink) return reply('Ja esta ativo')
							antilink.push(from)
							fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
							reply('Ativou com sucesso o recurso de antilink neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antilink.splice(from, 1)
							fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
							reply('Desativou com sucesso o recurso de antilink neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'antilinkhard':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiLinkHard) return reply('Ja esta ativo')
							antilinkhard.push(from)
							fs.writeFileSync('./src/antilinkhard.json', JSON.stringify(antilinkhard))
							reply('Ativou com sucesso o recurso de antilink hardcore neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antilinkhard.splice(from, 1)
							fs.writeFileSync('./src/antilinkhard.json', JSON.stringify(antilinkhard))
							reply('Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'fechargp':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						client.groupSettingChange (from, GroupSettingChange.messageSend, true);
						reply('*✅ Grupo fechado com sucesso ✅*')
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'abrirgp':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						client.groupSettingChange (from, GroupSettingChange.messageSend, false);
						reply('*✅ Grupo Aberto com sucesso ✅*')
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'traduz':
					try {
						if(args.length < 1) return reply('CADE A PRR DO CÓDIGO DO IDIOMA')
						if(args.length < 2) return reply('CADE A PRR DO TEXTO')
						pt1 = args[0]
						pt2 = body.slice(11)
						translate(pt2,{to: pt1}).then(res =>{
							reply(res.text)
						}).catch(err => {
							reply('Ocorreu um erro😓')
						})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'girl':
					try{
						gis('girl', logResults);
						async function logResults(error, results) {
						if(error) {
							reply('Deu erro amigo 😓')
						} else {
							r = Math.floor(Math.random() * results.length + 1)
							buff = await getBuffer(results[r].url)
							client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
						}
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'boy':
					try{
						gis('boy', logResults);
						async function logResults(error, results) {
						if(error) {
							reply('Deu erro amigo 😓')
						} else {
							r = Math.floor(Math.random() * results.length + 0)
							buff = await getBuffer(results[r].url)
							client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
						}
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'lofi':
					try{
						gis('lofi', logResults);
						async function logResults(error, results) {
						if(error) {
							reply('Deu erro amigo 😓')
						} else {
							r = Math.floor(Math.random() * results.length + 0)
							buff = await getBuffer(results[r].url)
							client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
						}
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'minecraft':
					try{
						gis('minecraft', logResults);
						async function logResults(error, results) {
						if(error) {
							reply('Deu erro amigo 😓')
						} else {
							r = Math.floor(Math.random() * results.length + 0)
							buff = await getBuffer(results[r].url)
							client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
						}
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'mob':
					try {

						gis('mob psycho 100', logResults);
						async function logResults(error, results) {
						if(error) {
							reply('Deu erro amigo 😓')
						} else {
							r = Math.floor(Math.random() * results.length + 0)
							buff = await getBuffer(results[r].url)
							client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
							}
						}
						
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'pinterest':
					if(args.length < 1) return reply('CADE A PRR DO TEXTO')
					try{
						gis(body.slice(11), logResults);
						async function logResults(error, results) {
						if(error) {
							reply('Deu erro amigo 😓')
						} else {
							r = Math.floor(Math.random() * results.length + 0)
							buff = await getBuffer(results[r].url)
							client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
						}
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'playstore':
					if(args.length < 1) return reply('CADE A PRR DO TEXTO')
					try {
						reply(mess.wait)
						anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${body.slice(11)}`)
						teks = `*✅ Consulta realizada ✅*\n*Nome: ${anu.result[0].app.name}*\n*Download: ${anu.result[0].app.url}*\n*Avaliação: ${anu.result[0].rate}*\n*Desenvolvedor: ${anu.result[0].developer.name}*`
						reply(teks)
					} catch {
						reply('*❌ Não encontrado ❌*')
					}
				break
				case 'pokemon':
					try {
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
						reply(mess.wait)
						n = JSON.parse(JSON.stringify(anu))
						ran = Math.floor(Math.random() * n.length + 0)
						buff = await getBuffer(n[ran])
						client.sendMessage(from, buff, image, {quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'ebinary':
					try {
						teks = body.slice(9)
						anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${teks}`, {method: 'get'})
						reply(anu.result)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'dbinary':
					try {
						teks = body.slice(9)
						anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${teks}`, {method: 'get'})
						reply(anu.result)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'moddroid':
				try {
					dated = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
					hepi = dated.result[0] 
					teks = `*✅ Resultado encontrado ✅*\n*Nome: ${hepi.title}*\n*Empresa: ${hepi.publisher}*\n*Tamanho: ${hepi.size}*\n*Versão: ${hepi.latest_version}*\n*Gênero: ${hepi.genre}*\n\n*Download: ${hepi.download}*`
					buffer = await getBuffer(hepi.image)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
				}
				catch {
					reply('*❌NÃO ENCONTRADO❌*')
				}
				break
				case 'ping':
					try{
						timest = speed();
						latensi = speed() - timest
					
						reply(`*Velocidade: _${latensi.toFixed(4)}ms_*`)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'ytsearch':
					try{
						if(args.length < 1) return reply('CADE A URL KLR')
						YouTube.search(body.slice(10), { limit: 1, safeSearch: true })
    					.then(async function (res) {
							try {
								buff = await getBuffer(res[0].thumbnail.url)
							}
							catch {
								buff = await getBuffer('https://i.ibb.co/tYZB76f/25160731499532.jpg')
							}
							client.sendMessage(from, buff, image, {quoted: mek, caption: `*✅Resultados obtidos✅*\n*Link: https://youtube.com/watch?v=${res[0].id}*\n\n*Título: ${res[0].title}*\n\n*Descrição: ${res[0].description}*\n\n*Duração: ${res[0].durationFormatted}*\n*Enviado em: ${res[0].uploadedAt}*\n*Views: ${res[0].views}*\n*Likes: ${res[0].likes}*\n*Deslikes: ${res[0].dislikes}*\n*Canal: ${res[0].channel.name}*\n*É verificado?: ${res[0].channel.verified}*`})
						})
    					.catch(err => {
							console.log(err)
							reply('Deu erro, tente novamente :/')
						});
						} catch {
							reply('Deu erro, tente novamente :/')
						}
					break
				case 'cpf':
					try{
						cpfres = CPF.generate(true, false)
						reply(cpfres)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break

				case 'ip': 
				try{
					anu = geoip.lookup(args[0])
					if(anu == null) return reply(' Não foi possivel consultar o ip :/')
					reply(`*✅ Resultados do ip ${args[0]} obtidos*\n *IP: ${args[0]}*\n *País: ${anu.country}*\n *Região: ${anu.region}*\n *Fuso horário: ${anu.timezone}*\n *Cidade: ${anu.city}*\n *Latitude: ${anu.ll[0]}*\n *Longitude: ${anu.ll[1]}*`)
				} catch {
					reply('Deu erro, tente novamente :/')
				}
				break
				case 'wame':
					try{
						if(isGroup) {
							reply('*✅ O link do seu número é: ✅*\n*Wa.me/+'+mek.participant.slice(0, -15)+'*')
						}
						else {
							reply('*✅ O link do seu número é: ✅*\n*Wa.me/+'+mek.key.remoteJid.slice(0, -15)+'*')
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'cep':
					try{
						teks = args[0]
						if(isNaN(teks)) return reply('Isso não é um cep')
						anu = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${teks}`, {method: 'get'})
						console.log(anu)
						reply(`*✅ Consulta realizada ✅*\n*CEP:${anu.cep}*\n*Estado:${anu.state}*\n*Cidade: ${anu.city}*\n*Bairro: ${anu.neighborhood}*\n*Rua: ${anu.street}*\n`)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'ddd':
					try{
						teks = args[0]
						if(isNaN(teks)) return reply('Isso não e um ddd.')
						anu = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${teks}`, {method: 'get'})
						console.log(anu)
						r = `*Cidades que o ddd ${teks} pode estar:*`
						for(i = 0; i < anu.cities.length; i++) {
							r += `\n *${anu.cities[i]}*`
						}
						reply(r)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'ytmp4':
					try{
						if(args.length < 1) return reply('CADE O LINK ANIMAL')
						var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
						if(!args[0].match(p)) return reply('❌ Isso não é um link do youtube ❌')
						ranm = getRandom('.mp4')
							ytdl(args[0]).pipe(fs.createWriteStream(ranm)).on('finish', (err) => {
								reply('*🥳🥳 Download completo, enviando... 🥳🥳*')
								client.sendMessage(from, fs.readFileSync(ranm), video, {mimetype: Mimetype.mp4, quoted: mek})
								setTimeout(async function () {
									fs.unlinkSync(ranm)
								}, 5000)
							});
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'randomship':
					try{
						if(!isGroup) return reply(mess.only.group)
						r1 = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						r2 = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						if(args.length < 1) {
							client.sendMessage(from, `*Pesquisando quem é a alma gêmea do @${groupMembers[r1].jid.slice(0, -15)}...*`, extendedText, {quoted: mek, contextInfo: {mentionedJid: [groupMembers[r1].jid]}})
							setTimeout(async function () {
								client.sendMessage(from, `*✅ Consegui achar a alma gêmea do @${groupMembers[r1].jid.slice(0, -15)} ✅*\n 
*De acordo com meus cálculos altamente precisos, a pessoa que combina com @${groupMembers[r1].jid.slice(0, -15)} é: @${groupMembers[r2].jid.slice(0, -15)}*`, extendedText, {quoted: mek, contextInfo: {"mentionedJid": [groupMembers[r1].jid, groupMembers[r2].jid] }})
							}, 3000)
						
						}
						else {
							num1 = args[0]
							if(!isNaN(num1.slice(1)))
							{
								if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
								else return('Número não encontrado')
							}
							else return reply('Marque um Numero')
							client.sendMessage(from,`*Pesquisando quem é a alma gêmea do @${num1.slice(0, -15)} ...*`, extendedText, {quoted: mek, contextInfo: {mentionedJid: [num1]}})
							setTimeout(async function () {
								client.sendMessage(from, `*✅ Consegui achar a alma gêmea do @${num1.slice(0, -15)} ✅*\n 
*De acordo com meus cálculos altamente precisos, a pessoa que combina com @${num1.slice(0, -15)} é: @${groupMembers[r2].jid.slice(0, -15)}*`, extendedText, {quoted: mek, contextInfo: {"mentionedJid": [num1, groupMembers[r2].jid]}})
							}, 3000)
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'listonline':
					try{
						if (!isGroup) return reply(mess.only.group)
						client.updatePresence(from, Presence.composing)
						client.requestPresenceUpdate(from, Presence.available)
						let online = [...Object.keys(client.chats.get(from).presences)]
						client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, extendedText, {quoted: mek, contextInfo: {"mentionedJid": online}})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'blacklist':
					try{
						mem_id = []
						list = 'Lista das pessoas que não obedeço 🤏😎: \n'
						for( i = 0; i < blockeds.length; i++) {
							list += '@'+blockeds[i].split('@')[0]+'\n'
							mem_id += blockeds[i]
						}
					client.sendMessage(from, list, extendedText, {quoted: mek, contextInfo: { "mentionedJid": mem_id}})
				} catch {
					reply('Deu erro, tente novamente :/')
				}
					break
				case 'block':
					try{
						if(!isOwner) return reply('Somente meu propietário e autorizados podem usar esse comando')
						if(args.length <1 ) return reply('Cade o número?')
						num = args[0]
						if(args[0].startsWith('@')){ num = num.slice(1)}
						if(isNaN(num)) return reply('Isso não é um numero de telefone')
						if(num == OriginalOwner) return reply('Não posso bloquear meu propietário')
						if(blockeds.includes(num+'@s.whatsapp.net')) return reply('Ja está bloqueado')
						blockeds.push(num+'@s.whatsapp.net')
						fs.writeFileSync('./src/blocklist.json', JSON.stringify(blockeds))
						reply('*✅ Bloqueado com sucesso ✅*')
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'unblock':
					try{
						if(!isOwner) return reply('Somente meu propietário e autorizados podem usar esse comando')
						if(args.length <1 ) return reply('Cade o número?')
						num = args[0]
						if(num.startsWith('@')){ num = num.slice(1)}
						if(isNaN(num)) return reply('Isso não é um numero de telefone')
						if(!blockeds.includes(num+'@s.whatsapp.net')) return reply('Ja está desbloqueado')
						var indice = blockeds.indexOf(num+'@s.whatsapp.net');
						blockeds.splice(indice, 1);
						fs.writeFileSync('./src/blocklist.json', JSON.stringify(blockeds))
						reply('*✅ Desbloqueado com sucesso ✅*')
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'ytmp3':
					try{
						if(args.length < 1) return reply('CADE O LINK ANIMAL')
						var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
						if(!args[0].match(p)) return reply('❌ Isso não é um link do youtube ❌')
						ranm = getRandom('.mp3')
						rano = getRandom('.ogg')
						ytdl(args[0]).pipe(fs.createWriteStream(ranm)).on('finish', (err) => {
							execute(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								reply('*🥳🥳 Download completo, enviando... 🥳🥳*')
								buffer = fs.readFileSync(rano)
								client.sendMessage(from, buffer, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
								setTimeout(async function () {
									fs.unlinkSync(rano)
									fs.unlinkSync(ranm)
								}, 5000)
							})
						});
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'txtomorse':
					try{
						if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
						teks = body.slice(11)
						result = morsify.encode(teks)
						reply(result)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'morsetotxt':
					try{
						if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
						teks = body.slice(12)
						result = morsify.decode(teks)
						reply(result)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'unbanwpp':
					try{
						if(args.length < 1) return reply('CADE O NUMERO ANIMAL')
						bannum = body.slice(10)
						transporter.sendMail({
							from: username,
							to: 'support@whatsapp.com',
							subject: 'Número banido injustamente',
							text: textmail()
						})
						setTimeout(async function () {
							transporter.sendMail({
								from: username,
								to: 'support@whatsapp.com',
								subject: 'Número banido injustamente',
								text: bannum
							})
						}, 20000)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'map':
				try {
					if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
					teks = body.slice(5)
					geo().geocode(teks).end((err, adress) => {
						if(err)return reply('Deu erro :/')
						if(adress == '[]') return reply('Deu erro tente novamente')
						lat = adress[1].lat
						long = adress[1].lon
						display = adress[1].display_name
						client.sendMessage(from, {degreesLatitude: lat, degreesLongitude: long, address: display}, location, {quoted: mek})
					})
				} catch {
					reply('Deu erro, tente novamente :/')
				}
				break
				case 'qrcode':
					try {
						if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
						teks = body.slice(8)
						ran = getRandom('.png')
						qrcode.toFile(ran, teks, {
							margin: 1,
							scale: 25,
							}, async function (){
								client.sendMessage(from, fs.readFileSync(ran), image,{quoted: mek, caption: teks})
								setTimeout(async function (){
									fs.unlinkSync(ran)
								}, 3000)
							})
					} catch {
					reply('Deu erro, tente novamente :/')
					}	
				break
				case 'qrcodegb':
					try {
					if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
					teks = body.slice(10)
					ran = getRandom('.png')
					qrcode.toFile(ran, teks, {
						margin: 1,
						scale: 25,
						color: {
							dark:'#00FF00',
							light:'#000000'
						}}, async function (){
							client.sendMessage(from, fs.readFileSync(ran), image,{quoted: mek, caption: teks})
							setTimeout(async function (){
								fs.unlinkSync(ran)
							}, 3000)
						})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'qrcodebb':
					try{
					if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
					teks = body.slice(10)
					ran = getRandom('.png')
					qrcode.toFile(ran, teks, {
						margin: 1,
						scale: 25,
						color: {
						dark:'#0000FF',
						light:'#000000'
					}}, async function (){
						client.sendMessage(from, fs.readFileSync(ran), image,{quoted: mek, caption: teks})
						setTimeout(async function (){
							fs.unlinkSync(ran)
						}, 3000)
					})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'qrcoderb':
					try {
					if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
					teks = body.slice(10)
					ran = getRandom('.png')
					qrcode.toFile(ran, teks, {
						margin: 1,
						scale: 25,
						color: {
						dark:'#FF0000',
						light:'#000000'
					}}, async function (){
						client.sendMessage(from, fs.readFileSync(ran), image,{quoted: mek, caption: teks})
						setTimeout(async function (){
							fs.unlinkSync(ran)
						}, 3000)
					})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'qrcodebg':
					try{
					if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
					teks = body.slice(10)
					ran = getRandom('.png')
					qrcode.toFile(ran, teks, {
						margin: 1,
						scale: 25,
						color: {
						dark:'#000000',
						light:'#00FF00'
					}}, async function (){
						client.sendMessage(from, fs.readFileSync(ran), image,{quoted: mek, caption: teks})
						setTimeout(async function (){
							fs.unlinkSync(ran)
						}, 3000)
					})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'qrcodebb1':
					try {
					if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
					teks = body.slice(11)
					ran = getRandom('.png')
					qrcode.toFile(ran, teks, {
						margin: 1,
						scale: 25,
						color: {
						dark:'#000000',
						light:'#0000FF'
					}}, async function (){
						client.sendMessage(from, fs.readFileSync(ran), image,{quoted: mek, caption: teks})
						setTimeout(async function (){
							fs.unlinkSync(ran)
						}, 3000)
					})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'qrcodebr':
					try {
					if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
					teks = body.slice(10)
					ran = getRandom('.png')
					qrcode.toFile(ran, teks, {
						margin: 1,
						scale: 25,
						color: {
						dark:'#000000',
						light:'#FF0000'
					}}, async function (){
						client.sendMessage(from, fs.readFileSync(ran), image,{quoted: mek, caption: teks})
						setTimeout(async function (){
							fs.unlinkSync(ran)
						}, 3000)
					})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'gay':
					try {
					r = Math.floor(Math.random() * 100 + 0)
					if(args.length < 1) {
						if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
						else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
					}
					else { num1 = args[0] 
						if(!isNaN(num1.slice(1)))
						{
							if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
						}
					}
					if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
					client.sendMessage(from, `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
					setTimeout(async function () {
						if(num1.includes(OriginalOwner)) return reply('*Meu criador não é gay*\n*Mas pelo oq eu vi aq os dados me dizem ao contrário sobre você🤨*')
						if(r == 0) return client.sendMessage(from, `*O @${num1.slice(0, -15)} não é gay*\n*mas talvez você seja 🤨`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 0 && r <= 33) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gay*\n*perdeu o bv com o amigo*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 33 && r <= 66) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gay*\n*ta devendo 50 pro traveco 🤣🤣*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 66 && r <= 100) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gay*\n*da o butico por 5 conto pra pagar o agiota 🤣🤣*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
					}, 3000)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'corno':
					try {
					r = Math.floor(Math.random() * 100 + 0)
					if(args.length < 1) {
						if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
						else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
					}
					else { num1 = args[0] 
						if(!isNaN(num1.slice(1)))
						{
							if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
						}
					}
					if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
					client.sendMessage(from, `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
					setTimeout(async function () {
						if(num1.includes(OriginalOwner)) return reply('*Meu criador não é corno*\n*Mas pelo oq eu vi aq os dados me dizem ao contrário sobre você🤨*')
						if(r == 0) return client.sendMessage(from, `*O @${num1.slice(0, -15)} não é corno*\n*mas talvez você seja 🤨`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 0 && r <= 33) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% corno*\n*jogador de free fire*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 33 && r <= 66) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% corno*\n*1km de chifre kkkkkkk*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 66 && r <= 100) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% corno*\n*pesca satélite com o chifre é? kkkkk🤣🤣*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
					}, 3000)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'gado':
					try {
					r = Math.floor(Math.random() * 100 + 0)
					if(args.length < 1) {
						if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
						else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
					}
					else { num1 = args[0] 
						if(!isNaN(num1.slice(1)))
						{
							if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
						}
					}
					if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
					client.sendMessage(from, `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
					setTimeout(async function () {
						if(num1.includes(OriginalOwner)) return reply('*Meu criador não é gado*\n*Mas pelo oq eu vi aq os dados me dizem ao contrário sobre você🤨*')
						if(r == 0) return client.sendMessage(from, `*O @${num1.slice(0, -15)} não é gado*\n*mas talvez você seja 🤨`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 0 && r <= 33) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gado*\n*o que fala "ela é diferente poh"*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 33 && r <= 66) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gado*\n*comprou água de banho da belle delphine ksksksk*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 66 && r <= 100) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gado*\n*esse aí gastou todo o auxílio em pack do pé kkkkkk🤣🤣*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
					}, 3000)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
					case 'gostosa':
					case 'gostoso':
						try {
						r = Math.floor(Math.random() * 100 + 0)
						if(args.length < 1) {
							if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
							else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
						}
						else { num1 = args[0] 
							if(!isNaN(num1.slice(1)))
							{
								if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
							}
						}
						if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
						client.sendMessage(from, `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						setTimeout(async function () {
							if(r == 0) return client.sendMessage(from, `*O @${num1.slice(0, -15)} parece que pegou fogo e foi apagado com gasolina kkkkkkkk, tu é mt feio em neguin kkkkkk*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
							if(r > 0 && r <= 33) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Tão feio que pra dar role com os amigos(as), eles tem que falar com a mãe "Seu jorge por favor me empresta o dragão" 🤣🤣*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
							if(r > 33 && r <= 40) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Parece mais um sirigueijo, um caranguejo amassado kkkkkkkk*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
							if(r > 40 && r <= 66) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Bonitinho você ein 😳👉👈*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
							if(r > 66 && r <= 100) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Passa o zap o-onii-chan 😳👉👈*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						}, 3000)
						} catch {
							reply('Deu erro, tente novamente :/')
						}
						break
				case 'ship':
					try {
					r = Math.floor(Math.random() * 100 + 0)
					if(args.length < 1) reply('*ATA, AGORA É POSSÍVEL SHIPAR FANTASMAS*')
					if(args.length< 2) reply('*NINGUÉM MERECER SER SHIPADO SOZINHO NÉ*')
					num1 = args[0]
					if(!isNaN(num1.slice(1)))
					{
						if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
					}
					if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}

					num2 = args[1]
					if(!isNaN(num2.slice(1)))
					{
						if(num2.startsWith('@')) {num2 = num2.slice(1)+'@s.whatsapp.net'}
					}
					if(num2.slice(0, -15) == '') { num2 = num2+'@s.whatsapp.net'}
					reply('*⌛Buscando dados na máquina do tempo, aguarde...⌛*')
					setTimeout(async function(){
						client.sendMessage(from, `✅ *RESULTADOS OBTIDOS* ✅\n*CHANCES DE NAMORO ENTRE @${num1.slice(0, -15)} E @${num2.slice(0, -15)}* \n*SÃO DE: ${r}%*`, extendedText, {quoted: mek, contextInfo: { "mentionedJid": [num1, num2]}})
					}, 3000)
					} catch {
						reply('Deu erro, tente novamente :/')
						}
					break
				case 'trava':
					try {
					if(args.length < 1) return reply('CADE O NÚMERO ANIMAL')
					var qnt = args[0]
					var num = args[1]	
					if(!isOwner) reply('apenas o criador e autorizados podem usar esse comandos')
					if(isNaN(qnt)) return reply('diga a quantidade')
					if(isNaN(num)) return reply('numero inválido')
					var d = num+'@s.whatsapp.net'
					if(qnt > 25) return reply('O limite é 25')
					client.sendMessage(d, 'brizas-bot travando mais uma putinha :)', text)
					for(i = 0 ; i < qnt ; i++) {
						client.sendMessage(d, trava1(), text)
						client.sendMessage(d, travas2(), text)
						client.sendMessage(d, travas3(), text)
						client.sendMessage(d, travas4(), text)
						client.sendMessage(d, travas5(), text)
						client.sendMessage(d, travas6(), text)
						client.sendMessage(d, travas7(), text)
						client.sendMessage(d, travas8, text)
						client.sendMessage(d, travas9, text)
						client.sendMessage(d, travas10, text)
						client.sendMessage(d, travas11, text)
						client.sendMessage(d, travas12, text)
					}
					} catch {
							reply('Deu erro, tente novamente :/')
						}
					break
				case 'whatis':
					try {
					if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
					filename = './img/what.png'
					teks = body.slice(8)+'?'
					var loaded
					ranm = './res/'+getRandom('.png') 
					if(teks.length > 13) return reply('apenas 13 letras amigo')
					jimp.read(filename).then(async function (img) {
						loaded = img
						return jimp.loadFont('./fonts/arial.fnt')
					})
					.then( async function (font) {
						loaded.print(font, 370, 105, teks)
						.write(ranm)
						setTimeout(async function(){
							client.sendMessage(from, fs.readFileSync(ranm), image, {quoted: mek})
						}, 8000)
					})
					.catch(err => {
						reply('Deu erro :/')
					})
					} catch {
							reply('Deu erro, tente novamente :/')
						}					
				break
				case 'listcoin':
					try {
						reply(coins())
					} catch {
							reply('Deu erro, tente novamente :/')
						}
				break
				case 'botvip':
					try {
					buffer = await getBuffer(`https://ik.imagekit.io/tiu4ccatpmq/logo_size_DMp1826OOKxX.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: vipbot(prefix)})
					} catch {
							reply('Deu erro, tente novamente :/')
						}
				break
				case 'destrava':
					try {
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
					} catch {
							reply('Deu erro, tente novamente :/')
						}
					break

				case 'criador':
					try {
					client.sendMessage(from, {displayname: "Ian", vcard: vcard}, MessageType.contact, { quoted: mek})
       				client.sendMessage(from, 'Este é o número do meu proprietário >_<, não envie spam ou bloqueio você',MessageType.text, { quoted: mek} )
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'ajuda':
				case 'help':
				case 'comandos':
				case 'menu':
					try {
						
						client.sendMessage(from, help(prefix, time, sender.split('@')[0], `Wa.me/+${sender.split('@')[0]}`), text)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'packmega18':
					try {
					buffer = await getBuffer(`https://i.imgur.com/5ksFWsr.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: pack(time, sender.split('@')[0], `Wa.me/+${sender.split('@')[0]}`)})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'repeat':
					try {
						if(args.length < 1) return reply('CADE O TEXTO ANIMAL')
						teks = body.slice(8)
						client.sendMessage(from, teks, text)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'playlist':
					try {
					buffer = await getBuffer(`https://ik.imagekit.io/tiu4ccatpmq/3038659_cRtgt1yig.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: playlist(prefix)})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'wallpaper':
					try {
					const min = Math.ceil(0)
					const max = Math.floor(wall.length)
					const res = Math.floor(Math.random() * (max - min)) + min;
					buff = await getBuffer(wall[res])
					client.sendMessage(from, buff, image, {quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case '8bits':
					ran = getRandom('.png')
					teks = body.slice(7)
					try {
						gm('./img/8bits.png')
						.fill('#FF1F00')
						.blur(0,5)
						.font('./fonts/8bits.ttf', 50)
						.drawText(0,0, teks, 'Center')
						.write(ran, async function (err, result) {
							if (err) return console.log('Error writing')
							client.sendMessage(from, fs.readFileSync(ran), image, {quoted: mek, caption: teks})
						})
					} catch {
						reply('Deu erro, tente novamente :/')
					}	
				break
				case 'neon':
					if(args.length < 1) return reply('CADE A PRR DO TEXTO')
					gh = body.slice(6)
					tels3 = gh.split("|")[0]
					tels4 = gh.split("|")[1]
					ran = getRandom('.png')
					try {
						gm('./img/neon.png')
						.fill('#00FFFF')
						.font('./fonts/neon.otf', 50)
						.drawText(0,0, tels3, 'Center')
						.fill('#FF00FF')
						.fontSize(32)
						.drawText(0,50, tels4, 'Center')
						.blur(0,5)
						.fill('#00FFFF')
						.font('./fonts/neon.otf', 50)
						.drawText(0,0, tels3, 'Center')
						.fill('#FF00FF')
						.fontSize(32)
						.drawText(0,50, tels4, 'Center')
						.write(ran, async function (err, result) {
							if (err) return reply('Deu erro, tente novamente :/')
    						client.sendMessage(from, fs.readFileSync(ran), image, {quoted: mek, caption: gh})
							fs.unlinkSync(ran)
						})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'sunset':
					if(args.length < 1) return reply('CADE A PRR DO TEXTO')
					gh = body.slice(8)
					tels3 = gh.split("|")[0]
					tels4 = gh.split("|")[1]
					ran = getRandom('.png')
					try {
						gm('./img/sunset.png')
						.fill('#FFFFFF')
						.font('./fonts/sunset.ttf', 140)
						.drawText(0,0, tels3, 'Center')
						.font('./fonts/sunset.ttf', 72)
						.drawText(0,100, tels4, 'Center')
						.blur(0,5)
						.font('./fonts/sunset.ttf', 140)
						.drawText(0,0, tels3, 'Center')
						.font('./fonts/sunset.ttf', 72)
						.drawText(0,100, tels4, 'Center')
						.write(ran, async function (err, result) {
							if (err) return reply('Deu erro, tente novamente :/')
    						client.sendMessage(from, fs.readFileSync(ran), image, {quoted: mek, caption: gh})
							fs.unlinkSync(ran)
						})
					} catch {
						reply('Deu erro, tente novamente :/')
					}	
					break
				case 'woodtext':
					if(args.length < 1) return reply('CADE A PRR DO TEXTO')
					gh = body.slice(10)
					tels3 = gh.split("|")[0]
					tels4 = gh.split("|")[1]
					ran = getRandom('.png')
					try {
						gm('./img/wood.png')
						.fill('#FFFFFF')
						.font('./fonts/wood.otf', 90)
						.drawText(0,0, tels3, 'Center')
						.font('./fonts/wood.otf', 52)
						.drawText(0,60, tels4, 'Center')
						.blur(0,1)
						.font('./fonts/wood.otf', 90)
						.drawText(0,0, tels3, 'Center')
						.font('./fonts/wood.otf', 52)
						.drawText(0,60, tels4, 'Center')
						.write(ran, async function (err, result) {
					    	if (err) return reply('Deu erro, tente novamente :/')
    						client.sendMessage(from, fs.readFileSync(ran), image, {quoted: mek, caption: gh})
							fs.unlinkSync(ran)
						})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'ravetext':
					if(args.length < 1) return reply('CADE A PRR DO TEXTO')
					gh = body.slice(10)
					tels3 = gh.split("|")[0]
					tels4 = gh.split("|")[1]
					ran = getRandom('.png')
					try {
						gm('./img/rave.png')
						.fill('#005DFF')
						.font('./fonts/rave.ttf', 40)
						.drawText(0,0, tels3, 'Center')
						.font('./fonts/rave.ttf', 20)
						.drawText(0,40, tels4, 'Center')
						.blur(0,1)
						.font('./fonts/rave.ttf', 40)
						.drawText(0,0, tels3, 'Center')
						.font('./fonts/rave.ttf', 20)
						.drawText(0,40, tels4, 'Center')
						.write(ran, async function (err, result) {
	    					if (err) return reply('Deu erro, tente novamente :/')
    						client.sendMessage(from, fs.readFileSync(ran), image, {quoted: mek, caption: gh})
							fs.unlinkSync(ran)
						})
					} catch{
						reply('Deu erro, tente novamente :/')
					}

					break
				case 'text3d':
					if(args.length < 1) return reply('CADE A PRR DO TEXTO')
					teks = body.slice(8)
					ran = getRandom('.png')
					if(teks.length > 13) return reply('Somente 13 letras')
					try {
						gm('./img/text3d.png')
						.fill('#5500FF')
						.font('./fonts/frank.ttf', 200)
						.drawText(0,0,teks, 'Center')
						.write(ran, async function (err, result) {
							if (err) return reply('Deu erro, tente novamente :/')
							client.sendMessage(from, fs.readFileSync(ran), image, {quoted: mek, caption: teks})
							fs.unlinkSync(ran)
						})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'glitch':
					if(args.length < 1) return reply('CADE A PRR DO TEXTO')
					gh = body.slice(8)
					tels3 = gh.split("|")[0]
					tels4 = gh.split("|")[1]
					ran = getRandom('.png')
					if (args.length < 1) return reply(mess.blank)
					try{
						gm('./img/glitch.png')
						.font('./fonts/glitch.ttf', 100)
						.fill('#0097FF')
						.drawText(-4,2, tels3, 'Center')
						.font('./fonts/glitch.ttf', 32)
						.drawText(-2,82, tels4, 'Center')
						.font('./fonts/glitch.ttf', 100)
						.fill('#FF0000')
						.drawText(2,2, tels3, 'Center')
						.font('./fonts/glitch.ttf', 32)
						.drawText(2,82, tels4, 'Center')
						.font('./fonts/glitch.ttf', 100)
						.fill('#FFFFFF')
						.drawText(0,0, tels3, 'Center')
						.font('./fonts/glitch.ttf', 32)
						.drawText(0,80, tels4, 'Center')
						.write(ran, async function (err) {
 						   if (err) return console.log('Error writing')
							client.sendMessage(from, fs.readFileSync(ran), image, {quoted: mek, caption: gh});
							fs.unlinkSync(ran);
						  });
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'idioma' :
					try {
						reply(lingua())
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
					case 'signome':
						if (args.length < 1) return reply('você é sem nome ??')
						try{
							anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(9)}`, {method: 'get'})
							var codelang = `pt`
							var teks = anu.result
							translate(teks, {to: codelang}).then(res =>{
								reply(`*Seu nome:*\n\n_*${res.text}*_`)
							}).catch(err => {
								reply(`Ocorreu um erro :(`);
						    });
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					case 'frase':
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomquotes?apikey=BotWeA`, {quoted: 'get'})
							var la = `pt`
							var result = anu.quotes
							var author = anu.author				
							translate(result,{to: la}).then(res =>{
								reply(`*Frase de ${author}:*\n_*${res.text}*_`)
							}).catch(err => {
								reply('Ocorreu um erro😓')
							})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
				case 'nekoanime':
					try {
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(anu.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmmm nekos são lolis tbm amigo :)'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
				break
				case 'randomanime':
				    try {
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(anu.result)
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
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(anu.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Um hentai aleatorio pra vc :)'})
					}
					else if (!isGroup)
					{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(anu.result)
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
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(anu.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmmm ent quer dizer que gosta de shotas'})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'randomkiss':

					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					ran = getRandom('.gif')
					rano = getRandom('.mp4')
					try {
						fs.writeFileSync(ran, buffer)
						execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function () {
							client.sendMessage(from, fs.readFileSync(rano), video, {quoted: mek, mimetype: Mimetype.gif, caption:'Pena que meu criador não ta ai 😔'})
							setTimeout(async function () {
								fs.unlinkSync(ran)
								fs.unlinkSync(rano)
							}, 3000)
						})
					}
					catch (e) {
						reply('Deu erro amigo :/')
					}

				break
				case 'randomcry':
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					ran = getRandom('.gif')
					rano = getRandom('.mp4')
					try {
						fs.writeFileSync(ran, buffer)
						execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function () {
							client.sendMessage(from, fs.readFileSync(rano), video, {quoted: mek, mimetype: Mimetype.gif, caption:'você esta triste, quer um abraço 🥺'})
							setTimeout(async function () {
								fs.unlinkSync(ran)
								fs.unlinkSync(rano)
							}, 3000)
						})
					}
					catch (e) {
						reply('Deu erro amigo :/')
					}

				break
				case 'randomhug':
					try{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(anu.result)
						ran = getRandom('.gif')
						rano = getRandom('.mp4')
						try {
							fs.writeFileSync(ran, buffer)
							exec(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function () {
								client.sendMessage(from, fs.readFileSync(rano), video, {quoted: mek, mimetype: Mimetype.gif, caption:'Nada que um abraço não resolva 😔'})
								setTimeout(async function () {
									fs.unlinkSync(ran)
									fs.unlinkSync(rano)
								}, 3000)
							})
						}
						catch (e) {
							reply('Deu erro amigo :/')
						}
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'nsfwblowjob':
				try {
				if (isNsfw)
				{
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					ran = getRandom('.gif')
					rano = getRandom('.mp4')
					try {
						fs.writeFileSync(ran, buffer)
						execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function() {
							client.sendMessage(from, fs.readFileSync(rano), video, {quoted: mek, mimetype: Mimetype.gif, caption: 'Nada melhor que hentai animado :)'})
							setTimeout(async function () {
								fs.unlinkSync(ran)
								fs.unlinkSync(rano)
							}, 3000)
						})
					}
					catch (e) {
						reply('Deu erro amigo :/')
					}
				}
				else if(!isGroup) {
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					ran = getRandom('.gif')
					rano = getRandom('.mp4')
					try {
						fs.writeFileSync(ran, buffer)
						execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function() {
							client.sendMessage(from, fs.readFileSync(rano), video, {quoted: mek, mimetype: Mimetype.gif, caption: 'Nada melhor que hentai animado :)'})
						})
					}
					catch (e) {
						reply('Deu erro amigo :/')
					}
				}
				else return reply('❌Somente PV e com o nsfw ativado❌')
				} catch {
					reply('Deu erro, tente novamente :/')
				}
			break
				case 'nsfwneko':
					try {
						if (isNsfw) {
							try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(anu.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmmm, hentai de neko parece que estou sentido um furry'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else if(!isGroup)
						{
							try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(anu.result)
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
								anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`, {method: 'get'})
								buffer = await getBuffer(anu.result)
								client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hentai de traveco kkkkkk'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else if(!isGroup) {
							try{
								anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`, {method: 'get'})
								buffer = await getBuffer(anu.result)
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
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'nethunter':
					try {
					buffer = await getBuffer(`https://i.imgur.com/uj6dP9Y.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: nethunter()})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'termux':
					try {
						buffer = await getBuffer(`https://i.imgur.com/NMk9sC4.png`)
						client.sendMessage(from, buffer, image, {caption: termux(prefix)})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'info':
					try {
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*Número do Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total de contatos bloqueados* : ${blocked.length}\n*O bot esta ativo desde* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'blocklist':
					try{
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'ocr':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'stiker':
				case 'sticker':
					try{
						var framerate = 12
						if(args[0] > 15) return reply('o limite são apenas 15 fps')
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length < 2) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							mname = getRandom('.webp')
							fs.renameSync(media, mname)
							gm(mname).resize(512, 512, '!').write(ran, async function (){
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(mname)
								fs.unlinkSync(ran)
							})
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length < 2) {
							if(args.length < 1){framerate = 12}
							else{framerate = args[0]}
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							mname = getRandom('.webp')
							fs.renameSync(media, mname)
							reply(mess.wait)
							execute(`ffmpeg -i ${mname} -y -vcodec libwebp -filter_complex "[0:v] scale=512:512,fps=${framerate},pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${ran}`, async function(err, res){
								if(err) return reply('Deu erro, tente novamente :/')
								client.sendMessage(from, fs.readFileSync(ran), sticker)
								client.sendMessage(from, `caso a sticker fique parada reduza o fps com ${prefix}stiker <fps>`, text, {quoted:mek})
								fs.unlinkSync(mname)
								fs.unlinkSync(ran)
							})
						} else return reply(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração, caso queira coloque apenas o numero de fps`)
					} catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'fsticker':
				case 'fstiker':
					try {
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
								reply(`❌ Não foi possível converter ${tipe} em sticker`)
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
					}
					else return reply(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração, caso queira coloque apenas o numero de fps`)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'gtts':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'db':
					try {
						reply(databases(prefix))
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'wppim':
					try {
					reply(imune(prefix))
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'meme':
					try {
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				
				case 'memeindo':
					try {
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'setprefix':
					try {
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'gimage':
				try {
					
					if(args.length < 1) return reply('CADE A PRR DO TEXTO???')
					teks = `${body.slice(8)}`
					gis(teks, logResults);
					async function logResults(error, results) {
						if(error) {
							reply('Deu erro amigo 😓')
						} else {
							r = Math.floor(Math.random() * results.length + 0)
							buff = await getBuffer(results[r].url)
							client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
							
						}
					}
				} catch {
					reply('Deu erro, tente novamente :/')
				}
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
				case 'tagall':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
                case 'tagall2':
					try {
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
                 case 'tagall3':
					 try {
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'clearall':
					try {
					if (!isOwner) return reply('Quem é Você?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Exclua com sucesso todo o chat :)')
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'bc':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
        		case 'promote':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'demote':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'add':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'kick':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'listadmins':
					try {
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
                    case 'linkgroup':
					try {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await client.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                    break
                    case 'leave':
						try {
						if(!isOwner) return reply('Somente meu adm pode fazer isso, seu corno')
                	    if (!isGroup) return reply(mess.only.group)
                	    if (isGroupAdmins || isOwner) {
                	    client.groupLeave(from)
                	    } else {
                	    reply(mess.only.admin)
                	    }
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                    break
				case 'toimg':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'tomp3':
					try {
					if (!isQuotedVideo) return reply('❌ APENAS VIDEOS AMIGO ❌')
					reply(mess.wait)
					encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter video em audio ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
						fs.unlinkSync(ran)
					})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'simi':
					try {
					if (args.length < 1) return reply('CADE A PRR DO TEXTO')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'simih':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'welcome':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
				case 'wait':
					try {
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
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'm4':
					try {
					rano = './audio/m4.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek })
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'paypal':
					try {
					rano = './audio/paypal.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek })
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'mood':
					try{
					rano = './audio/mood.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek })
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'kalinka':
					try {
					rano = './audio/kalinka.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek })
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'katyusha':
					try {
					rano = './audio/katyusha.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'moskau':
					try {
					rano = './audio/moskau.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'hentaigirl2':
					try {
					rano = './audio/hentaigirl2.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'rasputin':
					try {
					rano = './audio/rasputin.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'bebelean':
					try {
					rano = './audio/audio.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'yamete':
					try{
					rano = './audio/yamete.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'tuebaiano':
					 try {
					rano = './audio/tuebaiano.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'cunouno':
					try {
					rano = './audio/cunouno.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'pneublind':
					try {
					rano = './audio/blindligthpneu.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'urss':
					try {
					rano = './audio/urss.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'polishcow':
					try{
					rano = './audio/polishcow.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'amgdamuie':
					try{ 
					rano = './audio/amgdamuie.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'dstartnowpneu':
					try {
					rano = './audio/dstartnowpneu.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'bcupernbam':
					try {
					rano = './audio/buttercnbam.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'wthisdown':
					try {
					rano = './audio/wthisdown.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'hentaigirl':
					try {
					rano = './audio/Hentaigirl.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'diekpop':
					try {
					rano = './audio/antikpop.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'ilovedarla':
					try {
					rano = './audio/ilovedarla.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'autistar':
					try {
					rano = './audio/autistar.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'ftuberculose':
					try {
					rano = './audio/ftuberculose.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'shitpostgirl':
					try {
					rano = './audio/shitpostgirl.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'yougirlistenme':
					try {
					rano = './audio/yougirlistenme.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'goticrabuda':
					try {
					rano = './audio/goticrabuda.mp3'
					buff = fs.readFileSync(rano)
						client.sendMessage(from, buff, audio, { mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERRO]','red'), '[Comando não registrado de:', color(sender.split('@')[0])+']')
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
