const getDays = (date1, date2) => {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  console.log(Math.abs(date1 - date2) / ONE_DAY);
};

getDays(new Date("June 14, 2018"), new Date("June 20, 2019"));
