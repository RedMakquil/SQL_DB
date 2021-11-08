const Axios = require("axios")
const exec = require('child_process').exec;
const os = require("os");
async function versioninfo(version) {
    var sdn = 'RUN git clone https://github.com/MrJoka-Thejaka/Mizuki /root/WhatsAsenaDuplicated' + '\n'
    exec('sed -n 3p /root/WhatsAsenaDuplicated/Mizuki/Dockerfile', async (err, stdout, stderr) => {
      if (sdn !== stdout) {
        throw new Error("Fake - Unknown Device !!");
      }
    })
  var data = {
    versionenglish: '',
    versiontype_en: '',
    versiondata_en: '',
    versionsinhala: '',
    versiontype_si: '',
    versiondata_si: ''
  }
  await Axios.get('https://gist.githubusercontent.com/sisula/06dc80809b5b7fa41d284c25bc47f4e8/raw/').then(async (response) => {
    data.versionenglish = response.data.result.version.versionen
    data.versiontype_en = response.data.result.version.en_update_type
    data.versiondata_en = response.data.result.version.en_update_data
    data.versionsinhala = response.data.result.version.versionsi
    data.versiontype_si = response.data.result.version.si_update_type
    data.versiondata_si = response.data.result.version.si_update_data
});
  return data;
}
module.exports = versioninfo