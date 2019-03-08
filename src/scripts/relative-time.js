/*
Esse código foi adaptado de https://github.com/n-johnson/relative-date/blob/master/lib/relative-date.js
O propósito da adaptação consiste em traduzir as informações das datas
 */
var relativeDate = (function(undefined){

  var SECOND = 1000,
    MINUTE = 60 * SECOND,
    HOUR = 60 * MINUTE,
    DAY = 24 * HOUR,
    WEEK = 7 * DAY,
    YEAR = DAY * 365,
    MONTH = YEAR / 12;

  var formats = [
    [ 0.7 * MINUTE, 'neste momento' ],
    [ 1.5 * MINUTE, 'um minuto atrás' ],
    [ 60 * MINUTE, 'minutos atrás', MINUTE ],
    [ 1.5 * HOUR, 'uma hora atrás' ],
    [ DAY, 'horas atrás', HOUR ],
    [ 2 * DAY, 'ontem' ],
    [ 7 * DAY, 'dias atrás', DAY ],
    [ 1.5 * WEEK, 'uma semana atrás'],
    [ MONTH, 'semanas atrás', WEEK ],
    [ 1.5 * MONTH, 'um mês atrás' ],
    [ YEAR, 'meses atrás', MONTH ],
    [ 1.5 * YEAR, 'um ano atrás' ],
    [ Number.MAX_VALUE, 'anos atrás', YEAR ]
  ];

  function relativeDate(input,reference){
    !reference && ( reference = (new Date).getTime() );
    reference instanceof Date && ( reference = reference.getTime() );
    input instanceof Date && ( input = input.getTime() );

    var delta = reference - input,
      format, i, len;

    for(i = -1, len=formats.length; ++i < len; ){
      format = formats[i];
      if(delta < format[0]){
        return format[2] == undefined ? format[1] : Math.round(delta/format[2]) + ' ' + format[1];
      }
    };
  }

  return relativeDate;

})();

if(typeof module != 'undefined' && module.exports){
  module.exports = relativeDate;
}
