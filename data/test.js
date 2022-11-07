const md = [
    {
        id: "0",
        type: "sms",
        description: "SMS",
    },
    {
        id: "1",
        type: "email",
        description: "coreo electrónico",
    },
    {
        id: "2",
        type: "qr",
        description: "ccódigo QR",
    },
];

const index = md.findIndex((item) => {
    return item.type === "sms";
});

console.log(md[index].type);
