export const DeliveryMethods = [
    {
        id: "0",
        type: "sms",
        description: "SMS",
        image: require("../assets/images/SMSOTP.png"),
    },
    {
        id: "1",
        type: "email",
        description: "coreo electrónico",
        image: require("../assets/images/EmailOTP.png"),
    },
    {
        id: "2",
        type: "qr_code",
        description: "ccódigo QR",
        image: require("../assets/images/QROTP.png"),
    },
    {
        id: "3",
        type: "plain_text",
        description: "la aplicación web",
        image: require("../assets/images/plainTextOTP.png"),
    },
];

export const ColorPalette = {
    BLACK: "#000000",
    WHITE: "#ffffff",
    PRIMARY_COLOR: "#1B8DE4",
    DISABLED_COLOR: "#BAC0CA",
    ALERT_TEXT_OPTIONS: "#015BBB",
    PRESSED_BUTTON: "#DBF0FF",
};

export const ScreensNames = {
    GET_STARTED: "GetStarted",
    INTRODUCTION_PAGE: "IntroPages",
    HOME_PAGE: "EnrollApps",
    SCAN_QRCODE: "QrCodeReader",
    ENTER_OTP: "SendOTP",
    FAQ: "FAQ",
};

export const EnrolledListTest = [
    {
        id: 0,
        appName: "Facebook",
        username: "user1",
        appLogo:
            "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
        deliveryMethod: "email",
    },
    {
        id: 1,
        appName: "Instagram",
        username: "user2",
        appLogo:
            "https://www.nicepng.com/png/detail/432-4329510_instagram-logo-logos-de-redes-sociales-instagram.png",
        deliveryMethod: "sms",
    },
    {
        id: 2,
        appName: "Twitter",
        username: "user3",
        appLogo:
            "https://openvisualfx.com/wp-content/uploads/2019/10/pnglot.com-twitter-bird-logo-png-139932.png",
        deliveryMethod: "qr",
    },
];

export const NotificationMessages = {
    APP_ENROLLED_SUCCESS: "Aplicación registrada exitosamente!",
    APP_ENROLLED_FAIULER:
        "No se ha podido registrar la aplicación. Intentelo más tarde",
    OTP_SENDED_SUCCESS: "OTP enviado exitosamente!",
    BAD_QR_CODE: "Código QR no válido",
    UPDATE_ACCOUNT_SUCCESS: "Aplicación actualizada exitosamente!",
    DELETE_SUCCESS: "Cuenta eliminada exitosamente!",
    DELETE_ERROR: "Error al eliminar cuenta!",
};

export const APP_NAME = "App safe";

export const PopUpMenuOptions = [
    {
        id: "1",
        description: "¿Cómo funciona?",
        icon: require("../assets/images/ShowIntroPages.png"),
    },
    {
        id: "2",
        description: "Preguntas frecuentes",
        icon: require("../assets/images/FAQ.png"),
    },
];
export const FAQ_ITEMS = [
    {
        id: "1",
        question: "¿Cómo agrego una cuenta a AppSafe?",
        answer: "Para agregar una aplicacción a AppSafe debes iniciar sesión en la cuenta en la cual deseas activar el doble factor de autenticación. Luego debes activar el doble factor de autenticación y seleccionar un método de entrega. Finalmente, cuando hayas finalizado el proceso de activación, aparecerá un código QR, el cual debes escanear con la aplicación AppSafe. Para comprobar que la cuenta se agregó correctamente, podras visualizar tu cuenta en la lista de aplicaciones registradas.",
    },
    {
        id: "2",
        question:
            "¿Si elimino mi cuenta desde AppSafe movil, se desactiva el doble factor de autenticación?",
        answer: "No, se debe eliminar la cuenta desde AppSafe movil, solo cuando se haya desactivado el doble factor de autenticación en la aplicación web",
    },
    {
        id: "3",
        question: "¿Cómo envio el OTP para poder tener acceso a mi cuenta?",
        answer: "Para ingresar el OTP cuando tratas de acceder a una cuenta en especifico, debes seleccionar esta cuenta de la lista de aplicaciones registradas en AppSafe.",
    },
    {
        id: "4",
        question: "¿Qué es un doble factor de autenticación?",
        answer: "El doble factor de autenticación o Two-Factor Authentication (2FA), en inglés, es un proceso de autenticación que utiliza dos formas de identificación para verificar la identidad del usuario.",
    },
    {
        id: "5",
        question: "¿Cómo funciona el doble factor de autenticación?",
        answer: "Requiere dos formas de identificación. Por lo general, una es una contraseña o PIN y la otra es algo que el usuario tiene en su poder, como un token o un dispositivo de autenticación.",
    },
    {
        id: "6",
        question: "¿Qué son los métodos de entrega?",
        answer: "Los métodos de entrega son la vía por la cual usted desea recibir los OTPs, puede ser SMS, correo electrónico, a través del prototipo web en forma de QR, entre otros.",
    },
];
