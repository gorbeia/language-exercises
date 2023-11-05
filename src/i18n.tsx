import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Choose a lesson": "Choose a lesson",
      "Fill the gaps": "Fill the gaps",
      "Check": "Check",
      "Continue": "Continue",
      "Start again": "Start again",
      "Close": "Close",
      "Correct": "Correct!",
      "Incorrect": "Incorrect!",
      "rightExercises" : "{{right}} right :-)",
      "wrongExercises" : "{{wrong}} wrong :-(",
    }
  },
  eu: {
    translation: {
        "Choose a lesson": "Aukeratu ariketa",
        "Fill the gaps": "Hutsuneak bete",
        "Check": "Egiaztatu",
        "Continue": "Jarraitu",
        "Start again": "Hasi berriro",
        "Close": "Itxi",
        "Correct": "Zuzen!",
        "Incorrect": "Oker!",
        "rightExercises" : "{{right}} zuzen :-)",
        "wrongExercises" : "{{wrong}} oker :-(",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "eu", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;