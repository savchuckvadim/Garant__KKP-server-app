import {
  BX24
} from "bx24";
import axios from "axios";

function getDeal(id) {
  const bx24 = new BX24();

  const urlParams = new URLSearchParams(window.location.search);
  const baseUrl = `
    ${urlParams.get("PROTOCOL") === 0 ? "https" : "https"}://${urlParams.get("DOMAIN")} `;

  const getDealPromise = new Promise((resolve, reject) => {

    bx24.getAuth().then(auth => {
      axios({
        method: 'post',
        url: baseUrl + "/rest/crm.deal.get?auth=" + auth.ACCESS_TOKEN,
        data: {
          id: id
        }
      })


    })

  });

  return getDealPromise;
}

export default getDeal;