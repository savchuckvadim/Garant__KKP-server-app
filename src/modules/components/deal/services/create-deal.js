import {
  BX24
} from "bx24";
import axios from "axios";

function createDeal() {
  const bx24 = new BX24();

  const urlParams = new URLSearchParams(window.location.search);
  const baseUrl = `
    ${urlParams.get("PROTOCOL") === 0 ? "https" : "https"}://${urlParams.get("DOMAIN")} `;

  const createDealPromise = new Promise((resolve, reject) => {
    let id
    bx24.getAuth().then(auth => {
      axios({
        method: 'post',
        url: baseUrl + "/rest/crm.deal.add?auth=" + auth.ACCESS_TOKEN,
        data: {
          fields: {
            "ID": 56767,
            "TITLE": "Плановая продажа",
            "STAGE_ID": "GOODS",
            "STAGE_ID": "NEW",
            "COMPANY_ID": 3,
            "CONTACT_ID": 3,
            "OPENED": "Y",
            "ASSIGNED_BY_ID": 1,
            "PROBABILITY": 30,
            "CURRENCY_ID": "USD",
            "OPPORTUNITY": 5000,
            "CATEGORY_ID": 5,

            'UF_CRM_5B39D7C2EC0AB': true

          },
          params: {
            "REGISTER_SONET_EVENT": "Y"
          }
        }

      })


    }).then(response => {
      resolve(response.data.result);

    })

  });

  return createDealPromise;
}

export default createDeal;