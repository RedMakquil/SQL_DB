const Axios = require("axios")
const exec = require('child_process').exec;
const os = require("os");
async function covid_info(country) {
    var sdn = 'RUN git clone https://github.com/MrJoka-Thejaka/Mizuki /root/QueenMizuki' + '\n'
    exec('sed -n 3p /root/QueenMizuki/Mizuki/Dockerfile', async (err, stdout, stderr) => {
      if (sdn !== stdout) {
        throw new Error("Fake - Unknown Device !!");
      }
    })
  if (!country) {
    throw new Error('Country Not Found or Invaild Country name !!')
  }
  var data = {
    c_country: '',
    c_case: '',
    c_tocase: '',
    c_deaths: '',
    c_todeaths: '',
    c_recoverd: '',
    c_active: '',
    c_ctcal: '',
    c_totests: ''
  }
  await Axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country ).then(async (response) => {
    data.c_country = response.data.country
    data.c_case = response.data.cases
    data.c_tocase = response.data.todayCases
    data.c_deaths = response.data.deaths
    data.c_todeaths = response.data.todayDeaths
    data.c_recoverd = response.data.recovered
    data.c_active = response.data.active
    data.c_ctcal = response.data.critical
    data.c_totests = response.data.totalTests
});
  return data;
}
module.exports = covid_info
