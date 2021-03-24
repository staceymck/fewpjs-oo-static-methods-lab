class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const words = string.split(' ');
    const titleCase = words.map((word) => {
      if (!exceptions.includes(word) || word === words[0]) {
        return this.capitalize(word);
      } else {
        return word;
      }; 
    });
    return titleCase.join(" ");
  }
}