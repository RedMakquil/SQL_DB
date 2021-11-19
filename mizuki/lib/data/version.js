const Axios = require("axios")
const exec = require('child_process').exec;
const os = require("os");
async function versioninfo(version) {
    var sdn = 'RUN git clone https://github.com/dinukahimsara1/Mizuki /root/QueenMizuki' + '\n'
    exec('sed -n 3p /root/QueenMizuki/Mizuki/Dockerfile', async (err, stdout, stderr) => {
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
  await Axios.get('https://gist.githubusercontent.com/dinukahimsara1/a4817eb1cb1cfb4c3dd662583a09ca9c/raw/00a468c1fc9243a8a699d5ded4356fc518c7746d/announsment.json').then(async (response) => {
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
