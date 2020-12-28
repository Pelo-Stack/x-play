function help(id, BotName, instagram, whatsapp, aktif, grupch1) => {
    return `
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
  
❉──────────❉
${BotName}
          
┏━━━━━❖•*FITUR*•❖━━━━━┓
┃➥ *!sticker*
┃➥ *!nulis <teks>*
┃➥ *!say <teks>*
┃➥ *!creator*
┃➥ *!collab*
┃➥ *!blocklist*
┃➥ *!say*
┃➥ *!ocr*
┃➥ *!ytmp3 <link>*
┃➥ *!igstalk @anggorgamep*
┃➥ *!ytmp4 <link>*
┃➥ *!twt <link>*
┃➥ *!tiktok <link>*
┃➥ *!wiki*
┃➥ *!sholat <daerah>* (fix bug)
┃➥ *!pict cewek*
┃➥ *!pict cowok*
┃➥ *!animepict*
┃➥ *!covid*
┃➥ *!lirik*
┃➥ *!alay*
┃➥ *!pasangan covad & covid*
┃➥ *!nama Alif*
┃➥ *!loli*
┃➥ *!indohot*
┃➥ *!tts <teks>*
┃➥ *!nsfwloli* (Privasi Chat aja)
┃➥ *!quran*
┃➥ *!quotes*
┃➥ *!info*
┃➥ *!donasi*
┃➥ *!readme* (untuk mengetahui fungsi ┃dan penggunaannya, WAJIB BACA!!)
┣━━━━━⊱*INFO*⊰━━━━✿
┃➥ *Masuk Sini yuk*😙 ${grupch1}
┃
┃➥ *Follow mimin yah* ${instagram}
┃
┃➥ *Creator BOT X-PLAY* ${whatsapp}
┃
┃➥ *Bot Aktif* ${aktif}
┃
┣━━━━━❖•*THANKS*•❖━━━━━

exports.help = help() 
function readme() {
     return `
*[!sticker] kirim foto beserta caption !sticker*
*[!nulis] kirim nulis beserta teksnya*
contoh : *!nulis tes untuk bot*
*[!blocklist] akan menampilkan berapa kontak yang bot blokir*
*[!ytmp3]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp3 https://youtu.be/Bskehapzke8*
*[!ytmp4]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp4 https://youtu.be/Bskehapzke8*
*[!igstalk]* Diisi dengan username Instagram yang valid, tanpa tanda “[” dan “]”
Contoh : *!igstalk @anggorgamep*
 Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *!tts id Test*
Note : Max 250 huruf

exports.readme = readme()
function donasi() {
      return `
donasi dulu om,, biar aktif terus bot nya:) 
OVO : 0895-4218-44942
PULSA : 0895-4218-44942
Thank You om><
exports.donasi = donasi()
function info () {
       return `
Author : Alif Maulana P
Designer : Alif Maulana P
Youtube : AnggorGAMEP
wa.me/6283870068641
exports.info = info() 