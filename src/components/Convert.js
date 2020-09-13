import React, { useEffect, useState } from "react";
import axios from "axios";
const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ languange, text }) => {
  const [translation, setTranslation] = useState("");
  const [debouncedText, setDebouncedText] = useState(translation);
  useEffect(() => {
    const TimeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(TimeoutId);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const URL = "https://translation.googleapis.com/language/translate/v2";
      const requestBody = {};
      const requestQueryStrings = {
        params: {
          q: debouncedText,
          target: languange.value,
          key: KEY
        }
      };
      const { data } = await axios.post(URL, requestBody, requestQueryStrings);
      setTranslation(data.data.translation[0].translatedText);
    };
    translate();
  }, [languange, debouncedText]);

  return <div>{translation}</div>;
};

export default Convert;
