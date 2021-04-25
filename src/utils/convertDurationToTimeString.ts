export function convertDurationToTimeString(duration:number) {
    // floor p/ arredondar sobra da divisão (senão completar 1h retorna 0 horas)
    const hours = Math.floor(duration / 3600)
    // pega os minutos que sobram do resto da divisão e divide por 60
    const minutes = Math.floor((duration % 3600) /60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
    //vai percorrer o array string e adicionar um zero a esquerda senão tiver 2 dígitos
      .map(unit => String(unit).padStart(2, '0'))
      .join(':')
      
    return timeString;
}