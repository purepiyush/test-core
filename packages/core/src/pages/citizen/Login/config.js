export const loginSteps = [
  {
    texts: {
      header: "CS_LOGIN_PROVIDE_MOBILE_NUMBER",
      cardText: "CS_LOGIN_TEXT",
      nextText: "CS_COMMONS_NEXT",
      submitBarLabel: "CS_COMMONS_NEXT",
    },
    inputs: [
      {
        label: "CORE_COMMON_MOBILE_NUMBER",
        type: "text",
        name: "mobileNumber",
        error: "ERR_HRMS_INVALID_MOB_NO",
        validation: {
          required: true,
          minlength: 10,
          maxlength: 10,
        },
      },
    ],
  },
  {
    texts: {
      header: "CS_LOGIN_OTP",
      cardText: "CS_LOGIN_OTP_TEXT",
      nextText: "CS_COMMONS_NEXT",
      submitBarLabel: "CS_COMMONS_NEXT",
    },
  },
  {
    texts: {
      header: "CS_LOGIN_PROVIDE_NAME",
      cardText: "CS_LOGIN_NAME_TEXT",
      nextText: "CS_COMMONS_NEXT",
      submitBarLabel: "CS_COMMONS_NEXT",
    },
    inputs: [
      {
        label: "CORE_COMMON_NAME",
        type: "text",
        name: "name",
        error: "CORE_COMMON_NAME_VALIDMSG",
        validation: {
          required: true,
          minlength: 1,
          maxlength: 50,
          // pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i,
          // pattern: /^(?!\s)[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}(?!\s)$/i
          pattern: "^[A-Za-z]+( [A-Za-z]+)*$",
        },
      },
    ],
  },
];
