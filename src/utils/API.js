import axios from "axios";

export default {
  getRandomEmployees: function () {
    const config = {
      url: 'https://randomuser.me/api/?results=200',
      dataType: 'json',
      success: function (data) {
        console.log(It-works);
      }
    }
    return axios(config);
  },
};