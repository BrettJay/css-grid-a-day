const Feb19 = {
  morning: {
    label: "Narita Airport",
    activities:
    [
      { label: 'Check out of APA Hotel', icon: 'hotel'},
      { label: 'Tokyo to NRT', icon: 'train'},
      { label: 'NRT → SIN', icon: 'flight'},
    ],
  },

  lunch: {
    label: 'Meal Service',
    description: 'Served onboard',
    icon: 'default'
  }, 

  afternoon: {
    label: "SQ215",
    activities:
    [
      { label: 'SIN → PER', icon: 'plane'}
    ],
  },

  dinner: {
    label: 'Meal Service',
    description: 'Served onboard SQ215',
    icon: 'default'
  }, 

  evening: {
    label: "Perth",
    activities:
    [
      { label: 'Arrive in Perth', icon: 'default'},
    ],
  },
};

export default Feb19;
