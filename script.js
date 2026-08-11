function updateClock() {
  const now = new Date();

  // 時間・分・秒の取得（2桁揃え）
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // <div id="clock"> の中身を書き換え
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

  // 年・月・日・曜日の取得
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため+1
  const date = String(now.getDate()).padStart(2, '0');
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayName = days[now.getDay()];

  // <div id="date"> の中身を書き換え
  document.getElementById('date').textContent = `${year}/${month}/${date} (${dayName})`;
}

// ページ読み込み時に即時実行し、その後1秒（1000ミリ秒）ごとに更新
updateClock();
setInterval(updateClock, 1000);
