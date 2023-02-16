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
    INTRODUCTION_PAGE: "IntroPages",
    HOME_PAGE: "EnrollApps",
    SCAN_QRCODE: "QrCodeReader",
    SCAN_QRCODE_FOR_OTP: "QrCodeForSendOTP",
    ENTER_OTP: "SendOTP",
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
