import React, { useEffect, useState } from "react";
import axios from "axios";
const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ languange, text }) => {
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    const translate = async () => {
      const URL = "https://translation.googleapis.com/languange/translate/v2";
      const requestBody = {};
      const requestQueryStrings = {
        params: {
          q: text,
          target: languange.value,
          key: KEY,
        },
      };
      const { data } = await axios.post(URL, requestBody, requestQueryStrings);
      setTranslation("Hola");
    };
    translate();
  }, [languange, text]);

  return <div>{translation}</div>;
};

export default Convert;
