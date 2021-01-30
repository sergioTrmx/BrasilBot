const { getRandom } = require('./lib/functions')
const tts = require('gtts')
var gtts = new tts('ola amigos', 'pt');
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtts.save(ranm, function (err, result){
    if(err) return console.log('erro')
    console.log('deu certo')
})