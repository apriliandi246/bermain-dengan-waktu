export { };

const inputWaktu: string = "01:09";
const waktu: string[] = inputWaktu.split("");


const jam: number = parseInt(waktu[0] + waktu[1]);
const menit: number = parseInt(waktu[3] + waktu[4]);


const bujurDari: number = 105;
const bujurKe: number = 135;


const sw: number = Math.floor(((bujurKe - bujurDari) * 4) / 60);


let wa: number = jam + sw;

if (bujurDari === 105) {
   if (bujurKe === 120 && jam === 23) wa = -1 + sw;
   if (bujurKe === 135 && jam === 22) wa = -2 + sw;
   if (bujurKe === 135 && jam === 23) wa = -1 + sw;

} else if (bujurDari === 120) {
   if (bujurKe === 105 && jam === 0) wa = 24 + sw;
   if (bujurKe === 135 && jam === 23) wa = -1 + sw;

} else {
   if (bujurKe === 120 && jam === 0) wa = 24 + sw;
   if (bujurKe === 105 && jam === 0) wa = 24 + sw;
   if (bujurKe === 105 && jam === 1) wa = 25 + sw;
}


let hasilZona: string;

if (wa < 10) {
   if (menit < 10) {
      hasilZona = `${inputWaktu} ${formatZona(bujurDari)} => 0${wa}:0${menit} ${formatZona(bujurKe)}`;

      display(bujurDari, bujurKe, hasilZona);

   } else {
      hasilZona = `${inputWaktu} ${formatZona(bujurDari)} => 0${wa}:${menit} ${formatZona(bujurKe)}`;

      display(bujurDari, bujurKe, hasilZona);
   }

} else {
   if (menit < 10) {
      hasilZona = `${inputWaktu} ${formatZona(bujurDari)} => ${wa}:0${menit} ${formatZona(bujurKe)}`;

      display(bujurDari, bujurKe, hasilZona);

   } else {
      hasilZona = `${inputWaktu} ${formatZona(bujurDari)} => ${wa}:${menit} ${formatZona(bujurKe)}`;

      display(bujurDari, bujurKe, hasilZona);
   }
}


function formatZona(bujur: number) {
   if (bujur === 105) return "WIB";
   if (bujur === 120) return "WITA";
   if (bujur === 135) return "WIT";
}


function display(dari: number, ke: number, hasil: string) {
   console.log(
      `Dari            :  ${inputWaktu} ${formatZona(dari)} \nKe              :  ${formatZona(ke)} \nHasil Konversi  :  ${hasil}`
   );
}