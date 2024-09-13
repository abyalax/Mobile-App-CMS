
export function timeSinceUpload(date: Date): string {
    const now = new Date();
    const elapsedTime = Math.floor((now.getTime() - date.getTime()) / 1000); // Waktu berlalu dalam detik

    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInMonth = secondsInDay * 30; // Anggap 30 hari dalam sebulan
    const secondsInYear = secondsInDay * 365; // Anggap 365 hari dalam setahun

    if (elapsedTime < secondsInMinute) {
        return `${elapsedTime} detik`;
    } else if (elapsedTime < secondsInHour) {
        const minutes = Math.floor(elapsedTime / secondsInMinute);
        return `${minutes} menit`;
    } else if (elapsedTime < secondsInDay) {
        const hours = Math.floor(elapsedTime / secondsInHour);
        return `${hours} jam`;
    } else if (elapsedTime < secondsInMonth) {
        const days = Math.floor(elapsedTime / secondsInDay);
        return `${days} hari`;
    } else if (elapsedTime < secondsInYear) {
        const months = Math.floor(elapsedTime / secondsInMonth);
        return `${months} bulan`;
    } else {
        const years = Math.floor(elapsedTime / secondsInYear);
        return `${years} tahun`;
    }
}