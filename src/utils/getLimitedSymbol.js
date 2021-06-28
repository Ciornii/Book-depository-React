const getLimitedSymbol = item => {
  if (item.length > 300) {
    return `${item.substring(0, 300)}...`;
  }

  return item;
};

export default getLimitedSymbol;