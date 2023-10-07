class AlarmClock {
  constructor() {
    this.alarmCollection = [];                 // свойство для хранения коллекции звонков
    this.intervalId = null;                    // свойство для хранения id таймера
  }

  addClock(time, action) {
    if (!time || !action) {
      throw new Error('Отсутствуют обязательные аргументы');
    } else {
      if (this.alarmCollection.some(element => element.time === time)) {
        console.warn('Уже присутствует звонок на это же время');
      } 
      this.alarmCollection.push({
        callback: action,
        time: time,
        canCall: true,                        
      });
    }
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(element => element.time != time);
  }

  getCurrentFormattedTime() {
    let now = new Date();
    return (now.toLocaleTimeString("ru-Ru", { hour: "2-digit", minute: "2-digit" }));
  }  

  start() {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach(element => {
          if ((element.time === this.getCurrentFormattedTime()) && (element.canCall)) {
            element.canCall = false;
            element.callback();
          }
        })
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(element => element.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];   
  }
}




