import { SHORTTIME } from "../utils/constants.js";


// Поиск по слову, чекбоксу(<40мин)
export const searchMovies = (rawMovies, word, isShort) => {
  console.log("isShort222", isShort, "word222", word);
  if (!rawMovies) return [];
  if (isShort) {
    const filteredMovies = rawMovies.filter((item) => {
      return (
        (item.nameRU.toLowerCase().includes(word.toLowerCase()) ||
          item.nameRU.toLowerCase().includes(word.toLowerCase())) &&
        item.duration <= SHORTTIME
      );
    });
    return filteredMovies;
  } else {
    const filteredMovies = rawMovies.filter((item) => {
      return (
        item.nameRU.toLowerCase().includes(word.toLowerCase()) ||
        item.nameRU.toLowerCase().includes(word.toLowerCase())
      );
    });
    return filteredMovies;
  }
};
