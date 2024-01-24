const formatTime = minutes => {
  const totalMinutes = Math.floor(minutes);
  const seconds = Math.round((minutes - totalMinutes) * 60);
  if (minutes < 0) {
    return formatTime(Math.abs(minutes));
  }
  return `${totalMinutes} min ${seconds} sec`;
};

export default formatTime;
