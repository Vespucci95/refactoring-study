const sendAlert = () => console.warn('악당을 찾았소')
const VILLAIN = ["조커", "사루만"];
const checkForMiscreants = people => people.some(p => VILLAIN.includes(p)) && sendAlert();
checkForMiscreants(['슈퍼맨', '배트맨', '아이언맨', '사루만', '블랙위도우', '조커', '스파이더맨'])
checkForMiscreants(['슈퍼맨', '배트맨', '아이언맨', '블랙위도우', '스파이더맨'])
