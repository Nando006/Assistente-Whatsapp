import express from "express";

export default function Server(qrcode: string) {
   const app = express();
   const port = process.env.PORT || 21465;

   app.get('/', (req, res) => {
      if (qrcode) {
         res.send(`<img src="${qrcode}" alt="QR Code" >`);
      } else {
         res.send(`Não tem QRCode`);
      };
   });

   app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
   });
};