export async function getDummyEmployeeData(id) {
  try {
    let response = await fetch(
      `http://dummy.restapiexample.com/api/v1/employee/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "User-Agent":
            "Mozilla/5.0 (compatible; Rigor/1.0.0; http://rigor.com)",
          "Content-Type": "application/json"
        }
      }
    );
    if (response.status == 200) {
      let responseJson = await response.json();
      return responseJson;
    }
    if ((response.status <= 400) & (response.status > 500)) {
      return "Check Your Internet Connection";
    } else throw new Error("throw error");
  } catch (error) {
    return "Check Your Internet Connection";
  }
}

export function getUserInfo() {
  var url = "https://api.fyi.lk:8243/fyi/1.0.7/user/login";

  var data = {
    mobile: "0715606578",
    password: "135090p"
  };

  var obj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer ca787675-9bae-3ba8-8ca1-6584c72ef8f8"
    },
    body: JSON.stringify(data)
  };

  return fetch(url, obj)
    .then(response => response.json())
    .then(responseJson => {
      //console.log("Result  : ", responseJson);
    })
    .catch(error => {
      console.error("Error  : ", error);
    });
}

export function getAccessToken() {
  var url = "https://api.fyi.lk:8243/token";

  var headerDetails = {
    username: "ios",
    password: "4UNefreP",
    grant_type: "password",
    scope: "device_"
  };

  var formBody = [];
  for (var property in headerDetails) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(headerDetails[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  var obj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic dDBaY3hiSU9yRzllNlVqTEtCQjh2Q3NycjNNYTp1N3RyeEJ2OFJkZnRHV0RCa2xQSzRKQkl3V1Fh"
    },
    body: formBody
  };

  fetch(url, obj)
    .then(response => response.json())
    .then(responseJson => {
      console.log("Response Body " + JSON.stringify(responseJson));
    })
    .catch(error => {
      console.error(error);
    });
}
