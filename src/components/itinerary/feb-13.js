const Feb13 = {
  morning: {
    label: "Tokyo and Yuzawa",
    activities:
    [
      { label: 'Shibuya to Tokyo stn', icon: 'train'},
      { label: 'Tokyo stn to Yuzawa', icon: 'train'},
      { label: 'Arrive in Yuzawa', icon: 'default'},
      { label: 'Explore Yuzawa', icon: 'default'},
    ],
  },

  lunch: {
    label: 'Ninjintei',
    description: 'Tonkatsu Restaurant in Yuzawa',
    icon: 'noodles'
  }, 

  afternoon: {
    label: "Yuzawa",
    activities:
    [
      { label: 'Explore Yuzawa', icon: 'default'},
    ],
  },

  dinner: {
    label: 'Nabezo',
    description: 'Sukiyaki Hotpots',
    icon: 'noodles'
  }, 

  evening: {
    label: "Akihabara",
    activities:
    [
      { label: 'Explore Akihabara', icon: 'sight'},
    ],
  },
};

export default Feb13;
