//event loop Ассинхронность
//таймаут 
// const timeout = setTimeout(()=>{
//     console.log('After timeout')
// }, 2500)//принимает 2 параметра, второй в миллисекундах, чтобы перевсемти в секуны делем на 1000, т.е 2,5 секунды
// clearTimeout(timeout)
// интервал 
const interval = setInterval(()=>{
    console.log("After Interval")
}, 1500)// вторым пареметром устанавливаем через какой интервал запускать функцию
clearInterval(interval)