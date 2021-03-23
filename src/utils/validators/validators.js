export  const required = (value)=>{
    if(!value)return "Field is required"
    return undefined
}
export  const maxLengthCreator =(maxLength)=> (value)=>{
    if(value && value.length>maxLength)return `Max length ${maxLength} symbols`
    /* Перед тим як перевіряти довжину, варто глянути чи ісгує значення, щоб не кидало помилку
        // Коли ми отримали помилку то валідатор не дасть здійснити відправку данних в БЛЛ, свого роду він стопає функці
        онСабміт в редакс форм
    */
    return undefined
}

