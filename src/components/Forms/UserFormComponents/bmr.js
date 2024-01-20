export const bmr = data => {
  const date = new Date(data.birthday);
  const age = new Date().getFullYear() - date.getFullYear();
  const weightMod = 10 * data.currentWeight;
  const heightMod = 10 * data.height;
  const ageModMale = 5 * age + 5;
  const ageModFemale = 5 * age - 161;
  let value = 0;

  if (data.sex === 'male' || data.sex === 'female') {
    switch (data.levelActivity) {
      case 1:
        value =
          (weightMod +
            heightMod -
            (data.sex === 'male' ? ageModMale : ageModFemale)) *
          1.2;
        break;
      case 2:
        value =
          (weightMod +
            heightMod -
            (data.sex === 'male' ? ageModMale : ageModFemale)) *
          1.375;
        break;
      case 3:
        value =
          (weightMod +
            heightMod -
            (data.sex === 'male' ? ageModMale : ageModFemale)) *
          1.55;
        break;
      case 4:
        value =
          (weightMod +
            heightMod -
            (data.sex === 'male' ? ageModMale : ageModFemale)) *
          1.725;
        break;
      case 5:
        value =
          (weightMod +
            heightMod -
            (data.sex === 'male' ? ageModMale : ageModFemale)) *
          1.9;
        break;
      default:
        break;
    }
  }

  return Math.round(value);
};
