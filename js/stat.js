function renderStatistics(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(20, 30, 320, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(10, 10, 320, 270);
  ctx.fillRect(10, 10, 320, 270);
  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';

  ctx.fillText('Ура вы победили!', 25, 35);
  ctx.fillText('Список результатов:', 25, 56);
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
        }
      }

  var histoHeight = 160;   // максим. столбик
  var histoX = 40;      // начальная координата x
  var step = histoHeight / max;   // коэф. для вычисл. высоты столбика
  var columnIndent = 90;  //  ширина  столбика + отступ
  var bottomY = 240;   // низ гистограммы

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    time = times[i];
    var height = step * time;
    if (name === 'Вы') { ctx.fillStyle='rgba(255, 0, 0, 1)'; }
      else {
        ctx.fillStyle='rgb(0, 0, ' +( 255 * Math.random().toFixed(1)).toFixed(0) + ')';
        }
    ctx.fillRect(histoX + columnIndent * i, bottomY - height, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText( time.toFixed(0), histoX + columnIndent * i + 8,          bottomY - height - 6);
    ctx.fillText( name, histoX + columnIndent * i, bottomY + 18);
      }
    }
