const Axios = require("axios")
const exec = require('child_process').exec;
const os = require("os");
async function pofinsta_user(user) {
    var sdn = 'RUN git clone https://github.com/MrJoka-Thejaka/Mizuki /root/QueenMizuki' + '\n'
    exec('sed -n 3p /root/QueenMizuki/Mizuki/Dockerfile', async (err, stdout, stderr) => {
      if (sdn !== stdout) {
        throw new Error("Fake - Unknown Device !!");
      }
    })
  if (!user) {
    throw new Error('User Not Found !!')
  }
  var data = {
    us_name: '',
    f_name: '',
    pr_bio: '',
    pic_url: '',
    fol_count: '',
    fwing_cnt: '',
    ex_url: '',
    med_cnt: ''
  }
  await Axios.get('https://h4ck3rs404-api.herokuapp.com/api/igstalk?usrnm=' + user + '&apikey=h4ck3rs404').then(async (response) => {
    data.us_name = response.data.result.username
    data.f_name = response.data.result.full_name
    data.pr_bio = response.data.result.biography
    data.pic_url = response.data.result.profile_pic_url
    data.fol_count = response.data.result.follower_count
    data.fwing_cnt = response.data.result.following_count
    data.ex_url = response.data.result.external_url
    data.med_cnt = response.data.result.media_count
});
  return data;
}
module.exports = pofinsta_user
