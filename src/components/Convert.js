import React, { useEffect, useState } from "react";
import axios from "axios";
const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ languange, text }) => {
  const [translation, setTranslation] = useState(null);

  useEffect(() => {
    const translate = async () => {
      const URL = "https://translation.googleapis.com/languange/translate/v2";
      const requestBody = {};
      const requestQueryStrings = {
        params: {
          q: text,
          target: languange,
          key: KEY
        }
      };
      const translatedWord = await axios.post(
        URL,
        requestBody,
        requestQueryStrings
      );
      // const translatedWord = await axios.get("url", {
      //   key: KEY,
      //   q: text,
      //   languange: languange
      // });
      // setTranslation(translatedWord);

      console.log(translatedWord);
      setTranslation("Hola");
    };
    console.log("something changed", languange, text);
    translate();
  }, [languange, text]);

  return <div>{translation}</div>;
};

export default Convert;
