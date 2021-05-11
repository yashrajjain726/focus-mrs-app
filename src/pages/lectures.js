import React, { useState, useEffect } from "react";
import MenuBar from "../components/menuBar";
import Tabs from "../components/tabs";

function Lectures() {
  const [ lectureList, setlectureList ] = useState([]);
  const axios = require("axios");
  useEffect(() => {
    async function fetchLectureList() {

      await axios({
        method: "get",
        url: "https://focusmrs.tech/focusmrs/api/lectures?page=1&limit=10",
        headers: {
          authorization:
            "eyJraWQiOiJvWEZxTUN4dWVLOUlKOUdvMTZCbVc0QXI4QWxXRFwvSDRUUHZ6ZytqcVI5Zz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZDljMzllNy0yOWFhLTQxZjUtOGU4MC01M2NkMzlhOGY5OTIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfRll5cUFIdWNhIiwiY29nbml0bzp1c2VybmFtZSI6ImFkOWMzOWU3LTI5YWEtNDFmNS04ZTgwLTUzY2QzOWE4Zjk5MiIsImdpdmVuX25hbWUiOiJTdHVkZW50IiwiYXVkIjoiNjd1NzRsY2txaWFodWVzYWo3ZzhvcmM3bm8iLCJldmVudF9pZCI6IjEwYzM4NDViLWVmOTktNDUyOC05ZjRjLTljZDcyODM0NDYzMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjIwNTkwNDExLCJleHAiOjE2MjA2NzY4MTEsImN1c3RvbTpyb2xlIjoic3R1ZGVudCIsImlhdCI6MTYyMDU5MDQxMSwiZmFtaWx5X25hbWUiOiJGb2N1c01SUyIsImVtYWlsIjoic3R1ZGVudEBmb2N1c21ycy50ZWNoIn0.jwVr0Su8HFrg7yH0jeMbexihN7hNDwQLl_14QB2WiRZSlIgvULD4M2QJhHHeYIvEUgjwq0WOw7msPbHNGrSMtvAe_my--6XLmq8sOlDwy3PNoGVJFkQDk00i6V0QeOoxa_d1Y_T5zX9o2e4SQ5D_ot0SFaYLZXlh-FuIsoOZHN44bRnnk28jpa6YAPHtevsEfzzjUttiKWIl9cmcYw0lhoRUCLyvIuVr29GTG6Xgl0jXgBIshrY_c1YGurFyYrDmPZ0bcNB2f1_T7uHmc44lRj3XS-Hfc2zifacBVrIxe499bOkfYFExj5JsfI9DIqpHtZCO3rMpaRnjvwyTk_0cgQ",
        },
      }).then(function (response) {
        // handle success
        const result = response.data.docs;
        setlectureList(result);
        console.log(result);
      }).catch(function (e){

        console.log(e);
      });
    }

    fetchLectureList();
  }, []);

  return (
    <div className="account" style={{ color: "#000" }}>
      <MenuBar title="Home" />
      <center>
        <Tabs lectureList={lectureList}  />
      </center>
    </div>
  );
}

export default Lectures;
